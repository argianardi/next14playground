## Component

Di dalam React terdapat dua jenis component yaitu [server component](https://nextjs.org/docs/app/building-your-application/rendering/server-components) dan [client component](https://nextjs.org/docs/app/building-your-application/rendering/client-components). Dalam Next js semua component otomatis menjadi Server Component Secara default. Server Components adalah komponen React yang dijalankan di server. Komponen ini dirender di server dan hasilnya dikirimkan ke klien sebagai HTML statis. Server Components cocok digunakan untuk rendering awal halaman dengan data yang diambil dari server, tanpa memerlukan interaktivitas di sisi klien. Client Components adalah komponen React yang dijalankan di klien (browser). Komponen ini memungkinkan penggunaan state dan efek (hooks) untuk menciptakan interaktivitas dinamis di sisi klien. Client Components cocok digunakan untuk elemen yang memerlukan interaktivitas langsung dengan pengguna, seperti form input, tombol, dan elemen dinamis lainnya. Untuk membuat client component kita harus menambahkan 'use client' di awal code. Berikut perbedaan antara keduanya:

### Server Components

1. **Default**
2. **Rendering**
   Proses render ada di server dan tidak mengirimkan JS ke browser.
3. **Penggunaan Fungsi Client Side**
   Tidak bisa menggunakan fungsi client-side (useEffect, event, windwos dll).
4. **Penggunaan Fungsi Server Side**
   Dapat menggunakan fungsi server-side dari Node.js API
5. **Eksekusi di Server**:
   - Komponen ini dijalankan di server dan hasilnya dikirim ke klien sebagai HTML yang sudah dirender.
6. **Keamanan dan Performa**:
   - Karena dijalankan di server, data sensitif dapat dikelola dengan lebih aman dan performa aplikasi bisa lebih optimal karena beban rendering dipindahkan ke server.
7. **Akses ke Data**:

   - Kemampuan untuk mengambil data dalam proses fetching data dari database lebih cepat, karena dirender di sisi server yang mana prosesnya lebih cepat dibandingkan dengan rendering di sisi client.
   - Komponen ini dapat langsung mengakses data server-side seperti database, API internal, dan file sistem tanpa perlu memikirkan masalah keamanan CORS.

8. **Hanya HTML**:
   - Hasil yang dikirim ke klien adalah HTML statis, sehingga tidak memiliki interaktivitas atau state di sisi klien.
9. **Penggunaan dalam Next.js**:
   - Cocok untuk bagian aplikasi yang tidak memerlukan interaktivitas langsung atau hanya memerlukan interaktivitas minimal.

### Client Components

1. **'use client' directive**
   Untuk menggunakan component client kita harus menambahkan directive 'use client' di baris awal code.
2. **Rendering**
   Proses rendering terjadi di server dan browser
3. **Fungsi Client Side**
   Dapat menjalankan fungsi client-side.
4. **Eksekusi di Klien**:
   - Komponen ini dijalankan di browser klien dan menyediakan interaktivitas dinamis dengan pengguna.
5. **Interaktivitas**:
   - Memungkinkan penggunaan state React dan efek (hooks) yang berjalan di sisi klien untuk merespons tindakan pengguna.
6. **Akses Terbatas**:
   - Tidak bisa langsung mengakses resource server-side seperti database atau API internal tanpa membuat permintaan HTTP (fetch/AJAX) ke server.
7. **Penggunaan dalam Next.js**:
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

## Route

Next.js 14 memperkenalkan fitur **App Router** yang memberikan fleksibilitas dan kontrol yang lebih besar atas routing dalam aplikasi. App Router memungkinkan pengembang untuk mengatur navigasi dan layout aplikasi dengan cara yang lebih dinamis dan canggih dibandingkan dengan Page Router tradisional.

App Router di Next.js 14 menggunakan komponen `next/router` dan hook `useRouter` untuk mengelola rute secara programatik. Ini memberikan kemampuan untuk melakukan navigasi yang lebih kompleks dan dinamis, serta mendukung fitur-fitur canggih seperti dynamic imports dan custom middleware.

#### Nested Route

Next.js 14 memungkinkan Developer untuk membuat nested route dengan mudah menggunakan fitur **App Router**. Nested route memungkinkan pengelompokan dan pengaturan yang lebih terstruktur dari rute dalam aplikasi Next.js. Berikut adalah penjelasan tentang bagaimana membuat nested route menggunakan App Router.

Nested route memungkinkan penataan hierarki yang lebih baik dalam aplikasi web. Dengan nested route, Anda dapat menyusun halaman-halaman dalam struktur yang terkelompok, sehingga membuat navigasi dan pengaturan rute menjadi lebih terorganisir.

Untuk membuat nested route di Next.js 14, Anda dapat menggunakan pendekatan yang mirip dengan pembuatan rute biasa. Namun, Anda akan membuat file dan direktori yang terkelompok di dalam direktori halaman Anda.

```tsx
src/app/
|-- about/
|   |-- page.tsx
|-- blog/
|   |-- first/
|   |   |-- page.tsx
|   |-- second/
|   |   |-- page.tsx
|-- layout.tsx
|-- page.tsx
```

Dalam struktur file yang diberikan, terdapat beberapa halaman yang terorganisir dalam folder `src/app/`. Setiap halaman memiliki path yang berbeda sesuai dengan struktur folder. Berikut cara akses masing - masing halaman menggunakan route berdasarkan struktur file diatas:

- Halaman utama terletak di file `page.tsx`. Untuk mengakses halaman ini, Anda dapat mengunjungi path :`/` atau `https://maindomain.com`
- Halaman About terletak dalam folder `about/` dan didefinisikan di file `page.tsx` di dalamnya. Untuk mengakses halaman About, Anda perlu menambahkan `/about` ke path utama: `https://maindomain.com/about`
- Halaman Blog memiliki dua sub halaman yang terletak dalam folder `blog/first/` dan `blog/second/`. Kedua subhalaman ini didefinisikan di file `page.tsx` masing-masing. Untuk mengakses halaman-halaman ini, Anda dapat menggunakan path berikut:
  - Blog Pertama: `https://maindomain.com/blog/first`
  - Blog Kedua: `https://maindomain.com/blog/second`

#### Dynamic Route

Anda juga dapat menggunakan dynamic route untuk menangani rute yang berubah dinamis. Contoh implementasinya route dinamis digunakan untuk menampilkan halaman detail product berdasarkan id product. Hal ini bisa dilakukan dengan menjadikan id product sebagai path dinamic route. Berikut contoh struktur filenya:

```tsx
src/app/
|-- layout.tsx
|-- page.tsx
|-- product
|   |-- [productId]/
|   |   |-- page.tsx
|   |-- page.tsx
```

**Halaman Product**

```tsx
import Link from 'next/link';
import React from 'react';

const Product = () => {
  return (
    <div className="space-x-2 m-10 text-white font-bold">
      <Link href={'/product/1'} className="bg-slate-700 px-4 py-2 rounded-md">
        Product 1
      </Link>
      <Link href={'/product/2'} className="bg-slate-700 px-4 py-2 rounded-md">
        Product 2
      </Link>
    </div>
  );
};

export default Product;
```

**Halaman Detail Product**

```tsx
// /src/app/product/[productId]/page.tsx;

import React from 'react';

const DetailProduct = ({ params }: { params: { productId: string } }) => {
  return <div>Detail Product with Id {params.productId}</div>;
};

export default DetailProduct;
```

Dalam contoh ini, kita menangani rute dinamis untuk menampilkan halaman detail product dengan ID yang sesuai. Sehingga kita dapat mengakses halaman detail product degan path yang dinamis (bebas): `https://maindomain.com/product/1` || `https://maindomain.com/product/{value bebas}`

#### Dinamic Nested Route

Nested dynamic route adalah pola routing di mana satu atau lebih bagian dari URL adalah dinamis dan dapat berubah sesuai dengan konteks atau parameter tertentu. Dalam konteks Next.js, nested dynamic route mengacu pada penggunaan path dinamis di dalam path lain yang juga dinamis. Dalam contoh ini nested route di terapkan untuk mengakses halaman `reviews`, di mana untuk mengkakses halaman tersebut kita membutuhkan 2 parameter yang dinamis yaitu product id dan review id.

```tsx
src/app/
|-- layout.tsx
|-- page.tsx
|-- product
|   |-- [productId]/
|   |   |-- reviews/
|   |   |   |-- [reviewId]
|   |   |   |   |-- page.tsx
|   |   |-- page.tsx
|   |-- page.tsx
```

**Halaman Review Id**

```tsx
import React from 'react';

const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <div>
      <h1>
        Reviews detail page with product id {params.productId} and review id{' '}
        {params.reviewId}
      </h1>
    </div>
  );
};

export default ReviewDetail;
```

Navigasi ke nested route dapat dilakukan dengan membuat tautan dengan parameter yang sesuai, misalnya kita ingin mengakses halaman review product tersebut dengan id product 20 dan id review 100 paka pathnya akan seperti ini `https://maindomain.com/product/20/reviews/100`

#### Catch All Segments

Dalam Next.js, Route Catch-All Segments digunakan untuk menangani rute dinamis dengan cara yang lebih fleksibel. Fitur ini sangat berguna ketika kita ingin menangani berbagai tingkat kedalaman URL yang tidak ditentukan sebelumnya. Berikut beberapa keunggulan lainnya:

- **Fleksibilitas**: Memungkinkan kita untuk menangani URL dengan struktur yang kompleks tanpa perlu membuat file untuk setiap kemungkinan rute.
- **Kemudahan Pengelolaan**: Mengurangi jumlah file dan folder yang perlu kita buat dan kelola.
- **Navigasi Dinamis**: Memungkinkan navigasi dinamis berdasarkan parameter URL yang dapat bervariasi dalam jumlah dan konten.

Dengan menggunakan catch-all route, kita dapat menangani berbagai skenario routing dengan cara yang lebih efisien dan terstruktur. Hal ini sangat berguna untuk aplikasi yang memiliki banyak halaman dinamis seperti dokumentasi, blog dengan kategori yang dalam, atau e-commerce dengan berbagai kategori produk.

Berikut adalah contoh struktur file yang digunakan dalam route cathc all segments:

```tsx
src/app/
|-- transactions/
|   |   |-- [...slug]/
|   |   |   |    |-- page.tsx
|-- layout.tsx
|-- page.tsx
```

Berikut code di file `src/app/transactions/[...slug]/page.tsx`:

```tsx
import React from 'react';

const Docs = ({ params }: { params: { slug: string[] } }) => {
  console.log(params.slug);

  // Jika slug adalah array tunggal atau tidak ada
  if (!params?.slug || params?.slug?.length === 0) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-center">Docs Page</h1>
        <p>Welcome to the Docs page. Please select a document.</p>
      </div>
    );
  }

  // Jika slug memiliki satu atau lebih segmen
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Docs Page</h1>
      <p>Transactions Page with slug: {params?.slug?.join('/')}</p>
    </div>
  );
};

export default Docs;
```

Kemudian misalnya kita ingin mengakses page dogs dengan path yang dinamis: `https://maindomain.com/transactions/tas/indonesia/Jakarta`, maka kita bisa menangkap semua parameter yang ada disana `slug = ['tas', 'indonesia', 'jakarta']`

## Prefetch

Prefetch adalah fitur penting di Next.js yang memungkinkan peningkatan performa aplikasi dengan cara memuat data atau halaman sebelum user benar-benar membutuhkannya. Hal ini memungkinkan pengalaman user yang lebih mulus dan cepat [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10277).

### Apa Itu Prefetch?

Prefetch adalah teknik yang digunakan untuk mengambil sumber daya (resource) yang kemungkinan besar akan dibutuhkan oleh user di masa depan. Dalam konteks Next.js, ini biasanya digunakan untuk memuat halaman secara proaktif sebelum user menavigasi ke halaman tersebut.
Misalnya, saat kita berada di Home Page, ada link ke halaman "About". Dengan prefetch, Next.js akan mulai memuat konten halaman "About" di latar belakang segera setelah link tersebut muncul di layar atau saat user mengarahkan kursor ke link tersebut.

Tujuan dari prefetch ini adalah untuk mengurangi waktu tunggu ketika user akhirnya mengklik link tersebut. Karena sebagian atau seluruh konten halaman "About" sudah dimuat sebelumnya, halaman tersebut bisa ditampilkan dengan lebih cepat dibandingkan jika harus memuat konten dari awal saat link diklik.

### Bagaimana Prefetch Bekerja di Next.js?

Di Next.js, prefetch biasanya digunakan bersama dengan komponen `Link`. Ketika link muncul di viewport, Next.js akan otomatis memulai proses prefetch untuk halaman tujuan link tersebut.

### Implementasi Prefetch dengan `Link`

Berikut adalah contoh sederhana menggunakan komponen `Link` dengan prefetch di Next.js:

```tsx
<header>
  <nav>
    <ul className="flex space-x-4">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/blog" prefetch={false}>
          Blog
        </Link>
      </li>
      <li>
        <Link href="/about" prefetch={false}>
          About
        </Link>
      </li>
      <li>
        <Link href="/product">Product</Link>
      </li>
    </ul>
  </nav>
</header>
```

Pada contoh di atas, ketika halaman HomePage dirender, Next.js akan secara otomatis melakukan prefetch halaman `/about` saat link berada di viewport.

### Mengontrol Prefetching

#### Menonaktifkan Prefetch

Secara default, Next.js akan melakukan prefetch untuk semua tautan yang menggunakan komponen `Link`. Namun, ada kalanya Anda mungkin ingin menonaktifkan prefetch untuk tautan tertentu. Anda dapat melakukannya dengan menambahkan atribut `prefetch={false}` pada komponen `Link`.

```jsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about" prefetch={false}>
        <a>About</a>
      </Link>
    </div>
  );
}
```

#### Prefetch Manual

Selain menggunakan prefetch otomatis, Anda juga bisa melakukan prefetch manual pada halaman yang diinginkan menggunakan fungsi `router.prefetch()`.

```jsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/about');
  }, [router]);

  return (
    <div>
      <h1>Home Page</h1>
      <a href="/about">About</a>
    </div>
  );
}
```

Pada contoh di atas, halaman /about akan diprefetch segera setelah komponen HomePage dirender.

### Kapan Menggunakan Prefetch?

- Navigasi Antara Halaman yang Sering Dikunjungi <br/>
  Prefetch sangat berguna untuk halaman yang sering dikunjungi pengguna. Ini memastikan bahwa halaman-halaman ini akan dimuat dengan cepat ketika pengguna menavigasi ke sana.
- Konten Dinamis <br/>
  Jika aplikasi kita memiliki konten yang sering berubah atau dinamis, prefetch bisa membantu dengan mengambil data yang dibutuhkan sebelumnya.
- Pengalaman Pengguna yang Lebih Baik <br/>
  Dengan prefetch, kita dapat meningkatkan pengalaman pengguna dengan mengurangi waktu tunggu saat berpindah halaman.

### Keuntungan Menggunakan Prefetch

- **Pengalaman Pengguna yang Lebih Baik:** Mengurangi waktu muat halaman berikutnya.
- **Efisiensi Jaringan:** Menggunakan idle time untuk memuat resource yang akan dibutuhkan.
- **Navigasi Lebih Cepat:** Halaman yang diprefetch akan terasa lebih cepat saat diakses.

### Kesimpulan

Prefetch di Next.js adalah fitur yang kuat untuk meningkatkan performa aplikasi Anda dengan memuat halaman atau data yang kemungkinan besar akan dibutuhkan oleh pengguna di masa depan. Dengan menggunakannya secara efektif, Anda dapat memberikan pengalaman pengguna yang lebih mulus dan responsif.

## Font

Kita masih gagal menggunakan Saat menambahkan font menggunakan tailwind css. Tapi kita telah berhasil menambahkan font secara manual langsung dari google font [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10288), berikut caranya:

- Import google font yang ingin digunakan dan inisialisasi font tersebut di file baru (`src/app/fonts.ts).

  ```ts
  //src/app/fonts.ts
  import { Inter, Oswald, Playfair_Display } from 'next/font/google';

  export const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '700'],
  });

  export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
    // preload: false,
  });

  export const playfair = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-playfair-display',
    // preload: false,
  });
  ```

- Import dan gunakan font yang sudah diinisialisasi ke tag html yang diinginkan.

  ```tsx
  //src/app/blog/page.tsx
  import Heading from '@/components/Heading';
  import PostCard from '@/components/PostCard';
  import React from 'react';
  import { inter } from '../fonts';

  const BlogPage = () => {
    return (
      <>
        <Heading>Blog Page</Heading>
        <h2 className={`text-2xl mb-3 ${inter.className}`}>List of Post</h2>
        <PostCard
          author="Admin"
          date="20 June 2024"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit facere rem aperiam eaque similique distinctio nisi eius, hic ducimus laborum?"
          href="/blog/learn-nextjs"
          image="/images/natureBigWall.jpg"
          title="Belajar Next.js"
        />
      </>
    );
  };

  export default BlogPage;
  ```

## Mengelola dan Menampilkan Konten Markdown

### Membaca File Markdown di Nextjs

Untuk membaca file Markdown kita bisa mengguanakn `readFile` dari node js. Untu menggunakan `readFile` kita harus mengguanakan asychronous dan di server component [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10290).

Untuk memastikan path letak file markdown kita benar, sebaiknya gunakan `path.join` dan `process.cwd()` untuk membentuk path absolut dari root proyek kita.

Berikut langkah - langkah untuk membaca file markdown di next js:

- Buat file markdown yang ingin dibaca:

  ```md
  <!-- src/contents/blog/belajar-nextjs.md -->

  # Heading

  ## Sub heading

  Rich text with **bold** dan _italic_.

  paragraph baru

  List:

  - satu
  - dua
  ```

- Di file tempat kita ingin membaca file markdown di atas, lakukan:

  - Import modul `path` untuk membentuk path absolut.
  - Gunakan `path.join` dan `process.cwd()`. Gabungkan path relatif dengan direktori kerja proses saat ini (`process.cwd()`) untuk membentuk path absolut.
  - Import dan gunakan `readFile()` untuk membaca file markdown di atas.

    ```tsx
    //src/app/blog/learn-nextjs/page.tsx
    import Heading from '@/components/Heading';
    //-----------------------------------------------------
    import { readFile } from 'fs/promises';
    import path from 'path';
    //-----------------------------------------------------
    import React from 'react';

    const LearnNext = async () => {
      //-----------------------------------------------------
      const filePath = path.join(
        process.cwd(),
        'src/contents/blog/belajar-nextjs.md'
      );
      const text = await readFile(filePath, 'utf8');
      //-----------------------------------------------------

      return (
        <>
          <Heading>Belajar Next JS</Heading>
          <img
            src="/images/natureBigWall.jpg"
            alt="natural"
            width={640}
            height={360}
            className="mb-2 rounded"
          />
          //--------------------------------------------------
          <p>{text}</p>
          //--------------------------------------------------
        </>
      );
    };

    export default LearnNext;
    ```

- Kita telah berhasil menampilkan file markdown meskipun bukan dalam tampilan yang bagus, masih dalam code markdown

### Menampilkan Data markdown pada component / Mengkonversi element markdown (hasil dari langkah [Membaca File Markdown](#membaca-file-markdown-di-nextjs)) menjadi tag html

Kita dapat mengkonversi elemen markdown menjadi tag html menggunakan package [marked](https://www.npmjs.com/package/marked). Berikut langkah - langkahnya [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10291):

- Install [marked](https://www.npmjs.com/package/marked).
- Konversi element markdown menjadi tag html menggunakan marked.
- Suntikkan code html yang dihasilkan ke dalam komponen menggunakan property `dangerouslySetInnerHTML`.

```tsx
//src/app/blog/learn-nextjs/page.tsx
import Heading from '@/components/Heading';
import { readFile } from 'fs/promises';
import path from 'path';
//---------------------------------------------------------
import { marked } from 'marked';
//---------------------------------------------------------
import React from 'react';

