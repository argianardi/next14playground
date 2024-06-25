import { revalidateTag } from 'next/cache';
import { CACHE_TAG_POSTS } from '@/libs/post';
import { NextRequest } from 'next/server';

// Fungsi ini menangani permintaan POST yang dikirim ke route yang terkait dengannya
export async function POST(request: NextRequest) {
  const payload = await request.json();

  // Memeriksa apakah model yang ditentukan dalam payload adalah 'post'
  if (payload.model === 'post') {
    // Jika iya, maka revalidasi cache untuk post
    revalidateTag(CACHE_TAG_POSTS);
    console.log('revalidated:', CACHE_TAG_POSTS);
  }

  // Memberikan respons dengan status 204 No Content, yang menunjukkan bahwa
  // permintaan berhasil diproses, tetapi tidak ada konten yang dikirim kembali
  return new Response(null, { status: 204 });
}
