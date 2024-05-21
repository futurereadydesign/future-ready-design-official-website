<script>
    export let imgPath;
    export let imgAlt;
</script>

<div class="grid-item">
    <img src={imgPath} alt={imgAlt}>
</div>

<style lang="scss">
    .grid-item {
         border: solid rgba(255, 255, 255, 0.1) 2px;
         background: rgba(255, 255, 255, 0.05);
         position: relative;
         display: flex;
         align-items: center;
         justify-content: center;
         padding: 30px;
         border-radius: 12px;
         max-height: 125px;
         img {
            width: 100%;
            height: 100%;
            object-fit: contain;
         }
    }
</style>