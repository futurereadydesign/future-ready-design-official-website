<script context="module">
    import { useStoryblokApi } from '@storyblok/svelte';
  
    export async function load({ params }) {
      const { slug } = params;
      const storyblokApi = useStoryblokApi();
      const { data } = await storyblokApi.get('cdn/stories', {
        version: 'draft',
        starts_with: 'blogs',
        is_startpage: false,
        slug: slug.join('/')
      });
  
      return {
        props: {
          blog: data.story
        }
      };
    }
  </script>
  
  <script>
    export let blog;
  </script>
  
  <!-- Render de blogpostgegevens -->
  <h1>{blog.title}</h1>
  <p>{blog.content}</p>