import { readdir } from 'fs/promises';
import path from 'path';
import { marked } from 'marked';
import qs from 'qs';

interface Post {
  author: string;
  body: string | Promise<string>;
  description: string;
  image: string;
  publishedAt: string;
  slug: string;
  title: string;
}

interface FetchPostsParameters {
  filters?: {
    slug?: {
      $eq: string;
    };
  };
  fields?: string[];
  populate?: {
    image?: {
      fields?: string[];
    };
  };
  sort?: string[];
  pagination?: {
    pageSize?: number;
  };
}

const BACKEND_URL = 'http://localhost:1337';

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const { data } = await fetchPosts({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    fields: ['author', 'body', 'description', 'publishedAt', 'slug', 'title'],
    populate: {
      image: { fields: ['url'] },
    },
  });

  const { attributes } = data[0];
  // console.log('attributes', attributes);

  return {
    author: attributes.author,
    body: marked(attributes?.body),
    description: attributes.description,
    image: BACKEND_URL + attributes.image.data.attributes.url,
    publishedAt: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
    slug: attributes.slug,
    title: attributes.title,
  };
};

export const getAllContents = async (): Promise<Post[]> => {
  const { data } = await fetchPosts({
    fields: ['author', 'body', 'description', 'publishedAt', 'slug', 'title'],
    populate: { image: { fields: ['url'] } },
    sort: ['publishedAt:desc'],
    pagination: { pageSize: 3 },
  });

  // console.log(data);

  return data?.map(
    ({
      attributes,
    }: {
      attributes: {
        author: string;
        createdAt: string;
        description: string;
        image: {
          data: { attributes: { url: string }; id: number };
        };
        publishedAt: string;
        slug: string;
        title: string;
      };
    }) => ({
      author: attributes.author,
      description: attributes.description,
      image: BACKEND_URL + attributes.image.data.attributes.url,
      publishedAt: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
      slug: attributes.slug,
      title: attributes.title,
    })
  );
};

export const getSlugs = async (): Promise<string[]> => {
  // Membaca file dari direktori src/contents/blog
  const files = await readdir(path.join(process.cwd(), './src/contents/blog'));

  // Memfilter file yang berakhiran .md dan hapus ekstensi .md untuk mendapatkan slug
  const slugs = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -'.md'.length));

  return slugs;
};

// Function untuk Melakukan Fetch Post (kontent post) dari api strapi
async function fetchPosts(parameters: FetchPostsParameters) {
  const url =
    `${BACKEND_URL}/api/posts?` +
    qs.stringify(parameters, { encodeValuesOnly: true });

  const response = await fetch(url);

  return await response.json();
}
