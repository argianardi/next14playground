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
