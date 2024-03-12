<script>
    import { onMount } from 'svelte';
    
    onMount(() => {
        if (typeof window !== 'undefined') {
            window.location.replace("https://futurereadydesign.nl/support");
        }
    });
</script>