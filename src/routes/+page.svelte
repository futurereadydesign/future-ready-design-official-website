 <script>
    // Tijdelijk, oude FRD website
    import Home from "../components/Home.svelte";

    import { onMount } from "svelte";
    import { useStoryblokBridge, StoryblokComponent } from "@storyblok/svelte";
 
    export let data;
 
    onMount(() => {
        useStoryblokBridge(
            data.story.id,
            (newStory) => (data.story = newStory)
        );
    });

</script>
 
<!-- Oude FRD website wordt laten zien -->
<Home />

<!-- <div>
    {#if data.story}
        <StoryblokComponent blok={data.story.content} />
    {/if}
</div> -->