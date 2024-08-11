import { cookies, headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

// Kena cache
// export async function GET() {
//   return NextResponse.json({ time: new Date().toISOString() });
// }

// Menghentikan cache menggunakan Next Request
// export async function GET(request: NextRequest) {
//   console.log(request.nextUrl.searchParams.get('userId'));

//   return NextResponse.json({ time: new Date().toISOString() });
// }

// Menggunakan cookie atau header (bisa salah satu saja)
// export async function GET() {
//   console.log(cookies().get('theme'));

//   const headerList = headers();
//   console.log(headerList.get('Authorization'));

//   return NextResponse.json({ time: new Date().toISOString() });
// }

// Menggunakan export dynamic = 'force-dynamic'
export const dynamic = 'force-dynamic'; //default 'auto'
export async function GET() {
  return NextResponse.json({ time: new Date().toISOString() });
}
