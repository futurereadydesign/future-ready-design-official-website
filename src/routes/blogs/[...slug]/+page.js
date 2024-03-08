import { useStoryblokApi } from '@storyblok/svelte';

export async function load({ params }) {
  const { slug } = params;
  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get('cdn/stories', {
    version: 'draft',
    starts_with: 'blogs',
    is_startpage: false
  });

  return {
    props: {
      Blog: data.story
    }
  };
}