import { NextRequest, NextResponse } from 'next/server';
import { books } from './data';

export async function GET(request: NextRequest) {
  console.log(request.nextUrl.searchParams.get('userId'));
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get('userId');

  if (userId) {
    const booksFiltered = books.filter(
      (book) => book.userId === parseInt(userId)
    );
    return NextResponse.json(booksFiltered);
  }

  return NextResponse.json(books);
}

export async function POST(request: NextRequest) {
  const bodyReq = await request.json();
  console.log(bodyReq);

  const newBook = {
    id: books.length + 1,
    ...bodyReq,
  };

  books.push(newBook);
  return NextResponse.json(newBook, {
    status: 201,
  });
}