const LearnNext = async () => {
  const filePath = path.join(
    process.cwd(),
    'src/contents/blog/belajar-nextjs.md'
  );
  const text = await readFile(filePath, 'utf8');
  //--------------------------------------------------------
  const html = marked(text);
  //--------------------------------------------------------
  return (
    <>
      <Heading>Belajar Next JS</Heading>
      <img
        src="/images/natureBigWall.jpg"
        alt="natural"
        width={640}
        height={360}
        className="mb-2 rounded"
      />
      //-----------------------------------------------------
      <article dangerouslySetInnerHTML={{ __html: html }} />
      //-----------------------------------------------------
    </>
  );
};

export default LearnNext;
```

`dangerouslySetInnerHTML` adalah properti khusus di React yang memungkinkan kita untuk menampilkan konten HTML dalam komponen React secara langsung dari string HTML. Properti ini berguna saat kita perlu menampilkan HTML yang dihasilkan secara dinamis atau berasal dari sumber eksternal, seperti konten markdown yang telah diubah menjadi HTML.

### Menampilkan Style Markdown Yang Sesuai Dengan Tailwindcss

Untuk menambahkan style pada hasil konversi elemen Markdown ke tag html di tailwindcss kita harus menggunakan plugin [typography](https://github.com/tailwindlabs/tailwindcss-typography). Berikut langkah - langkahnya [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10292):

- Intall plugin typography [ref](https://github.com/tailwindlabs/tailwindcss-typography)
- Setelah proses instalasi selesai, kita bisa menambahkan class tailwind di tag html tempat kita menampilkan hasil konversi elemen markdown ke tag html

  ```tsx
  import Heading from '@/components/Heading';
  import { readFile } from 'fs/promises';
  import path from 'path';
  import { marked } from 'marked';
  import React from 'react';

  const LearnNext = async () => {
    const filePath = path.join(
      process.cwd(),
      'src/contents/blog/belajar-nextjs.md'
    );
    const text = await readFile(filePath, 'utf8');
    const html = marked(text);
    return (
      <>
        <Heading>Belajar Next JS</Heading>
        <img
          src="/images/natureBigWall.jpg"
          alt="natural"
          width={640}
          height={360}
          className="mb-2 rounded"
        />
        //--------------------------------------------------
        <article
          dangerouslySetInnerHTML={{ __html: html }}
          className="prose max-w-screen-sm text-red-900"
        />
        //--------------------------------------------------
      </>
    );
  };

  export default LearnNext;
  ```

### Mengambil dan Menampilkan Data Meta / Variable (Data Dinamis) di File Markdown

Untuk bisa memisahkan data (data variabel/meta) dan component (elemen markdown yang akan dikonversi ke tag html) kita bisa menggunakan package [gray-metter](https://www.npmjs.com/package/gray-matter). Berikut langkah - langkahnya [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10293):

- Buat data meta di file markdown

  ```md
  ## <!-- contents/blog/belajar-nextjs.md -->

  title: 'Belajar Next.js'
  image: '/images/natureBigWall.jpg'
  date: '26/11/2023'
  author: 'admin'

  ---

  # Heading

  ## Sub heading

  Rich text with **bold** dan _italic_.

  paragraph baru

  List:

  - satu
  - dua
  ```

- Install package gray-matter
- Destruct data dan component yang ada di file markdown menggunakan `gray-matter` dan gunakan data dan component tersebut untuk ditampilkan di tag html.

```tsx
//src/app/blog/learn-nextjs/page.tsx
import Heading from '@/components/Heading';
import { readFile } from 'fs/promises';
import path from 'path';
import { marked } from 'marked';
//-------------------------------------------------
import metter from 'gray-matter';
//-------------------------------------------------
import React from 'react';

