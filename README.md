## Component

Di dalam React terdapat dua jenis component yaitu [server component](https://nextjs.org/docs/app/building-your-application/rendering/server-components) dan [client component](https://nextjs.org/docs/app/building-your-application/rendering/client-components). Dalam Next js semua component otomatis menjadi Server Component Secara default. Server Components adalah komponen React yang dijalankan di server. Komponen ini dirender di server dan hasilnya dikirimkan ke klien sebagai HTML statis. Server Components cocok digunakan untuk rendering awal halaman dengan data yang diambil dari server, tanpa memerlukan interaktivitas di sisi klien. Client Components adalah komponen React yang dijalankan di klien (browser). Komponen ini memungkinkan penggunaan state dan efek (hooks) untuk menciptakan interaktivitas dinamis di sisi klien. Client Components cocok digunakan untuk elemen yang memerlukan interaktivitas langsung dengan pengguna, seperti form input, tombol, dan elemen dinamis lainnya. Untuk membuat client component kita harus menambahkan 'use client' di awal code. Berikut perbedaan antara keduanya:

### Server Components

1. **Eksekusi di Server**:
   - Komponen ini dijalankan di server dan hasilnya dikirim ke klien sebagai HTML yang sudah dirender.
2. **Keamanan dan Performa**:
   - Karena dijalankan di server, data sensitif dapat dikelola dengan lebih aman dan performa aplikasi bisa lebih optimal karena beban rendering dipindahkan ke server.
3. **Akses ke Data**:

   - Komponen ini dapat langsung mengakses data server-side seperti database, API internal, dan file sistem tanpa perlu memikirkan masalah keamanan CORS.

4. **Hanya HTML**:
   - Hasil yang dikirim ke klien adalah HTML statis, sehingga tidak memiliki interaktivitas atau state di sisi klien.
5. **Penggunaan dalam Next.js**:
   - Cocok untuk bagian aplikasi yang tidak memerlukan interaktivitas langsung atau hanya memerlukan interaktivitas minimal.

### Client Components

1. **Eksekusi di Klien**:
   - Komponen ini dijalankan di browser klien dan menyediakan interaktivitas dinamis dengan pengguna.
2. **Interaktivitas**:
   - Memungkinkan penggunaan state React dan efek (hooks) yang berjalan di sisi klien untuk merespons tindakan pengguna.
3. **Akses Terbatas**:
   - Tidak bisa langsung mengakses resource server-side seperti database atau API internal tanpa membuat permintaan HTTP (fetch/AJAX) ke server.
4. **Penggunaan dalam Next.js**:
   - Cocok untuk bagian aplikasi yang memerlukan interaktivitas langsung seperti form input, tombol, dan elemen dinamis lainnya.

### Penggunaan dalam Next.js

Dalam proyek Next.js, Anda dapat menggabungkan kedua jenis komponen ini untuk memanfaatkan keunggulan masing-masing. Misalnya, Anda dapat menggunakan Server Components untuk rendering awal halaman dengan data dari server dan kemudian menggunakan Client Components untuk menambahkan interaktivitas pada halaman tersebut.

### Contoh Penggunaan

- **Server Component**:

  ```jsx
  // pages/index.js
  import fetchData from '../lib/fetchData';

  export default function Home({ data }) {
    return (
      <div>
        <h1>Data dari Server</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }

  export async function getServerSideProps() {
    const data = await fetchData();
    return { props: { data } };
  }
  ```

- **Client Component**:

  ```
  // components/InteractiveComponent.js
  'use client'
  import { useState } from 'react';

  export default function InteractiveComponent() {
  const [count, setCount] = useState(0);

  return (
      <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
  ```
