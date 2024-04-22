<section class="hero-main">
    <div class="inner-hero-sticky" bind:this={innerHeroSticky}>
        <h1 class="wrapper-max">
            we create digital solutions for those that want to make impact
        </h1>
        <div bind:this={innerHeroSphere}>
            <!-- SPHERE -->
            <div></div>
            
            <!-- IMPACT WAVE -->
            <svg viewBox="0 0 50 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.24323 0.160285C5.82821 -0.325137 8.71077 0.329129 9.6816 1.62163C10.9931 3.36772 12.5137 4.87645 14.161 6.11435C17.8946 8.92024 21.7593 10.0002 25 10.0002C28.2407 10.0002 32.1054 8.92024 35.839 6.11435L40.0016 7.49912L35.839 6.11435C37.4863 4.87645 39.0069 3.36772 40.3184 1.62163C41.2892 0.329129 44.1718 -0.325138 46.7568 0.160285C49.3417 0.645707 50.6503 2.087 49.6794 3.3795C48.1479 5.41841 46.301 7.27804 44.1642 8.88389C39.5409 12.3584 33.017 15 25 15C16.983 15 10.4591 12.3584 5.83579 8.88389C3.69897 7.27804 1.85205 5.41841 0.320566 3.3795C-0.650269 2.087 0.658252 0.645707 3.24323 0.160285Z" fill="white"/>
            </svg>
        </div>
    </div>
    <div class="inner-hero-target" bind:this={innerHeroTarget}>
        <!-- SPHERE TARGET -->
        <svg width="2" height="147" viewBox="0 0 2 147" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1V146" stroke="white" stroke-opacity="0.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 10"/>
        </svg>            
        <svg viewBox="0 0 54 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M51 3C49.2941 5.27111 47.2735 7.29221 45.0029 8.99854C39.9885 12.7669 33.7549 15 27 15C20.2451 15 14.0115 12.7669 8.99708 8.99854C6.72652 7.29221 4.70591 5.27111 3 3" stroke-width="5" stroke-linecap="round"/>
        </svg>
        <span>Like this. Scroll for more impact.</span>
    </div>
</section>


<style lang="scss">

    .hero-main {
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .inner-hero-sticky {
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 1;
            transition: transform 175ms ease-out;
            will-change: transform;

            h1 {
                font-size: 4em;
            }

            // SPHERE
            * {
                will-change: transform;
            }
            div {
                position: relative;
                margin-top: 2.25em;
                height: 2.5em;
                aspect-ratio: 1;
                // background-image: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(212,248,246,1) 34%, rgba(150,238,233,1) 65%, rgba(33,219,208,1) 100%);
                background-image: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(212,248,246,1) 34%, rgba(150,238,233,1) 65%, rgba(33,219,208,1) 100%);
                background-size: 200% 200%;
                // animation: moveLight 2s linear infinite;

                animation-name: moveLight, scaleSphere;
                animation-duration: 3s, 5s;
                animation-timing-function: linear, ease-in-out;
                animation-iteration-count: infinite;
                border-radius: 50%;

                transition: 250ms;
                transition-delay: 0;

                svg {
                    position: absolute;
                    z-index: -5;
                    will-change: transform;
                    opacity: 0;
                    bottom: 50%;
                    transform: translateY(50%);
                }
            }
            div::before,
            div::after {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                height: inherit;
                aspect-ratio: 1;
                border-radius: inherit;
                background-image: inherit;
                background-size: inherit;
                animation-name: inherit;
                animation-duration: inherit;
                animation-timing-function: inherit;
                animation-iteration-count: inherit;
                position: absolute;
                z-index: -1;
                filter: blur(var(--filter-blur-between)) saturate(250%);
            }
            div::after {
                filter: blur(var(--filter-blur-moderate)) saturate(250%);
            }
            div > div {
                z-index: -2;
                position: absolute;
                left: 0;
                top: 0;
                margin-top: 0;
                opacity: 0.75;
                filter: blur(var(--filter-blur-less)) saturate(150%);
            }
            div > div::after {
                filter: blur(var(--filter-blur-least)) saturate(250%);
            }
            
        }
        .inner-hero-sticky.snapped {
            div {
                transform: scale(1);
                animation-name: moveLight;
    
                filter: blur(var(--filter-blur)) saturate(150%);
                transition: 1s;
                transition-delay: 150ms;

                svg {
                    animation-name: impactWave;
                    animation-duration: 2s;
                    animation-timing-function: ease-in-out;
                    animation-fill-mode: forwards;
                }
            }
        }

        .inner-hero-target {
            position: relative;
            margin-top: 8.75em;
            height: 2em;
            aspect-ratio: 1;
            border-radius: 50%;
            background-color: var(--color-white-05);
            border: var(--border-width) solid var(--color-light-gray-65);

            svg {
                position: absolute;
                bottom: 0;
                left: 50%;
                width: 2.5em;
                height: auto;
                transform: translateX(-50%) translateY(100%);

                path {
                    stroke: var(--color-white);
                    transition: 450ms;
                }
            }
            svg:first-of-type {
                position: absolute;
                width: var(--border-width);
                height: auto;
                left: 50%;
                top: 0;
                transform: translateX(-50%) translateY(calc(-100% - 0.5em));
            }
            span {
                opacity: 0;
                position: absolute;
                left: 50%;
                top: 100%;
                transform: translateX(-50%) translateY(2.5em);
                width: max-content;
                font-family: var(--font-degular);
                color: var(--color-white-45);

                transition: 450ms;
                transition-delay: 0;
            }
            
        }
        .inner-hero-target.snapped {
            svg {
                path {
                    stroke: var(--color-white-05);
                }
            }
            span {
                opacity: 1;
                transition: 1.5s;
                transition-delay: 1s;
            }
        }
    }


    // KEYFRAMES
    @keyframes moveLight {
        0%, 100% {
            background-position: 50% 80%;
        }
        25% {
            background-position: 80% 50%; /* Light seems to move to the right */
        }
        50% {
            background-position: 50% 20%; /* Light moves to the top */
        }
        75% {
            background-position: 20% 50%; /* Light moves to the left */
        }
    }
    @keyframes scaleSphere {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.075);
        }
    }
    @keyframes impactWave {
        0%, 100% {
            opacity: 0;
            transform: scale(1);
        }
        35% {
            opacity: 0.15;
        }
        95% {
            transform: scale(45) translateY(150%);
        }
    }
    // @keyframes scaleIn {
    //     0% {
    //         transform: scale(0);
    //     }
    //     100% {
    //         transform: scale(1);
    //     }
    // }
