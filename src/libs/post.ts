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

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const { data } = await fetchPosts(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      fields: ['author', 'body', 'description', 'publishedAt', 'slug', 'title'],
      populate: {
        image: { fields: ['url'] },
      },
    },
    true // noCache is set to true
  );

  if (!data || data.length === 0) {
    return null;
  }

  const { attributes } = data[0];

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
  const { data } = await fetchPosts(
    {
      fields: ['author', 'body', 'description', 'publishedAt', 'slug', 'title'],
      populate: { image: { fields: ['url'] } },
      sort: ['publishedAt:desc'],
      pagination: { pageSize: 100 },
    },
    false // noCache is set to false
  );

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
  const { data } = await fetchPosts({
    fields: ['slug'],
    pagination: { pageSize: 100 }, // Adjust pageSize as necessary
  });

  return data.map((post: any) => post.attributes.slug);
};

// Function untuk Melakukan Fetch Post (kontent post) dari api strapi
async function fetchPosts(
  parameters: FetchPostsParameters,
  noCache: boolean = false
) {
  const url =
    `${BACKEND_URL}/api/posts?` +
    qs.stringify(parameters, { encodeValuesOnly: true });

  const response = await fetch(url, {
    cache: noCache ? 'no-store' : 'default',
  });

  return await response.json();
}