const LearnNext = async () => {
  const filePath = path.join(
    process.cwd(),
    'src/contents/blog/belajar-nextjs.md'
  );
  const text = await readFile(filePath, 'utf8');
  //-------------------------------------------------
  const {
    content,
    data: { title, image, date, author },
  } = metter(text);
  const html = marked(content);
  //-------------------------------------------------

  return (
    <>
      //-------------------------------------------------
      <Heading>{title}</Heading>
      <p className="italic text-sm pb-2">
        {date} - {author}
      </p>
      <img
        src={image}
        alt="natural"
        width={640}
        height={360}
        className="mb-2 rounded"
      />
      //-------------------------------------------------
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className="prose max-w-screen-sm text-red-900"
      />
    </>
  );
};

export default LearnNext;
```

### Refaktor: Memisahkan Layer Data Dengan Layer Ui

Dari semua langkah untuk mengelola content dari file markdown diatas, masih ada satu langkah lagi yaitu refaktor agar code kita lebih clean. Kita bisa merefaktor dengan memisahkan bagian yang fungsinya untuk mengambil data dari file markdown dan bagian yang fungsinya untuk menampilkan data yang diperoleh dari file markdown tersebut [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10294). Berikut langkah - langkahnya:

- Kelompokkan code yang digunakan untuk mengambil data dari file markdown ke dalam satu function dan buat function tersebut di file yang berbeda, dalam contoh ini diletakkan di `src/libs/post.ts`.

  ```ts
  //src/libs/post
  import { readFile } from 'fs/promises';
  import path from 'path';
  import { marked } from 'marked';
  import metter from 'gray-matter';

  export const getPostBySlug = async (slug: string) => {
    const filePath = path.join(process.cwd(), `src/contents/blog/${slug}.md`);
    const text = await readFile(filePath, 'utf8');

    const {
      content,
      data: { title, image, date, author },
    } = metter(text);
    const body = marked(content);

    return { title, image, date, author, body };
  };
  ```

- Import dan gunakan nilai yang direturn function tadi, sehingga code kita yang awalnya [ini](#mengambil-dan-menampilkan-data-meta--variable-data-dinamis-di-file-markdown) jadi seperti ini:

  ```tsx
  //src/app/blog/learn-nextjs/page.tsx
  import Heading from '@/components/Heading';
  import { getPostBySlug } from '@/libs/post';
  import React from 'react';

  const LearnNext = async () => {
    const post = await getPostBySlug('belajar-nextjs');
    return (
      <>
        <Heading>{post.title}</Heading>
        <p className="italic text-sm pb-2">
          {post.date} - {post.author}
        </p>
        <img
          src={post.image}
          alt="natural"
          width={640}
          height={360}
          className="mb-2 rounded"
        />
        <article
          dangerouslySetInnerHTML={{ __html: post.body }}
          className="prose max-w-screen-sm text-red-900"
        />
      </>
    );
  };

  export default LearnNext;
  ```

## Mengambil Data List Contents Berdasarkan Jumlah File Yang Ada di folder contents/blog dengan ekstensi md (markdown)

Kita bisa mengambil daftar semua contents yang ada yang ada di folder `contents/blog` yang dibuat menggunakan file markdown. Dari data itu kita juga bisa membuat path/slug yang nantinya bisa dijadikan params untuk membuat route dinamis di mana page yang tampil adalah contents di folder `content/blog`. Berikut cara untuk mendapatkan data [list contens](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10296) dan [menampilkan data tersebut dalam halaman](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10297).

- Buat function yang berfungsi untuk mendapatkan semua konten dari file berextensi .md dari direktori src/contents/blog/ di file yang sama dengan function yang digunakan untuk mendapatkan data content dari file markdown di contoh ini di file `src/libs/post.ts

  ```ts
  // src/libs/post.ts

  // Fungsi untuk mendapatkan semua konten dari file berextensi .md dari direktori src/contents/blog/
  export const getAllContents = async (): Promise<Post[]> => {
    // Membaca file dari direktori src/contents/blog
    const files = await readdir(
      path.join(process.cwd(), './src/contents/blog')
    );

    // Memfilter file yang berakhiran .md dan hapus ekstensi .md untuk mendapatkan slug
    const slugs = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.slice(0, -'.md'.length));

    // Menginisialisasi array untuk menampung post
    const posts: Post[] = [];

    // Mengambil data post berdasarkan slug dan menambahkannya ke array posts
    for (const slug of slugs) {
      const post = await getPostBySlug(slug);
      posts.push(post);
    }

    // Mengembalikan array posts
    return posts;
  };
  ```

