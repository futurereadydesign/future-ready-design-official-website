<section class="heading-container">
    <h2>not just talking but taking action</h2>
</section>

<section class="content-container">
    <article class="left-container">
        <section class="image-container">
            <img src="/assets/content/yunus-ipon.png" alt="">
        </section>
        <section class="text-container">
            <h4>Showcased project</h4>
            <h3>how we are changing education with Crelo</h3>
            <p>Shifting the focus from grades to personal development. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin purus vitae enim vestibulum sollicitudin. Aenean ac faucibus arcu. Mauris molestie, augue nec pharetra ullamcorper, nisl mauris mattis tortor, aliquet pulvinar turpis lectus ut nulla. Nunc ut eros id purus pulvinar rhoncus eu egestas eros.</p>
            <button>More about this project →</button>
        </section>
    </article>

    <article class="right-container">
        <section class="image-container">
            <img src="/assets/content/oude-mac.png" alt="">
        </section>
        <section class="text-container">
            <h4>Showcased project</h4>
            <h3>how we are making the web accessible with AccessDash</h3>
            <p>More than 90% of the web is currently not usable for more than 100 million people in Europe alone with disabilities and how we’re fixing it. Praesent sollicitudin purus vitae enim vestibulum sollicitudin. Aenean ac faucibus arcu. Mauris molestie, augue nec pharetra ullamcorper, nisl mauris mattis tortor, aliquet pulvinar turpis lectus ut nulla. Nunc ut eros id purus pulvinar rhoncus eu egestas eros.</p>
            <button>More about this project →</button>
        </section>
    </article>

    <article class="left-container">
        <section class="image-container">
            <img src="/assets/content/frd-muur.png" alt="">
        </section>
        <section class="text-container">
            <h4>Showcased project</h4>
            <h3>how we are changing higher education with Onyx</h3>
            <p>Helping higher education make the shift towards didactic coaching. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin purus vitae enim vestibulum sollicitudin. Aenean ac faucibus arcu. Mauris molestie, augue nec pharetra ullamcorper, nisl mauris mattis tortor, aliquet pulvinar turpis lectus ut nulla. Nunc ut eros id purus pulvinar rhoncus eu egestas eros.</p>
            <button>More about this project →</button>
        </section>
    </article>
    <button>Explore more of our work  →</button>
</section>

<style lang="scss">

.heading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    font-size: 1.2em;
}

.content-container {
    max-width: 1200px;
    margin: 3em auto 3em; 
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    color: white;
}

.left-container, .right-container {
    display: flex;
    flex-direction: row;

    h4 {
        opacity: 50%;
        margin-bottom: .6em;
    }

    h3 {
        font-size: 1.8em;
        margin-bottom: .6em;
    }

    p {
        margin-bottom: 1em;
        opacity: 65%;
        font-size: 1em;
    }

    button {
        margin-bottom: .6em;
        color: white;
        background: none;
        border: none;
        cursor: pointer;
        font-size: .8em;
    }
}

.left-container:nth-last-child(2) {
    margin-top: 5em; 
}

.left-container {
    display: flex;
    flex-direction: row;

    .image-container {
        display: flex;
        align-items: center;
        justify-content: flex-start; 
    }

    .text-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start; 
        padding: 0 0.5em;
    }
}

.right-container {
    display: flex;
    flex-direction: row-reverse; 
    margin-top: 5em; 

    h4 {
        align-self: flex-start;
    }

    button {
        align-self: flex-start;
    }

    .image-container {
        display: flex;
        align-items: center;
        justify-content: flex-end; 
    }

    .text-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end; 
        padding: 0 0.5em;
    }
}

.left-container {
    flex-direction: row; 
}

.right-container {
    flex-direction: row-reverse; 
    
    .image-container {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }
}

.image-container, .text-container {
    flex: .75;
}

.image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
}

.text-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1em;
}

@media (max-width: 950px) {
    .content-container {
        align-items: center;
        text-align: left;
    }

    .left-container, .right-container {
        flex-direction: column;
        max-width: 600px;
    }

    .image-container img, .text-container {
        width: 100%;
    }

    .heading-container {
        padding: 1em;
    }

    .content-container {
        margin: 0;
    }

    h4 {
        margin-top: 1em;
    }
}
</style>
