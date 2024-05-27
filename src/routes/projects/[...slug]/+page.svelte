<script>
    import '/src/styles/main.css';
    import Footer from '/src/components/Footer.svelte';

    /** @type {import('./$types').PageData} */

    // Laat het juiste jaartal zien voor de copyright
    let currentYear = new Date().getFullYear();

    // GLOBAL STORYBLOK FUNCTIONS
    import { renderRichText } from "@storyblok/js";

    // Exporteer de data
    export let data;
    // console.log(data);

    // Exporteer de slug voor de meta data
    export let slug;

    /* Meta data */
    let pageTitle = data.post.title;
    let pageDescription = data.post.metaDescription;
    let thumbnailUrl = data.post.metaImage;

    

    // GLOBAL SVELTE FUNCTIONS
    // import { fade } from 'svelte/transition';
    import { onMount, onDestroy } from 'svelte';

    // DEFINE VARIABLES
    let getInTouchSection;
    let getInTouchCTA;
    let getInTouchHeadingElement;
   
    let canvas;

    // HYPERDRIVE ANIMATION / INTERACTION BUTTON --------------------
    onMount(() => {

        getInTouchCTA.addEventListener('mouseover', function() {
            getInTouchSection.classList.add('hovering');
        });

        getInTouchCTA.addEventListener('mouseout', function() {
            getInTouchSection.classList.remove('hovering');
        });




        // CANVAS HYPERDRIVE ANIMATION
        // CREDITS: https://stackoverflow.com/questions/46436270/hyperdrive-effect-in-canvas-across-randomly-placed-circles
        const ctx = canvas.getContext("2d");

        // very simple mouse
        const mouse  = {x : 0, y : 0, button : false}	
        function mouseEvents(e){
            mouse.x = e.pageX;
            mouse.y = e.pageY;
            mouse.button = e.type === "mousedown" ? true : e.type === "mouseup" ? false : mouse.button;
        }
        ["down","up","move"].forEach(name => document.addEventListener("mouse"+name,mouseEvents));

        // High performance array pool using buubleArray to separate pool objects and active object.
        // This is designed to eliminate GC hits involved with particle systems and 
        // objects that have short lifetimes but used often.
        // Warning this code is not well tested.
        const bubbleArray = () => {
            const items = [];
            var count = 0;
            return {
                clear(){  // warning this dereferences all locally held references and can incur Big GC hit. Use it wisely.
                    this.items.length = 0;
                    count = 0;
                },
                update() {
                    var head, tail;
                    head = tail = 0;
                    while(head < count){
                        if(items[head].update() === false) {head += 1 }
                        else{
                            if(tail < head){
                                const temp = items[head];
                                items[head] = items[tail];
                                items[tail] = temp;
                            }
                            head += 1;
                            tail += 1;
                        }
                    }
                    return count = tail;
                },
                createCallFunction(name, earlyExit = false){
                    name = name.split(" ")[0];
                    const keys = Object.keys(this);
                    if(Object.keys(this).indexOf(name) > -1){  throw new Error(`Can not create function name '${name}' as it already exists.`) }
                    if(!/\W/g.test(name)){
                        let func;
                        if(earlyExit){
                            func = `var items = this.items; var count = this.getCount(); var i = 0;\nwhile(i < count){ if (items[i++].${name}() === true) { break } }`;
                        }else{
                            func = `var items = this.items; var count = this.getCount(); var i = 0;\nwhile(i < count){ items[i++].${name}() }`;
                        }
                        !this.items && (this.items = items);
                        this[name] = new Function(func);
                    }else{  throw new Error(`Function name '${name}' contains illegal characters. Use alpha numeric characters.`) }
                    
                },
                callEach(name){var i = 0; while(i < count){ if (items[i++][name]() === true) { break } } },
                each(cb) { var i = 0; while(i < count){ if (cb(items[i], i++) === true) { break } } },
                next() { if (count < items.length) { return items[count ++] } },
                add(item) {
                    if(count === items.length){
                        items.push(item);
                        count ++;
                    }else{
                        items.push(items[count]);
                        items[count++] = item;
                    }
                    return item;
                },
                getCount() { return count },
            }
        }

        // Helpers rand float, randI random Int
        // doFor iterator
        // sCurve curve input -Infinity to Infinity out -1 to 1
        // randHSLA creates random colour
        // CImage, CImageCtx create image and image with context attached
        
        const randI = (min, max = min + (min = 0)) => (Math.random() * (max - min) + min) | 0;
        const rand  = (min = 1, max = min + (min = 0)) => Math.random() * (max - min) + min;

        // Helper function to run a callback a certain number of times
        const doFor = (count, cb) => { var i = 0; while (i < count && cb(i++) !== true); };

        // Function for S-curve transformation, used for smooth transitions
        const sCurve = (v, p) => (2 / (1 + Math.pow(p, -v))) - 1;

        // Function to generate HSLA color close to #21DBD0
        const randHSLA = (h = 165, h1 = 179, s = 68, s1 = 78, l = 48, l1 = 58, a = 0.95, a1 = 1) => {return `hsla(${randI(h, h1) % 360}, ${randI(s, s1)}%, ${randI(l, l1)}%, ${rand(a, a1)})`;}
        const CImage = (w = 128, h = w) => (c = document.createElement("canvas"),c.width = w,c.height = h, c);
        const CImageCtx = (w = 128, h = w) => (c = CImage(w,h), c.ctx = c.getContext("2d"), c);

        // create image to hold text
        var textImage = CImageCtx(720, 720);
        var c = textImage.ctx;
        c.fillStyle = "#FF0";
        c.font = "64px arial black";
        c.textAlign = "center";
        c.textBaseline = "middle";
        const text = "".split(",");
        text.forEach((line,i) => { c.fillText(line,512,i * 68 + 68) });
        const maxLines = text.length * 68 + 68;
        function starWarIntro(image,x1,y1,x2,y2,pos){
        var iw = image.width;
        var ih = image.height;
        var hh = (x2 - x1) / (y2 - y1);      // Slope of left edge
        var w2 = iw / 2;                      // half width
        var z1 = w2 - x1;                    // Distance (z) to first line
        var z2 = (z1 / (w2 - x2)) * z1 - z1; // distance (z) between first and last line
        var sk,t3,t3a,z3a,lines, z3, dd = 0, a = 0, as = 2 / (y2 - y1);
        for (var y = y1; y < y2 && dd < maxLines; y++) {      // for each line

            t3 = ((y - y1) * hh) + x1;       // get scan line top left edge
            t3a = (((y+1) - y1) * hh) + x1;  // get scan line bottom left edge
            z3 = (z1 / (w2 - t3)) * z1;      // get Z distance to top of this line
            z3a = (z1 / (w2 - t3a)) * z1;      // get Z distance to bottom of this line
            dd = ((z3 - z1) / z2) * ih;       // get y bitmap coord
            a += as;

            ctx.globalAlpha = a < 1 ? a : 1;
            dd += pos;                         // kludge for this answer to make text move
                                                // does not move text correctly 
            lines = ((z3a - z1) / z2) * ih-dd;       // get number of lines to copy
            ctx.drawImage(image, 0, dd , iw, lines, t3, y, w - t3 * 2, 1.5);
        }
        }


        // canvas settings
        var w = canvas.width;
        var h = canvas.height;
        var cw = w / 2;  // center 
        var ch = h / 2;
        // diagonal distance used to set point alpha (see point update)
        var diag = Math.sqrt(w * w + h * h);
        // If window size is changed this is called to resize the canvas
        // It is not called via the resize event as that can fire to often and
        // debounce makes it feel sluggish so is called from main loop.
        function resizeCanvas(){
        // points.clear();
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        w = canvas.width;
        h = canvas.height;
        cw = w / 2;  // center 
        ch = h / 2;
        diag = Math.sqrt(w * w + h * h);
        
        }
        // create array of points
        const points = bubbleArray(); 
        // create optimised draw function itterator
        points.createCallFunction("draw",false);
        // spawns a new star
        function spawnPoint(pos){
            var p = points.next();
            p = points.add(new  Point())    
            if (p === undefined) { p = points.add(new  Point()) }
            p.reset(pos);  
        }
        // point object represents a single star
        function Point(pos){  // this function is duplicated as reset 
            if(pos){
                this.x = pos.x;   
                this.y = pos.y;   
                this.dead = false;
            }else{
                this.x = 0;
                this.y = 0;
                this.dead = true;
            }
            this.alpha = 0;
            var x = this.x - cw;
            var y = this.y - ch;
            this.dir = Math.atan2(y,x);
            this.distStart = Math.sqrt(x * x + y * y);
            this.speed = rand(0.01,1);
            // this.col = randHSLA(220,280,100,100,50,100);
            this.col = randHSLA(165, 179, 0, 73, 53, 100);
            
            this.dx = Math.cos(this.dir) * this.speed;
            this.dy = Math.sin(this.dir) * this.speed;
        }
        Point.prototype = {
            reset : Point,  // resets the point
            update(){       // moves point and returns false when outside 
                this.speed *= hyperSpeed;  // increase speed the more it has moved
                this.x += Math.cos(this.dir) * this.speed;
                this.y += Math.sin(this.dir) * this.speed;
                var x = this.x - cw;
                var y = this.y - ch;
                this.alpha = (Math.sqrt(x * x + y * y) - this.distStart) / (diag * 0.5 - this.distStart);
                if(this.alpha > 1 || this.x < 0 || this.y < 0 || this.x > w || this.h > h){
                this.dead = true;
                }
                return !this.dead;
            },
            draw(){  // draws the point 
                ctx.strokeStyle = this.col;
                ctx.globalAlpha = 0.35 + this.alpha *0.75;
                ctx.beginPath();
                ctx.lineTo(this.x - this.dx * this.speed, this.y - this.dy * this.speed);
                ctx.lineTo(this.x, this.y);
                ctx.stroke();

            }
        }

        const maxStarCount = 400;
        const p = {x : 0, y : 0};
        var hyperSpeed = 1.001;
        const alphaZero = sCurve(1,2);
        var startTime;
        function loop(time){

            if(startTime === undefined){
                startTime = time;
            }
            if(w !== innerWidth || h !== innerHeight){
            resizeCanvas();
            }

            getInTouchCTA.addEventListener('mouseover', function() {
                if(hyperSpeed < 1.75){
                    hyperSpeed += 0.01;
                } 
            });

            getInTouchCTA.addEventListener('mouseout', function() {
                if (hyperSpeed > 1.01){
                    hyperSpeed -= 0.01;
                } else if(hyperSpeed > 1.001){
                    hyperSpeed -= 0.001;
                }
            });
            

            
            var hs = sCurve(hyperSpeed,2);
            ctx.globalAlpha = 1;
            ctx.setTransform(1,0,0,1,0,0); // reset transform


            //==============================================================
            // UPDATE the line below could be the problem. Remove it and try
            // what is under that        
            //==============================================================
            //ctx.fillStyle = `rgba(0,0,0,${1-(hs-alphaZero)*2})`;
            
            // next two lines are the replacement
            ctx.fillStyle = "Black";
            ctx.globalAlpha = 1-(hs-alphaZero) * 2;
            //==============================================================



            ctx.fillRect(0,0,w,h);
            // the amount to expand canvas feedback
            var sx = (hyperSpeed-1) * cw * 0.1;
            var sy = (hyperSpeed-1) * ch * 0.1;

            // increase alpha as speed increases
            ctx.globalAlpha = (hs-alphaZero)*2;
            ctx.globalCompositeOperation = "lighter";
            // draws feedback twice
            ctx.drawImage(canvas,-sx, -sy, w + sx*2 , h + sy*2)
            ctx.drawImage(canvas,-sx/2, -sy/2, w + sx , h + sy)
            ctx.globalCompositeOperation = "source-over";
            
            // add stars if count < maxStarCount 
            if(points.getCount() < maxStarCount){
                var cent = (hyperSpeed - 1) *0.5; // pulls stars to center as speed increases
                doFor(10,()=>{
                    p.x = rand(cw * cent ,w - cw * cent);  // random screen position
                    p.y = rand(ch * cent,h - ch * cent);
                    spawnPoint(p)
                    
                })
            }
            // as speed increases make lines thicker
            ctx.lineWidth = 2 + hs*2;
            ctx.lineCap = "round";
            points.update();  // update points
            points.draw();     // draw points
            ctx.globalAlpha = 1;
  
            requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);


    });