- Panggil function `getAllContents` tersebut untuk mendapatkan semua konten dari file berextensi .md dari direktori src/contents/blog/ dan tampilakan data content yang diperoleh di component

  ```tsx
  import Heading from '@/components/Heading';
  import PostCard from '@/components/PostCard';
  import React from 'react';
  import { inter } from '../fonts';
  import { getAllContents } from '@/libs/post';

  const BlogPage = async () => {
    //------------------------------------------------------------------------
    const contens = await getAllContents();
    //------------------------------------------------------------------------

    return (
      <>
        <Heading>Blog Page</Heading>
        <h2 className={`text-2xl mb-3 ${inter.className}`}>List of Post</h2>
        //---------------------------------------------------------------------
        {contens?.map((content) => (
          <PostCard
            author={content.author}
            date={content.date}
            description={content.description}
            href={`/blog/${content.slug}`}
            image={content.image}
            title={content.title}
          />
        ))}
        //---------------------------------------------------------------------
      </>
    );
  };

  export default BlogPage;
  ```

## Template Meta Data Agar Title Menjadi Dinamis Setiap Halaman

Kita bisa membuat title yang berbeda di setiap page [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10300):

- Buat template meta data dengan title yang berisi default dan template di file layout page utama (`src/app/layout.tsx`)

  ```tsx
  //src/app/layout.tsx
  import type { Metadata } from 'next';
  import { oswald } from './fonts';
  import './globals.css';
  import Navbar from '@/components/Navbar';

  // --------------------------------------------------------------
  export const metadata: Metadata = {
    title: {
      default: 'Next 14 Playground',
      template: '%s | Next 14 Playground',
    },
    description: 'Next 14 Playground, playing around with Next 14',
  };
  // --------------------------------------------------------------

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      // <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <html lang="en">
        <head>
          <link rel="icon" href="/icon.ico" sizes="any" />
          <link rel="icon" href="/icon.png" type="image/png" sizes="16x16" />
          <link
            rel="icon"
            href="/apple-icon.png"
            type="image/png"
            sizes="16x16"
          />
          <link
            rel="apple-touch-icon"
            href="/icon.png"
            type="image/png"
            sizes="16x16"
          />
        </head>
        <body
          className={`${oswald.className} p-4 min-h-screen flex flex-col bg-gray-100`}
        >
          <header>
            <Navbar />
          </header>
          <main className="py-3 grow">{children}</main>
          <footer className="border-t py-3 text-center text-xs">
            I&lsquo;m here to stay (Footer)
          </footer>
        </body>
      </html>
    );
  }
  ```

  title default akan digunakan di page utama atau di page lain ketika di page tersebut tidak didefinisikan titlenya.

- Buat metadata untuk Page lain, misalnya untuk blog page

  ```tsx
  // src/app/blog/layout.tsx
  import { Metadata } from 'next';
  import React from 'react';

  export const metadata: Metadata = {
    title: 'Blog',
    description: 'Next 14 Playground on blog page',
  };

  const BlogLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex">
        <div className="">[Sidebar]</div>
        <div className="px-4">{children}</div>
      </div>
    );
  };

  export default BlogLayout;
  ```

Sehigga saat kita mengakes page utama titlenya akan jadi `Next 14 Playground` dan saat kita mengakser page blog titlenya jadi `Blog | Next 14 Playground`.

## Menambahkan Favicon / icon aplikasi [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10302)

## Membuat Fitur Copy Link

Kita bisa membuat fitur copy link menggunakan Api browser `navigator.clipboard.writeText(window.location.href)`:

- `navigator.clipboard.writeText` berfungsi untuk menyalin URL tersebut ke clipboard.
- `window.location.href` berfungsi untuk mendapatkan URL (di search bar user) saat ini.

Untuk bisa menggunakan api browser tersebut kita harus menggunakannya di component client, API browser yang hanya tersedia di lingkungan client (browser), bukan di lingkungan server. [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10304). Berikut contohnya di coding:

```tsx
// src/components/ShareLinkButton.tsx
'use client';
import React, { useState } from 'react';

const ShareLinkButton = () => {
  const [copied, setCopied] = useState(false);

  const HandleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      className="border px-2 py-1 rounded text-sm hover:bg-gray-200 hover:text-gray-700"
      onClick={HandleCopyLink}
    >
      {copied ? 'Link Copied' : 'Copy Link'}
    </button>
  );
};

export default ShareLinkButton;
```

## Deployment

Untuk persiapan deployment, di next js ada dua jenis kita bisa menggunakan static page export dan full next js feature [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10306).
| Static Page Export| Full Next js Feature |
|-------------------|----------------------|
| Bisa menggunakan semua jenis web server | Node js Server |
| Atau semua layanan platform static web | Penyedia platform seperti vercel, netifly, AWS, etc |

### Persiapan Deploy Project Static Page

Untuk melakukan deploy project static page di next js, kita harus Membuat fungsi generete agar setiap halaman di project kita menjadi static. Berikut beberapa persiapan yang harus dilakukan [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10306):

- Di fungsi untuk mendapatkan semua list content pisahkan logic slug buat di fungsi yang berbeda. <br/>
  Logic slug tersebut dipisah agar fungsi logic slug tersebut bisa digunakan untuk melakukan generate parameter statis menggunakan fungsi `generateStatisParams`. Sehingga function `getAllContents()` yang awalnya seperti ini:

  ```ts
  // src/libs/post.ts
  export const getAllContents = async (): Promise<Post[]> => {
    // Membaca file dari direktori src/contents/blog
    const files = await readdir(
      path.join(process.cwd(), './src/contents/blog')
    );

    // Memfilter file yang berakhiran .md dan hapus ekstensi .md untuk mendapatkan slug
    const slugs = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.slice(0, -'.md'.length));

    // Menginisialisasi array untuk menampung post
    const posts: Post[] = [];

    // Mengambil data post berdasarkan slug dan menambahkannya ke array posts
    for (const slug of slugs) {
      const post = await getPostBySlug(slug);
      posts.push(post);
    }

    // Mengembalikan array posts
    return posts;
  };
  ```

  Akan jadi seperti ini:

  ```ts
  // src/libs/post.ts
  export const getSlugs = async (): Promise<string[]> => {
    const slugs = await getSlugs();

    // Menginisialisasi array untuk menampung post
    const posts: Post[] = [];

    // Mengambil data post berdasarkan slug dan menambahkannya ke array posts
    for (const slug of slugs) {
      const post = await getPostBySlug(slug);
      posts.push(post);
    }

    // Mengembalikan array posts
    return posts;
  };

  export async function getSlugs(): Promise<string[]> {
    // Membaca file dari direktori src/contents/blog
    const files = await readdir(
      path.join(process.cwd(), './src/contents/blog')
    );

    // Memfilter file yang berakhiran .md dan hapus ekstensi .md untuk mendapatkan slug
    const slugs = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.slice(0, -'.md'.length));

    return slugs;
  }
  ```

