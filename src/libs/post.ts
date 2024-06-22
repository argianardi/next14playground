import { readdir, readFile } from 'fs/promises';
import path from 'path';
import { marked } from 'marked';
import metter from 'gray-matter';

interface Post {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  body: string | Promise<string>;
  slug: string;
}

export const getPost = async (slug: string): Promise<Post> => {
  // Membuat path file berdasarkan slug
  const filePath = path.join(process.cwd(), `./src/contents/blog/${slug}.md`);
  // Membaca konten file
  const text = await readFile(filePath, 'utf8');

  // Memisahkan content (elemen markdown yang bisa dikonversi ke tag hatml) dan data (meta data atau variabel) file markdown menggunakan metter
  const {
    content,
    data: { title, description, image, date, author },
  } = metter(text);

  // Mengonversi konten menjadi HTML menggunakan library marked
  const body = await marked(content);

  // Mengembalikan objek post yang berisi title, description, image, date, author, body, dan slug
  return { title, description, image, date, author, body, slug };
};

// Fungsi untuk mendapatkan semua konten dari file berextensi .md dari direktori src/contents/blog/
export const getAllContents = async (): Promise<Post[]> => {
  const slugs = await getSlugs();

  // Menginisialisasi array untuk menampung post
  const posts: Post[] = [];

  // Mengambil data post berdasarkan slug dan menambahkannya ke array posts
  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push(post);
  }

  // Mengembalikan array posts
  return posts;
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
