import { writeFileSync } from 'node:fs';
import qs from 'qs';

const url =
  'http://localhost:1337/api/posts' + // URL dasar untuk API Strapi.
  '?' + // Menambahkan tanda tanya untuk memulai query string.
  qs.stringify(
    {
      // Pilih field yang ingin diambil.
      fields: ['slug', 'title', 'description', 'publishedAt', 'author', 'body'],
      populate: {
        image: { fields: ['url'] }, // Mengatur agar field 'image' juga diambil dengan field 'url' saja.
      },
      sort: 'publishedAt:desc', // Mengatur urutan hasil berdasarkan tanggal publikasi secara menurun.
      pagination: { pageSize: 1 }, // Mengatur agar hanya 1 item yang diambil per halaman.
    },
    { encodeValuesOnly: true } // Mengatur agar hanya nilai yang di-encode (proses mengubah data dari satu format ke format lain) dalam query string.
  );

// Mengambil data dari URL yang telah dibuat menggunakan fetch API.
// await memastikan bahwa program menunggu sampai fetch selesai dan respons diterima.
const response = await fetch(url);

// Mengambil isi body dari respons dan mengubahnya menjadi objek JavaScript.
const body = await response.json();

// Mengubah objek body menjadi string JSON yang diformat dengan indensi 2 spasi.
const posts = JSON.stringify(body, null, 2);

// console.log(posts);

// Menentukan path file tempat data akan disimpan.
const file = 'src/libs/postsResponse.json';

// Menulis string JSON ke dalam file postsresponse.json dengan encoding UTF-8.
// writeFileSync memastikan penulisan dilakukan secara sinkron.
writeFileSync(file, posts, 'utf-8');