- Membuat Halaman Dinamis menjadi statis dengan function generateStaticParams <br/>
  Fungsi generateStaticParams digunakan untuk menghasilkan parameter statis berdasarkan slug untuk setiap halaman content blog (`src/app/blog/[slug]/page.tsx`), yang merupakan halaman dinamis / menggunakan dynamic route. Buat fungsi generate statics params menggunakan fungsi `getSlugs` tadi di halaman dinamic route slug (`src/app/blog/[slug]/page.tsx`)

  ```tsx
  // src/app/blog/[slug]/page.tsx
  import React from 'react';

  import { getPostBySlug, getSlugs } from '@/libs/post';

  import Heading from '@/components/Heading';
  import ShareLinkButton from '@/components/ShareLinkButton';

  //---------------------------------------------------------------
  export const generateStaticParams = async () => {
    const slugs = await getSlugs();

    return slugs.map((slug) => ({ slug }));
  };
  //---------------------------------------------------------------

  export const generateMetadata = async ({
    params,
  }: {
    params: { slug: string };
  }) {
    const post = await getPostBySlug(params.slug);

    return {
      title: post.title,
      description: post.description,
    };
  }

  const BlogContent = async ({ params }: { params: { slug: string } }) => {
    const post = await getPostBySlug(params.slug);

    return (
      <>
        <Heading>{post.title}</Heading>
        <div className="flex gap-3 pb-2 items-baseline">
          <p className="italic text-sm pb-2">
            {post.date} - {post.author}
          </p>
          <ShareLinkButton />
        </div>
        <img
          src={post.image}
          alt="natural"
          width={640}
          height={360}
          className="mb-2 rounded"
        />
        <article
          dangerouslySetInnerHTML={{ __html: post.body }}
          className="prose max-w-screen-sm text-red-900"
        />
      </>
    );
  };

  export default BlogContent;
  ```

### Persiapan Deploy Project Static Page di Self Hosting

Berikut beberapa persiapan yang harus dilakukan untuk deploy project satatic page di self hosting:

- Tambahkan properti `out: export` di file `next.config.mjs`

  ```mjs
  // next.config.mjs

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: 'export',
  };

  export default nextConfig;
  ```

