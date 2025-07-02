<script>
    import Nav from "../components/Nav.svelte";
    import Footer from "../components/Footer.svelte";

    export let data;
</script>

<Nav nav={data.nav}/>

<slot></slot>

<Footer/>