</style>

<script>
    // GLOBAL SVELTE FUNCTIONS
    import { fade } from 'svelte/transition';
    import { onMount, onDestroy } from 'svelte';

    // DEFINE VARIABLES
    let innerHeroSticky;
    let innerHeroStickyPositionY;
    let innerHeroSphere;
    let innerHeroSpherePositionY;
    let innerHeroSphereHeight;
    let innerHeroTarget;
    let innerHeroTargetPositionY;
    

    // SCROLL ANIMATION / INTERACTION SPHERE --------------------
    onMount(() => {
        innerHeroStickyPositionY = innerHeroSticky.getBoundingClientRect().top + window.pageYOffset;
        // console.log(innerHeroStickyPositionY);

        innerHeroSpherePositionY = innerHeroSphere.getBoundingClientRect().top + window.pageYOffset;
        innerHeroSphereHeight = innerHeroSphere.getBoundingClientRect().height;
        // console.log(innerHeroSphereHeight);
        // console.log(innerHeroSpherePositionY);

        innerHeroTargetPositionY = innerHeroTarget.getBoundingClientRect().top + window.pageYOffset;
        // console.log(innerHeroTargetPositionY);

        let innerHeroScrollingRange = innerHeroSpherePositionY - innerHeroStickyPositionY;
        // console.log(innerHeroScrollingRange);



        // SCROLLING TRIGGER
        let lastScrollTop = 0;  // This will store the last scroll position processed
        let isSnapping = false;  // Flag to prevent re-triggering during snap
        let snapped = false;
        let snapThreshold = innerHeroScrollingRange - (innerHeroSphereHeight / 2); // The point to snap to
        const snapRange = 25; // Range within which to snap

        document.addEventListener('scroll', handleScroll);

        function handleScroll() {
            const scrollTop = window.scrollY;
            const newTop = Math.min(scrollTop, snapThreshold);

            // CHECK IF SCROLLED TO TOP AND RESET POSITION TO TOP
            if (scrollTop < 1) {
                innerHeroSticky.style.transform = `translateY(${0}px)`;
                isSnapping = false;
                snapped = false;
            }
            
            // Check if the scroll position is the same as the last one processed
            if (scrollTop >= snapThreshold) {
                innerHeroSticky.style.transform = `translateY(${snapThreshold}px)`;
                isSnapping = true;
                snapped = true;

                // return;  // Exit the function if the scroll position hasn't changed
            }

            lastScrollTop = scrollTop;  // Update lastScrollTop to the new scroll position

            // Check if we are near the snapping point and not already snapping
            if (!isSnapping && Math.abs(scrollTop - snapThreshold) <= snapRange && scrollTop < snapThreshold) {
                // Apply snapping effect
                innerHeroSticky.style.transform = `translateY(${snapThreshold}px)`;
                isSnapping = true;
                snapped = true;
                setTimeout(() => isSnapping = false, 500);  // Allow time for transition to complete
            } else if (!isSnapping && scrollTop < snapThreshold) {
                // Normal movement control, only update if not already snapped to the limit
                innerHeroSticky.style.transform = `translateY(${newTop}px)`;
                snapped = false;
            }

            // IF SPHERE IS SNAPPED
            if (snapped == true) {
                innerHeroSticky.classList.add('snapped');
                innerHeroTarget.classList.add('snapped');
            } else {
                innerHeroSticky.classList.remove('snapped');
                innerHeroTarget.classList.remove('snapped');
            }
        }


        // let lastKnownScrollPosition = 0;
        // let ticking = false;
        // let lastPosition = -1;

        // function handleScroll(scrollPos) {
        //     const newTop = Math.min(scrollPos, innerHeroScrollingRange);
        //     if (newTop !== lastPosition) {
        //         innerHeroSticky.style.transform = 'translateY(' + newTop + 'px)';
        //         lastPosition = newTop;
        //         console.log(newTop);
        //     }
        // }

        // document.addEventListener('scroll', function(e) {
        //     lastKnownScrollPosition = window.scrollY;

        //     if (!ticking) {
        //     window.requestAnimationFrame(function() {
        //         handleScroll(lastKnownScrollPosition);
        //         ticking = false;
        //     });

        //     ticking = true;
        //     }
        // });
        
        





    });

    
    

</script>