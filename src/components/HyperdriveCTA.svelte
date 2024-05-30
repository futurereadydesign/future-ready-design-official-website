<section class="hyperdrive-cta" bind:this={getInTouchSection} use:storyblokEditable={blok}>
    <h2>
        {blok.title}
        <span bind:this={getInTouchHeadingElement}>
            <svg viewBox="0 0 39 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37 2L2 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 10"/>
            </svg>
            <span>{blok.title_animated_word}</span>
        </span>
    </h2>
    <div class="scan-cta-button-wrapper">
        <a href={blok.button_link.cached_url} bind:this={getInTouchCTA} class="button button-primary">
            <span>{blok.button_text}</span>
            <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.58203 11H17.4154" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11 4.5835L17.4167 11.0002L11 17.4168" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </a>
    </div>  

    <!-- HYPERDRIVE ANIMATION -->
    <canvas bind:this={canvas}></canvas>
</section>


<style lang="scss">

    .hyperdrive-cta {
        position: relative;
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
            font-size: 2.5em;
            will-change: transform;

            > span {
                display: inline-block;
                position: relative;
                // margin-left: 1em;
                transform: translateX(1em);
                transition: 450ms;
                
            }
            svg {
                width: 0.8em;
                height: auto;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateX(calc(-100% - 0.15em));
                transition: 250ms;
                transition-delay: 250ms;
                opacity: 0.45;
            }
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
    .hyperdrive-cta.hovering {
        h2 {

            span {
                // margin-left: 0em;
                transform: translateX(0);
            }
            svg {
                opacity: 0;
                transition-delay: 0s;
            }
        }
    }



    /* MEDIUM SCREEN */
    @media screen and (max-width: 900px) {
        .hyperdrive-cta {

            h2 { 
                font-size: 2.25em;
            }
        }
    }

    /* SMALL SCREEN */
    @media screen and (max-width: 768px) {
        .hyperdrive-cta {

            h2 { 
                max-width: 10em;
                text-align: center;

                > span {
                    transform: translateX(0);
                    margin-left: 1em;
                }
            }
        }

        .hyperdrive-cta.hovering {

            h2 { 

                span {
                    margin-left: 0em;
                }
            }
        }
    }
    




</style>


<script>
    // GLOBAL SVELTE FUNCTIONS
    import { fade } from 'svelte/transition';
    import { onMount, onDestroy } from 'svelte';

    // Importeer de storyblokEditable functie vanuit de Storyblok package
    import { storyblokEditable } from "@storyblok/svelte";

    // Definieer de blok
    export let blok;



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
            // if mouse down then go to hyper speed
            // if(mouse.button){
            //     if(hyperSpeed < 1.75){
            //         hyperSpeed += 0.01;
            //     }
            // }else{
            //     if(hyperSpeed > 1.01){
            //         hyperSpeed -= 0.01;
            //     }else if(hyperSpeed > 1.001){
            //         hyperSpeed -= 0.001;
            //     }
            // }
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