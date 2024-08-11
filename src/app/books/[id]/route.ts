import { NextRequest, NextResponse } from 'next/server';
import { books } from '../data';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const book = books.find((book) => book.id === parseInt(params.id));
  return NextResponse.json(book);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { title } = await request.json();
  const index = books.findIndex((book) => book.id === parseInt(params.id));

  books[index].title = title;

  return NextResponse.json(books[index]);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const index = books.findIndex((book) => book.id === parseInt(params?.id));

  books[index] = { id: parseInt(params?.id), ...body };

  return NextResponse.json(books[index]);
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const index = books.findIndex((book) => book.id === parseInt(params?.id));

  books.splice(index, 1);

  return NextResponse.json({
    message: `Delete resource with id ${params?.id}`,
  });
}
