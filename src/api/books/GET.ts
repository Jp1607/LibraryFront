import { Book } from "../../types/entities/book"
import { GET } from "../requests";

export async function getBookByTitle(title: string): Promise<Book> {
  const Book: Book = await GET<Book>("books", [`title=${title}`]).then(
    (response) => response
  );
  return Book;
}

export async function getBookList(): Promise<Book[]> {
  const BookList: Book[] = await GET<Book[]>("books").then(
    (response) => response
  );
  return BookList;
}