</script>

<!-- Laat de juiste titel zien en geef de meta data mee wanneer de pagina wordt gedeeld -->
<svelte:head>
    <meta name="title" content="{pageTitle} | Future Ready Design">
    <meta name="description" content="{pageDescription}">
    <meta property="og:image" content="{thumbnailUrl}">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://www.futureready.design/blogs/{slug}">
	<meta property="og:title" content="{pageTitle} | Future Ready Design">
	<meta property="og:description" content="{pageDescription}">
	<meta property="og:image" content="{thumbnailUrl}">

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:url" content="https://www.futureready.design/blogs/{slug}">
	<meta name="twitter:title" content="{pageTitle} | Future Ready Design">
	<meta name="twitter:description" content="{pageDescription}">
	<meta name="twitter:image" content="{thumbnailUrl}">
</svelte:head>

<main class="slug-projects-main">
 

    <!-- Alle data wordt ingeladen -->
    <article>
        <section class="projects-header wrapper-max">
            <div>
                <a href="/projects" class="button button-quaternary button-flipped">
                    <span class="s-nrtRPbawfH4D" data-svelte-h="svelte-18x73jy">Back to previous page</span> 
                    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="s-nrtRPbawfH4D"><path d="M4.58203 11H17.4154" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="s-nrtRPbawfH4D"></path><path d="M11 4.5835L17.4167 11.0002L11 17.4168" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="s-nrtRPbawfH4D"></path>
                    </svg>
                </a>
                <h1 class="slug-projects-title">{data.post.title}</h1>
                <p>{@html renderRichText(data.post.intro)}</p>
            </div>
            <div>
                <ul>
                    <li>
                        <strong>Client / partner</strong>
                        <h2>{data.post.clientOrPartner}</h2>
                    </li>
                    <li>
                        <strong>Project type</strong>
                        <h2>{data.post.projectType}</h2>
                    </li>
                    <li>
                        <strong>Project overview</strong>
                        <h2>{data.post.projectOverview}</h2>
                    </li>
                </ul>
            </div>
        </section>
        
        <section class="projects-main wrapper-large">
            <img src={data.post.image} alt={data.post.imageAlt}>
            {#if data.post.subtitle}
                <h2 class="wrapper-medium">{data.post.subtitle}</h2>
                <p class="wrapper-medium">{@html renderRichText(data.post.subtitleText)}</p>
            {/if}
        </section>
        
        {#if data.sliderItems[0]}
            <section class="projects-extra">
                <ul>
                    {#each data.sliderItems as sliderItem}
                        <li>
                            <img src={sliderItem.listImage} alt={sliderItem.listImageAlt}>
                            <h3>{sliderItem.listTitle}</h3>
                            <p>{sliderItem.listText}</p>
                        </li>
                    {/each}
                </ul>
            </section>
        {/if}
        {#if data.post.finalWordsTitle}
            <section class="projects-final">
                <h2 class="wrapper-medium">{data.post.finalWordsTitle}</h2>
                <p class="wrapper-medium">{@html renderRichText(data.post.finalWordsText)}</p>
            </section>
        {/if}
        <section class="hyperdrive-cta" bind:this={getInTouchSection}>
            <h2>{data.post.getInTouchTitle}</h2>
            <div class="scan-cta-button-wrapper">
                <a href="/contact" bind:this={getInTouchCTA} class="button button-primary">
                    <span>{data.post.getInTouchSpan}</span>
                    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.58203 11H17.4154" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11 4.5835L17.4167 11.0002L11 17.4168" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>  
        
            <!-- HYPERDRIVE ANIMATION -->
            <canvas bind:this={canvas}></canvas>
        </section>
    </article>


</main>

<Footer/>



<style lang="scss">
    main {
        margin: unset;
    }

    article {
        margin-top: 10em;

        .projects-header {
            display: flex;
            gap: 5em;

            div:nth-of-type(1) {
                flex: 1;

                a {
                    width: fit-content;
                }

                h1 {
                    font-size: 4em;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    text-align: left;
                }
                p {
                    font-size: 1.25em;
                    color: var(--color-white-45);
                }
            }

            div:nth-of-type(2) {
                max-width: 25em;
                width: 100%;
                height: fit-content;
                position: relative;
                padding: 2.25em 2.5em;
                margin-top: 3.25em;
                border-radius: 1.11em;
                background-color: var(--color-white-05);

                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    border: var(--border-width) solid var(--color-light-gray-65);
                    border-radius: inherit;
                    z-index: -1;
                }
                ul {
                    list-style: none;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 2.5em 2.25em;
                    
                    li {
                        
                        strong {
                            color: var(--color-white-45);
                        }
                        h2 {
                            margin-top: 0.25rem;
                            font-size: 1.75em;
                        }
                    }
                }
            }
        }

        .projects-main,
        .projects-final {
            margin-top: 6.25em;

            img {
                width: 100%;
                height: auto;
                border-radius: 1em;
            }
            h2 {
                font-size: 2em;
                margin-top: 3.75rem;
            }
            p {
                margin-top: .75em;
                white-space: pre-line;
            }
        }

        .projects-extra {
            overflow: hidden;
            margin-top: 6.25em;

            ul {
                display: flex;
                flex-wrap: nowrap;
                gap: 1.5em;
                overflow: auto;
                -ms-overflow-style: none;
                scrollbar-width: none;
                scroll-snap-type: x mandatory;
                list-style: none;

                li {
                    flex: 0 0 25em;
                    scroll-snap-align: start;
                    scroll-margin: calc((100vw - 1200px) / 2);

                    &:first-of-type {
                        margin-left: calc((100vw - 1200px) / 2);
                    }
                    &:last-of-type {
                        margin-right: calc((100vw - 1200px) / 2);
                    }
                    img {
                        width: 100%;
                        border-radius: 0.65em;
                        margin-bottom: 1.25em;
                    }
                    h3 {
                        font-size: 1.25em;
                        margin-bottom: 0.25em;
                    }
                    p {
                        color: var(--color-white-45);
                    }
                }

                &::-webkit-scrollbar { 
                    display: none; 
                }
            }
        }
    }

    // HYPERDRIVE SECTION
    .hyperdrive-cta {
        position: relative;
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
            font-size: 2.5em;
        }

        canvas {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            mix-blend-mode: screen;
            filter: saturate(1.5);
            z-index: -10;
            -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 20%, #000 80%, transparent 100%);
            mask-image: linear-gradient(to bottom, transparent 0%, #000 20%, #000 80%, transparent 100%);

        }

        .scan-cta-button-wrapper {
            margin: 2.5em 0;
        }
    }


    /* LARGE SCREEN */
    @media screen and (max-width: 1250px) {
        article {

            .projects-header {
                gap: 4.5em;

                div:nth-of-type(1) {
                    flex: unset;

                    h1 {
                        font-size: 3em;
                    }
                    p {
                        font-size: 1.15em;
                    }
                }

                div:nth-of-type(2) {
                    min-width: 25em;

                    ul {
                        li {
                            h2 {
                                font-size: 1.5em;
                            }
                        }
                    }
                }
            }

            .projects-extra {
                ul {
                    padding: 0 2.5rem;
                    li {
                        scroll-margin: 0 2.5rem;

                        &:first-of-type {
                            margin-left: 0;
                        }
                        &:last-of-type {
                            margin-right: 0;
                        }
                    }
                }
            }
        }
    }

    /* MODERATE SCREEN */
    @media screen and (max-width: 1100px) {
        article {

            .projects-header {

                div:nth-of-type(2) {
                    flex: 1;
                    max-width: unset;
                    min-width: unset;

                    ul {
                        gap: 1.25em;
                    }
                }
            }
        }
    }

    /* MEDIUM SCREEN */
    @media screen and (max-width: 900px) {
        article {
            // margin-top: 10em;

            .projects-header {
                display: flex;
                flex-direction: column;
                gap: 2.5em;

                div:nth-of-type(1) {
                    flex: 1;

                    a {
                        width: fit-content;
                    }

                    h1 {
                        font-size: 2.75em;
                    }
                }
                div:nth-of-type(2) {
                    margin-top: 0;

                    ul {
                        gap: 2em 2em;
                    }
                }
            }
        }


        .hyperdrive-cta {

            h2 { 
                font-size: 2.25em;
            }
        }
    }

    /* SMALL SCREEN */
    @media screen and (max-width: 768px) {
        article {

            .projects-main,
            .projects-final {
                margin-top: 5rem;

                h2 {
                    margin-top: 2.25rem;
                }
            }
            
            .projects-main {
                .wrapper-medium {
                    width: 100%;
                }
            }

            .projects-extra {
                ul {
                    padding: 0 1rem;
                    max-width: 100vw;

                    li {
                        scroll-margin: 0 1rem;
                    }
                }
            }
        }

        .hyperdrive-cta {

            h2 { 
                max-width: 10em;
                text-align: center;
            }
        }
    }


    /* EXTRA SMALL SCREEN */
    @media screen and (max-width: 500px) {
        article {

            .projects-header {

                div:nth-of-type(2) {
                    padding: 1.45em 1.5em;

                    ul {
                        li {
                            h2 {
                                font-size: 1.45em;
                            }
                        }
                    }
                }
            }
            .projects-extra {
                ul {

                    li {
                        flex: 0 0 80vw;
                    }
                }
            }
        }
    }

</style>






<!-- <style>
    .slug-projects-main {
        display: flex;
        justify-content: center;
        padding: 0 20px;
    }

    .slug-projects-section {
        max-width: 800px;
        width: 100%;
        padding: 20px;
    }

    .slug-projects-article {
        margin-top: 20px;
        padding: 20px;
        border-radius: 5px;
    }

    /* PICTURE -------------------------------- */
    /* PICTURE -------------------------------- */
    picture {
        display: grid;
        place-items: center;
        margin-top: 3.15em;
        margin-bottom: 2.75em;
    }
    picture a {
        transition: 250ms;
        position: relative;
    }
    picture a:hover {
        opacity: 0.75;
    }
    picture a::after {
        content: '';
        position: absolute;
        left: -1em;
        top: -1em;
        height: calc(100% + 1.75em);
        width: calc(100% + 2em);
        border: var(--border-width) solid var(--color-white);
        border-radius: 1.15em;
        z-index: -1;
        opacity: 0;
        transition: 250ms opacity;
    }
    picture a:focus-visible::after {
        opacity: 1;
    }
    picture a img {
        height: 2.5em;
    }

    .slug-projects-image {
        display: block;
        margin: 0 auto; 
        margin-bottom: 2em;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    .slug-projects-link {
        display: block; 
        bottom: 1em; 
        left: 1em; 
        text-decoration: none;
        color: inherit;
        /* font-weight: 500; */
    }

    .slug-projects-link-content {
        display: inline-flex; 
        align-items: center;
    }

    .slug-projects-link-content:hover {
        text-decoration: underline;
    }

    svg {
        width: 1em;
        height: 1em;
        margin-bottom: -0.2em;
        margin-right: 0.2em;
    }

    .slug-projects-title {
        font-size: 2em;
        text-align: left;
    }

    .slug-projects-date {
        margin-top: -3.5rem;
        margin-bottom: 3em;
    }

    .slug-projects-date {
        color: rgba(255, 255, 255, 0.694);
    }

    .slug-projects-content {
        text-align: justify;
        color: rgba(255, 255, 255, 0.694);
    }

    /* FOOTER -------------------------------- */
    /* FOOTER -------------------------------- */
    footer {
        font-family: var(--font-degular);
        padding: 4.165em 0 1.95em 0;
        text-align: center;
    }
    footer > span {
        font-size: 0.9em;
        color: var(--color-white-45);
    }
    footer > div {
        margin-bottom: 0.5em;
    }
    footer > div a {
        color: var(--color-white);
        text-decoration: none;
    }
    footer > div a:hover {
        text-decoration: underline; 
    }
    footer > div a:focus-visible {
        color: var(--color-lightblue);
        text-decoration: underline;
    }

    /* MEDIA QUERIES -------------------------------- */
    /* MEDIA QUERIES -------------------------------- */
    @media (max-width: 768px) {
        .slug-projects-main {
            padding: 0 10px;
        }

        .slug-projects-section {
            padding: 10px;
        }
    }

</style> -->