- Kemudian jalankan command `npm run build`, setelah itu akan muncul hasilnya di folder `out`
- Jalankan build di folder `out` bisa menggunakan extensi vs code `liveserver` atau menggunakan packe [serve](https://www.npmjs.com/package/serve) menggunakan command `npx serve@latest out`
- Tambahakan out di file .gitignore agar folder out tidak ikut di-push ke github.
- [Dan ini cara untuk mendeploy project static page di netifly](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10309)

## Manage Project menggunakan Headless CMS (strapi)

### Persiapan Headless CMS (strapi) Untuk Membuat Konten

Berikut langkah - langkah untuk memulai install [strapi](https://strapi.io/) [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10311)

- Buka terminal kemudain install stripe ikuti command di docs [stripe](https://strapi.io/)
- Setelah selesai, lakukan register pada link yang diarahkan oleh stripe di terminal
- Kemudian buat tabel dan column, dengan cara klik menu `Content-Type Builder` di sidebar
- Buatkan content pada column dan tabel yang kita buat tadi secara menual
- Coba akses api url `http://localhost:1337/api/{nama-table}`

### Mengambil Data dari Strapi

Kita akan mencoba melakukan fetch data melalui api dari strapi, menggunakan file `mjs` hanya untuk kebutuhan development (ini bisa langsung skip ke []()):

- Buat file dengan extentsi `.mjs` untuk melakukan fetch data (di contoh dibuat di `src/libs/fetchdata.mjs`) [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10312).
- Tentukan data mana saja yang akan ditampilkan di response dari strapi menggunakan paramater dengan bantuan library yang direkomendasikan oleh strapi yaitu [qs](https://www.npmjs.com/package/@types/qs) [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10313).

  ```mjs
  // src/libs/fetchData.mjs

  import { writeFileSync } from 'node:fs';
  import qs from 'qs';

  const url =
    'http://localhost:1337/api/posts' + // URL dasar untuk API Strapi.
    '?' + // Menambahkan tanda tanya untuk memulai query string.
    qs.stringify(
      {
        // Pilih field yang ingin diambil.
        fields: [
          'slug',
          'title',
          'description',
          'publishedAt',
          'author',
          'body',
        ],
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

  // Menulis string JSON ke dalam file postsResponse.json dengan encoding UTF-8.
  // writeFileSync memastikan penulisan dilakukan secara sinkron.
  writeFileSync(file, posts, 'utf-8');
  ```

- Kemudian command `node src/libs/fetchData.mjs`, karena di contoh code di atas kita menggunakan file `src/libs/postsResponse.json maka buka file tersebut untuk melihat hasilnya.

### Fetch Get All Data menggunaakn API dari Strapi di Server

Berikut langkah - langkah yang harus dilakukan [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10314) [ref2](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10315):

- Buat function untuk melakukan fetch api dari strapi dengan bantuan `qs` yang mengatur parameter untuk menseleksi data apa saja yang akan ditampilkan de response

  ```ts
  // src/libs/post.ts

  import qs from 'qs';

  interface Post {
    title: string;
    description: string;
    image: string;
    date: string;
    author: string;
    body: string | Promise<string>;
    slug: string;
  }

  const BACKEND_URL = 'http://localhost:1337';

  // Fungsi untuk mendapatkan semua konten dari file berextensi .md dari direktori src/contents/blog/
  export const getAllContents = async (): Promise<Post[]> => {
    // Menginisialisasi array untuk menampung post
    const posts: Post[] = [];

    const url =
      `${BACKEND_URL}/api/posts?` +
      // URL dasar untuk API Strapi. Menambahkan tanda tanya untuk memulai query string.
      qs.stringify(
        {
          // Pilih field yang ingin diambil.
          fields: [
            'slug',
            'title',
            'description',
            'publishedAt',
            'author',
            'body',
          ],
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
    console.log(data);

    return data?.map(
      ({
        attributes,
      }: {
        attributes: {
          author: string;
          body: string;
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
        body: attributes.body,
        description: attributes.description,
        image: BACKEND_URL + attributes.image.data.attributes.url,
        publishedAt: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
        slug: attributes.slug,
        title: attributes.title,
      })
    );
  };
  ```

- Panggil function fetching itu untuk manampilkan datanya di Ui

  ```tsx
  // src/app/blog/page.tsx

  import Heading from '@/components/Heading';
  import PostCard from '@/components/PostCard';
  import React from 'react';
  import { inter } from '../fonts';
  //------------------------------------------------------------------------------
  import { getAllContents } from '@/libs/post';
  //------------------------------------------------------------------------------

  const BlogPage = async () => {
    //------------------------------------------------------------------------------
    const contens = await getAllContents();
    //------------------------------------------------------------------------------

    return (
      <>
        <Heading>Blog Page</Heading>
        <h2 className={`text-2xl mb-3 ${inter.className}`}>List of Post</h2>
        {contens?.map((content, index) => (
          <PostCard
            key={index}
            author={content.author}
            date={content.date}
            description={content.description}
            href={`/blog/${content.slug}`}
            image={content.image}
            title={content.title}
          />
        ))}
      </>
    );
  };

  export default BlogPage;
  ```

### Fetch Get Data by Slug

berikut cara code untuk melakukan fetch get data by slug di server [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10317)

```tsx
// src/libs/posts.ts

import { marked } from 'marked';
import qs from 'qs';

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

  console.log('post', attributes);

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
```

### Refactor Code Fetch Get Post By Slug dan Get All Posts

Refactor di lakukan dengan memisahkan code yang bertugas melakukan fetch dari api strapi menjadi function yang terpisah [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10318), Sehingga code yang awalnya seperti ini:

```ts
// src/libs/post.ts
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
```

Hasilnya jadi seperti ini

```ts
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
```

### Generate Agar Project Kita Menjadi Static Page [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10319)

Berikut langakah - langkah untuk melakukan generate agar project kita jadi static page:

- Pastikan kita di file `next.config.mjs` kita sudah menambahkan properti `output: 'export'`

  ```mjs
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    //-------------------------------
    output: 'export',
    //-------------------------------
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '1337',
          pathname: '/uploads/**',
        },
      ],
    },
  };

  export default nextConfig;
  ```

- Ubah function `getSlugs` yang awal nya slugs diambil dari seluruh conent file `md` di folder `contents/blog`

```ts
export const getSlugs = async (): Promise<string[]> => {
  // Membaca file dari direktori src/contents/blog
  const files = await readdir(path.join(process.cwd(), './src/contents/blog'));

  // Memfilter file yang berakhiran .md dan hapus ekstensi .md untuk mendapatkan slug
  const slugs = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -'.md'.length));

  return slugs;
};
```

Jadi seperti ini (slugs di ambil dari parameter seluruh content yang menggunakan dynamic route)

```ts
// src/libs/post.ts

export const getSlugs = async (): Promise<string[]> => {
  const { data } = await fetchPosts({
    fields: ['slug'],
    pagination: { pageSize: 100 }, // Adjust pageSize as necessary
  });

  return data.map((post: any) => post.attributes.slug);
};
```

- Pastikan kita sudah menambahkan function `generateStaticParams` di file yang menggunakan dynamic route dengan memanfaatkan function `getSlugs` tadi untuk menghasilkan parameter statis yang diperlukan untuk membuat static page pada aplikasi Next.js (merubah halaman yang dynamic tersebut jadi static pages).

  ```ts
  export const generateStaticParams = async () => {
    const slugs = await getSlugs();

    return slugs.map((slug) => ({ slug }));
  };
  ```

- Jika menggunakan gambar, tambahkan properti `unoptimizend={true}` di elemen Next Image untuk membuat Next Image mengambil gambar langsung dari URL yang Anda tentukan tanpa melakukan optimasi. Misalnya kita meletakkan gambar kita di server tanpa properti tersebut next image akan mengakses url `http://localhost:3000/_next/image?url=http://localhost:1337/uploads/pecel_lele_7a180f1974.jpeg&w=640&q=75`. Dengan adanya properti tersebut Next Image akan mengakses url `http://localhost:1337/uploads/pecel_lele_7a180f1974.jpeg&w=640&q=75`

  ```tsx
  <Image
    src={post.image}
    alt="natural"
    width={640}
    height={360}
    className="mb-2 rounded"
    //-------------------------
    unoptimized={true}
    //-------------------------
  />
  ```

- Jalankan command `npm run build`
- Terakhir command `npx serve@latest output`, tetapi sebelumnya kita harus menginstall [serve](https://www.npmjs.com/package/serve) terlebih dahulu.

## Proses Optimize Next Image [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10322)

## Mengenal Fungsi Dynamic Parameter [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10323)

## Mengenal Fungsi Force Dynamic Pada Component

Saat kita mencoba menggunakan Fungsi Force Dynamic [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10324), Setelah melkukan command `npm run build` dan `npm start` kita mengalami masalah di mana data yang kita upadte di API tidak langsung bisa berubah UI kita. Solusinya kita bisa menambahkan opsi `cache: 'no-store'` ke fetch request kita yaitu di fetch `getAllContents` dan `getPostBySlug`.

```ts
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
    pagination: { pageSize: 100 },
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
  const { data } = await fetchPosts({
    fields: ['slug'],
    pagination: { pageSize: 100 }, // Adjust pageSize as necessary
  });

  return data.map((post: any) => post.attributes.slug);
};

// Function untuk Melakukan Fetch Post (kontent post) dari api strapi
async function fetchPosts(parameters: FetchPostsParameters) {
  const url =
    `${BACKEND_URL}/api/posts?` +
    qs.stringify(parameters, { encodeValuesOnly: true });

  // --------------------------------------------------------------
  const response = await fetch(url, { cache: 'no-store' });
  // --------------------------------------------------------------

  return await response.json();
}
```

## Menampilkan Halaman not Found

Berikut beberapa langkah untuk melakukan custom halaman not found [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10325):

- Misalnya kita ingin mengakses halaman blog yang mana conentnya belum terdaftar di api kita, mulai dengan menambahkan logic untuk kondisi ketika data yang diakses user tidak ada. Misalnya user mengakses `baseDomain.com/blog/dferereres`, jelas tidak ada di database kita. Tambahkan logic berikut di function `getPostBySlug`:

  ```ts
  // src/libs/post.ts
  export const getPostBySlug = async (slug: string): Promise<Post | null> => {
    const { data } = await fetchPosts(
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
      true // noCache is set to true
    );

    //-----------------------------------------------------------------------------------------
    if (!data || data.length === 0) {
      return null;
    }
    //-----------------------------------------------------------------------------------------

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
  ```

- Kemudian tambahkah logic juga di page yang menampilkan data post tersebut yaitu di page kontent blog `src/app/blog/[slug]/page.tsx`

  ```tsx
  // src/app/blog/[slug]/page.tsx
  import React from 'react';

  import { getPostBySlug, getSlugs } from '@/libs/post';

  import Heading from '@/components/Heading';
  import ShareLinkButton from '@/components/ShareLinkButton';
  import Image from 'next/image';
  import { notFound } from 'next/navigation';

  export const dynamic = 'force-dynamic';

  // export const generateStaticParams = async () => {
  //   const slugs = await getSlugs();

  //   return slugs.map((slug) => ({ slug }));
  // };

  export async function generateMetadata({
    params,
  }: {
    params: { slug: string };
  }) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
      return { title: 'Post Not Found', description: '' };
    }

    return {
      title: post.title,
      description: post.description,
    };
  }

  const BlogContent = async ({ params }: { params: { slug: string } }) => {
    const post = await getPostBySlug(params.slug);

    if (!post) {
      notFound();
    }
    return (
      <>
        <Heading>{post.title}</Heading>
        <div className="flex gap-3 pb-2 items-baseline">
          <p className="italic text-sm pb-2">
            {post.publishedAt} - {post.author}
          </p>
          <ShareLinkButton />
        </div>
        <Image
          src={post.image}
          alt="natural"
          width={640}
          height={360}
          className="mb-2 rounded"
          // unoptimized={true}
        />
        <article
          dangerouslySetInnerHTML={{ __html: post.body }}
          className="prose max-w-screen-sm text-red-900"
        />
      </>
    );
  };

  export default BlogContent;
  ```

## Mengenal Revalidate untuk Fetch Data

[Revalidate](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate) adalah proses di mana Next.js akan melakukan fetch data ke cache terlebih dahalu (sesuai setingan), jika kita menambahkan angka sebagai valuenya maka setelah beberapa detik sesuai dengan value yang diinputkan maka Next.js akan melakukan fetch ke api untuk mengambil data terbaru. Berikut langakah - langkah yang perlu dipersiapkan agar kita bisa melakukan revalidate [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10326):

- Tambahkan option revalidate ke page yang ingin diterapkan (di contoh ini di page blog (`src/app/blog/page.tsx`) dan page konten blog (`src/app/blog/[slug]/page.tsx`)) dan juga tambahkan function `generateStaticParams` di page yang menerapkan dynamic route.

  - Page blog (`src/app/blog/page.tsx`)

    ```tsx
    import Heading from '@/components/Heading';
    import PostCard from '@/components/PostCard';
    import React from 'react';
    import { inter } from '../fonts';
    import { getAllContents } from '@/libs/post';

    //---------------------------------------------------------------------------------
    export const revalidate = 30;
    //---------------------------------------------------------------------------------

    const BlogPage = async () => {
      const contens = await getAllContents();

      return (
        <>
          <Heading>Blog Page</Heading>
          <h2 className={`text-2xl mb-3 ${inter.className}`}>List of Post</h2>
          {contens?.map((content, index) => (
            <PostCard
              key={index}
              author={content.author}
              description={content.description}
              image={content.image}
              publishedAt={content.publishedAt}
              slug={`/blog/${content.slug}`}
              title={content.title}
            />
          ))}
        </>
      );
    };

    export default BlogPage;
    ```

  - Konten blog (`src/app/blog/[slug]/page.tsx`)

    ```tsx
    import React from 'react';

    import { getPostBySlug, getSlugs } from '@/libs/post';

    import Heading from '@/components/Heading';
    import ShareLinkButton from '@/components/ShareLinkButton';
    import Image from 'next/image';
    import { notFound } from 'next/navigation';

    //-------------------------------------------------------------------------
    export const revalidate = 30;

    // Function yang digunakan untuk mendapatkan static page
    export const generateStaticParams = async () => {
      const slugs = await getSlugs();

      return slugs.map((slug) => ({ slug }));
    };
    //-------------------------------------------------------------------------

    export async function generateMetadata({
      params,
    }: {
      params: { slug: string };
    }) {
      const post = await getPostBySlug(params.slug);

      if (!post) {
        return { title: 'Post Not Found', description: '' };
      }

      return {
        title: post.title,
        description: post.description,
      };
    }

    const BlogContent = async ({ params }: { params: { slug: string } }) => {
      const post = await getPostBySlug(params.slug);

      if (!post) {
        notFound();
      }
      return (
        <>
          <Heading>{post.title}</Heading>
          <div className="flex gap-3 pb-2 items-baseline">
            <p className="italic text-sm pb-2">
              {post.publishedAt} - {post.author}
            </p>
            <ShareLinkButton />
          </div>
          <Image
            src={post.image}
            alt="natural"
            width={640}
            height={360}
            className="mb-2 rounded"
            // unoptimized={true}
          />
          <article
            dangerouslySetInnerHTML={{ __html: post.body }}
            className="prose max-w-screen-sm text-red-900"
          />
        </>
      );
    };

    export default BlogContent;
    ```

- Hapus folder `.next` dan jalankan command `npm run build`
- Jalankan `npm start` untuk menjalankan project

## Menggunakan Force Update Dan Revalidate Di Fetch

Kita bisa menggunaan Force Update dan Revalidate di Function fetch kita [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10327). Caranya tinggal kita tambahkah `cache:'no-store'` atau `next: { revalidate: 30 }` di parameter function fetch kita seperti ini:

```ts
// src/libs/post.ts

async function fetchPosts(
  parameters: FetchPostsParameters,
  noCache: boolean = false
) {
  const url =
    `${BACKEND_URL}/api/posts?` +
    qs.stringify(parameters, { encodeValuesOnly: true });

  const response = await fetch(url, {
    cache: noCache ? 'no-store' : 'default',
    // next: { revalidate: 30 },
  });

  return await response.json();
}
```

## Membuat Fitur pagination

Pada contoh ini kita akan membuat fitur pagination untuk page Blog (`src/app/blog/page.tsx`). Jadi kita akan fokus ke file page blog tersebut, file tempat kita melakukan fetch data content post (`src/libs/post`) dan file component pagination yang akan kita buat nanti. Berikut langkah - langkah untuk membuat fitur pagination dengan fetch data dari strapi API:

- Tangkap data query parameter untuk Pagination [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10330). <br/>

  - Ambil data query param yang ada di prop component BogPage dan tampilkan nilainya untuk menunjukkan user sedang di halaman berapa dan buat tombol handle untuk mengurangi dan menambahkan halaman guna berpindah halaman menggunakan element `Link` Next.js dengan properti href yang ditujukan ke query params.

    ```tsx
    import React from 'react';
    import Link from 'next/link';
    import { inter } from '../fonts';

    import { getAllContents } from '@/libs/post';

    import Heading from '@/components/Heading';
    import PostCard from '@/components/PostCard';

    export const revalidate = 30;

    const BlogPage = async (params: {
      params: Record<string, string>;
      searchParams: {
        page?: string;
      };
    }) => {
      //----------------------------------------------------------
      console.log(params); // { params: {}, searchParams: { page: '3' } }

      const page = params.searchParams.page
        ? parseInt(params.searchParams.page)
        : 1;
      //----------------------------------------------------------

      const contens = await getAllContents();

      return (
        <>
          <Heading>Blog Page</Heading>
          <h2 className={`text-2xl mb-3 ${inter.className}`}>List of Post</h2>
          //----------------------------------------------------------
          <div className="flex gap-3 pb-2">
            <Link href={''}>&lt;</Link>
            <span>Page 1</span>
            <Link href={'/blog?page=2'}>&gt;</Link>
          </div>
          //----------------------------------------------------------
          {contens?.map((content, index) => (
            <PostCard
              key={index}
              author={content.author}
              description={content.description}
              image={content.image}
              publishedAt={content.publishedAt}
              slug={`/blog/${content.slug}`}
              title={content.title}
            />
          ))}
        </>
      );
    };

    export default BlogPage;
    ```

  - Buat function untuk melakukan parse query params page dari string dari string ke integer dan logic jika

    ```tsx
    import React from 'react';
    import Link from 'next/link';
    import { inter } from '../fonts';

    import { getAllContents } from '@/libs/post';

    import Heading from '@/components/Heading';
    import PostCard from '@/components/PostCard';

    export const revalidate = 30;

    const BlogPage = async (params: {
      params: Record<string, string>;
      searchParams: {
        page?: string;
      };
    }) => {
      // console.log(params); // { params: {}, searchParams: { page: '3' } }

      //-------------------------------------------------------------
      const page = parsePageParam(params.searchParams.page);
      //-------------------------------------------------------------

      const contens = await getAllContents();

      return (
        <>
          <Heading>Blog Page</Heading>
          <h2 className={`text-2xl mb-3 ${inter.className}`}>List of Post</h2>

          <div className="flex gap-3 pb-2">
            <Link href={''}>&lt;</Link>
            <span>Page 1</span>
            <Link href={'/blog?page=2'}>&gt;</Link>
          </div>

          {contens?.map((content, index) => (
            <PostCard
              key={index}
              author={content.author}
              description={content.description}
              image={content.image}
              publishedAt={content.publishedAt}
              slug={`/blog/${content.slug}`}
              title={content.title}
            />
          ))}
        </>
      );
    };

    export default BlogPage;

    //-------------------------------------------------------------
    const parsePageParam = (paramValue: string | undefined) => {
      if (paramValue) {
        const page = parseInt(paramValue);

        if (isFinite(page) && page > 0) {
          return page;
        }
      }
      return 1;
    };
    //-------------------------------------------------------------
    ```

- Gunakan Parameter [Pagination Strapi](https://docs.strapi.io/dev-docs/api/rest/sort-pagination) untuk mendapatkan data pagination termasuk nilai total page dan value yang menunjukkan sekarang user berada di halaman berapa [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10331) [ref2](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10332)<br/>

  - Di file `src/libs/post.ts` (tempat kita melakukan fetc api) Ubah parameter function `getAllContents` tambahkan value `page` untuk menunjukkan user sedang berada di halaman berapa. Ubah value `pageSize` dand value `page` tadi dinamis, jadikan paremeter di function `getAllContents` tersebut. Kemudian ubah return pada function `getAllContents` ini yang semula hanya mereturn value array `contents` jadi mereturn `contents` dan `meta` (data pagination). Untuk mengikuti perubahan tersebut kita harus melakukan perubahan - perubahan berikut:

    - Ubah type `FetchPostsParameters`, tambahkan value page
    - Tambahkan type `meta` Untuk menunjukkan data pagination

    ```ts
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

    //----------------------------------------------------------------------
    interface Meta {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    }
    //----------------------------------------------------------------------

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
        //----------------------------------------------------------------------
        page?: number;
        //----------------------------------------------------------------------
      };
    }

    const BACKEND_URL = 'http://localhost:1337';
    export const CACHE_TAG_POSTS = 'posts';

    export const getPostBySlug = async (slug: string): Promise<Post | null> => {
      const { data } = await fetchPosts(
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
        }
        // true // noCache is set to true
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

    //----------------------------------------------------------------------
    export const getAllContents = async (
      pageSize: number,
      page: number
    ): Promise<{ meta: Meta; contents: Post[] }> => {
      const { data, meta } = await fetchPosts(
        {
          fields: [
            'author',
            'body',
            'description',
            'publishedAt',
            'slug',
            'title',
          ],
          populate: { image: { fields: ['url'] } },
          sort: ['updatedAt:desc'],
          pagination: { pageSize, page },
        }
        // false // noCache is set to false
      );

      // console.log(data);

      return {
        meta: meta,
        contents: data?.map(
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
        ),
      };
    };
    //----------------------------------------------------------------------

    export const getSlugs = async (): Promise<string[]> => {
      const { data } = await fetchPosts({
        fields: ['slug'],
        pagination: { pageSize: 3 }, // Adjust pageSize as necessary
      });

      return data.map((post: any) => post.attributes.slug);
    };

    // Function untuk Melakukan Fetch Post (kontent post) dari api strapi
    async function fetchPosts(
      parameters: FetchPostsParameters
      // noCache: boolean = false
    ) {
      const url =
        `${BACKEND_URL}/api/posts?` +
        qs.stringify(parameters, { encodeValuesOnly: true });

      const response = await fetch(url, {
        // cache: noCache ? 'no-store' : 'default',
        // next: { revalidate: 30 },
        next: {
          tags: [CACHE_TAG_POSTS],
        },
      });

      return await response.json();
    }
    ```

  - Di page blog (`src/app/blog/page.tsx`), tambahkan value parameter `pageSize` dan `page` di function `getAllContents` kemudian ambil nilai meta (data pagination) dan contents dan tampilkan di UI

    ```tsx
    import Heading from '@/components/Heading';
    import PostCard from '@/components/PostCard';
    import React from 'react';
    import Link from 'next/link';
    import { inter } from '../fonts';
    import { getAllContents } from '@/libs/post';

    export const revalidate = 30;

    const BlogPage = async (params: {
      params: Record<string, string>;
      searchParams: {
        page?: string;
      };
    }) => {
      // console.log(params); // { params: {}, searchParams: { page: '3' } }

      const page = parsePageParam(params.searchParams.page);
      //----------------------------------------------------------------------------------
      const { meta, contents } = await getAllContents(3, page);
      //----------------------------------------------------------------------------------

      return (
        <>
          <Heading>Blog Page</Heading>
          <h2 className={`text-2xl mb-3 ${inter.className}`}>List of Post</h2>

          <div className="flex gap-3 pb-2">
            <Link href={`/blog?page=${page - 1}`}>&lt;</Link>
            <span>
              //----------------------------------------------------------------------------------
              Page {page} of {meta.pagination.pageCount}
              //----------------------------------------------------------------------------------
            </span>
            <Link href={`/blog?page=${page + 1}`}>&gt;</Link>
          </div>

          {contents?.map((content, index: number) => (
            <PostCard
              key={index}
              author={content.author}
              description={content.description}
              image={content.image}
              publishedAt={content.publishedAt}
              slug={`/blog/${content.slug}`}
              title={content.title}
            />
          ))}
        </>
      );
    };

    export default BlogPage;

    const parsePageParam = (paramValue: string | undefined) => {
      if (paramValue) {
        const page = parseInt(paramValue);

        if (isFinite(page) && page > 0) {
          return page;
        }
      }
      return 1;
    };
    ```

- Pisahkan component pagination dan buat logic batas page ketika user berada di halaman awal dan akhir [ref](https://dashboard.codepolitan.com/learn/courses/belajar-nextjs-dengan-headless-cms/lessons/10333)

  ```tsx
  // src/components/Pagination.tsx

  import { ChevronRightIcon } from '@heroicons/react/24/outline';
  import { ChevronLeftIcon } from '@heroicons/react/24/outline';
  import Link from 'next/link';
  import React from 'react';

  const Pagination = ({
    href,
    page,
    pageCount,
  }: {
    href: string;
    page: number;
    pageCount: number;
  }) => {
    return (
      <div className="flex gap-3 pb-3">
        <PaginationLink enabled={page > 1} href={`${href}?page=${page - 1}`}>
          <ChevronLeftIcon className="w-4 h-4" />
        </PaginationLink>
        <span>
          Page {page} of {pageCount}
        </span>
        <Link href={`${href}?page=${page + 1}`}>&gt;</Link>
        <PaginationLink
          enabled={page < pageCount}
          href={`${href}?page=${page + 1}`}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </PaginationLink>
      </div>
    );
  };

  export default Pagination;

  const PaginationLink = ({
    children,
    enabled,
    href,
  }: {
    children: React.ReactNode;
    enabled: boolean;
    href: string;
  }) => {
    if (!enabled) {
      return (
        <span className="px-3 py-1 rounded border border-gray-300 cursor-not-allowed">
          {children}
        </span>
      );
    }
    return (
      <Link
        href={href}
        className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-200"
      >
        {children}
      </Link>
    );
  };
  ```

  ```tsx
  import Heading from '@/components/Heading';
  import PostCard from '@/components/PostCard';
  import React from 'react';
  import { inter } from '../fonts';
  import { getAllContents } from '@/libs/post';
  import Link from 'next/link';
  import Pagination from '@/components/Pagination';

  export const revalidate = 30;

  const BlogPage = async (params: {
    params: Record<string, string>;
    searchParams: {
      page?: string;
    };
  }) => {
    // console.log(params); // { params: {}, searchParams: { page: '3' } }

    const page = parsePageParam(params.searchParams.page);

    const { meta, contents } = await getAllContents(3, page);
    console.log('post', meta);

    return (
      <>
        <Heading>Blog Page</Heading>
        <h2 className={`text-2xl mb-3 ${inter.className}`}>List of Post</h2>
        //------------------------------------------------------------------------------
        <Pagination
          href={'/blog'}
          page={page}
          pageCount={meta.pagination.pageCount}
        />
        //------------------------------------------------------------------------------
        {contents?.map((content, index: number) => (
          <PostCard
            key={index}
            author={content.author}
            description={content.description}
            image={content.image}
            publishedAt={content.publishedAt}
            slug={`/blog/${content.slug}`}
            title={content.title}
          />
        ))}
      </>
    );
  };

  export default BlogPage;

  const parsePageParam = (paramValue: string | undefined) => {
    if (paramValue) {
      const page = parseInt(paramValue);

      if (isFinite(page) && page > 0) {
        return page;
      }
    }
    return 1;
  };
  ```

## Layout Management

App Router mendukung pengaturan layout yang lebih kompleks dan nested layout.

#### Layout Sederhana

```jsx
// components/Layout.js
const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>My App</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2024 My App</p>
      </footer>
    </div>
  );
};

export default Layout;
```

#### Menggunakan Layout di Halaman

```jsx
// pages/_app.js
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```

#### Nested Layout

Untuk layout bersarang, Anda dapat menggunakan komponen layout di dalam komponen halaman lainnya.

```jsx
// components/DashboardLayout.js
const DashboardLayout = ({ children }) => {
  return (
    <div>
      <aside>
        <nav>
          <a href="/dashboard">Overview</a>
          <a href="/dashboard/settings">Settings</a>
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  );
};

export default DashboardLayout;
```

```jsx
// pages/dashboard.js
import DashboardLayout from '../components/DashboardLayout';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1>Dashboard Overview</h1>
    </DashboardLayout>
  );
};

export default Dashboard;
```

## 404 Page

Di Next.js 14, menangani halaman Not Found (404) bisa dilakukan dengan mudah. Halaman Not Found adalah halaman yang ditampilkan ketika pengguna mencoba mengakses URL yang tidak ada di route aplikasi Halaman not found ini harus dibuat di folder app dengan nama `not-found`. Berikut struktur file aplikasi jika ditambahkan halaman not found:

```tsx
src/app/

|-- product
|   |-- [productId]/
|   |   |-- reviews/
|   |   |   |-- [reviewId]
|   |   |   |   |-- page.tsx
|   |   |-- page.tsx
|   |-- page.tsx
|-- layout.tsx
|-- not-found.tsx
|-- page.tsx
```

Berikut contoh code halaman not-found `src/app/not-found`

```tsx
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 text-lg text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
```

### Menangani Halaman Not Found Untuk Rute Dinamis

## 1. Membuat File Not Found

Untuk membuat halaman Not Found, Anda perlu menambahkan file `not-found.tsx` di dalam direktori `src/app/`.

### Struktur Direktori

## Dynamic Imports

Anda dapat menggunakan dynamic imports untuk memuat komponen atau halaman berdasarkan kebutuhan.

```jsx
// pages/dynamic.js
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});

const DynamicPage = () => {
  return (
    <div>
      <h1>Dynamic Import Example</h1>
      <DynamicComponent />
    </div>
  );
};

export default DynamicPage;
```

## Middleware

App Router mendukung penggunaan middleware untuk menambahkan logika custom sebelum masuk ke halaman tertentu.

#### Contoh Middleware

```jsx
// middleware/auth.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const isLoggedIn = checkUserLoggedIn(); // Implementasi fungsi login
  if (!isLoggedIn) {
    return NextResponse.redirect('/login');
  }
  return NextResponse.next();
}

function checkUserLoggedIn() {
  // Logika untuk memeriksa apakah pengguna sudah login
  return true; // Contoh: selalu menganggap pengguna sudah login
}
```

#### Menggunakan Middleware

```jsx
// pages/dashboard.js
import { middleware } from '../middleware/auth';

export const getServerSideProps = async (context) => {
  const response = middleware(context.req);
  if (response) {
    return response;
  }

  return {
    props: {}, // Props untuk halaman jika pengguna sudah login
  };
};

const Dashboard = () => {
  return <h1>Dashboard</h1>;
};

export default Dashboard;
```

#

<!-- Menggunakan Font Variable Dengan Tailwindcss 25 -->
<!-- Memisahkan Layer Data Dengan Layer Ui 30 -->
<!-- Membuat Fungsi Copy Link Dengan Client Component 40 -->
<!-- Deploy Project Static Page Next.Js Di Self Hosting 45 -->
<!-- Persiapan Menampilkan Data List Post Dari Strapi 50 -->
<!-- Mendapatkand Data Slug Untuk Digenerate Static Page 55 -->
<!--  Mengenal Fungsi Force Dynamic Pada Component 60 -->
<!-- Menggunakan On Demand Revalidation 65s -->
