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
    <button>Explore more of our work →</button>
</section>

<style lang="scss">

.heading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
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
    flex: 1;
}

@media (max-width: 768px) {
    .left-container, .right-container {
        flex-direction: column;
    }

    .image-container, .text-container {
        width: 100%;
    }
}
</style>
