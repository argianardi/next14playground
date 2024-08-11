import { cookies, headers } from 'next/headers';
import { NextRequest } from 'next/server';

// Contoh Header
// export async function GET(request: NextRequest) {
//   // Menggunakan Next Request
//   //   const headerList = new Headers(request.headers);

//   //   Menggunakan Next Header
//   const headerList = headers();
//   console.log(headerList.get('Authorization'));

//   return new Response('<h1>Profile Data</h1>', {
//     headers: {
//       'Content-Type': 'text/html',
//     },
//   });
// }

// Contoh Cookie
export async function GET(request: NextRequest) {
  // Ambil cookies Menggunakan Next Request
  console.log(request.cookies.get('token'));

  // Set dan Ambil cookies Menggunakan cookies dari Next Header
  cookies().set('theme', 'dark');
  console.log(cookies().get('theme'));

  return new Response('<h1>Profile Data</h1>', {
    headers: {
      'Content-Type': 'text/html',
      // Set cookie menggunakan Header
      'set-cookie': 'token=tokenkitanih',
    },
  });
}
