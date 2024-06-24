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

const BACKEND_URL = 'http://localhost:1337';

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const url =
    `${BACKEND_URL}/api/posts?` +
    qs.stringify(
      {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        fields: [
          'author',
          'body',
          'description',
          'publishedAt',
          'slug',
          'title',
        ],
        populate: {
          image: { fields: ['url'] },
        },
      },
      { encodeValuesOnly: true }
    );

  const response = await fetch(url);
  const { data } = await response.json();
  const { attributes } = data[0];

  console.log(
    'responseniiiii',
    BACKEND_URL + attributes.image.data.attributes.url
  );

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
  const url =
    `${BACKEND_URL}/api/posts?` +
    // URL dasar untuk API Strapi. Menambahkan tanda tanya untuk memulai query string.
    qs.stringify(
      {
        // Pilih field yang ingin diambil.
        fields: ['author', 'description', 'publishedAt', 'slug', 'title'],
        populate: {
          image: { fields: ['url'] }, // Mengatur agar field 'image' juga diambil dengan field 'url' saja.
        },
        sort: 'publishedAt:desc', // Mengatur urutan hasil berdasarkan tanggal publikasi secara menurun.
        pagination: { pageSize: 5 }, // Mengatur agar hanya 1 item yang diambil per halaman.
      },
      { encodeValuesOnly: true } // Mengatur agar hanya nilai yang di-encode (proses mengubah data dari satu format ke format lain) dalam query string.
    );

  // Mengambil data dari URL yang telah dibuat menggunakan fetch API.
  // await memastikan bahwa program menunggu sampai fetch selesai dan respons diterima.
  const response = await fetch(url);
  const { data } = await response.json();
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
