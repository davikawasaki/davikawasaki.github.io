import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE_URL } from '../../consts';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => data.lang === 'en' && !data.draft);
  return rss({
    title: 'Davi Kawasaki — Blog',
    description: 'Notes on infrastructure, tools and lessons learned.',
    site: context.site ?? SITE_URL,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${post.data.slug}/`,
      })),
  });
}
