import { BookType } from "../../types/entities/book"
import { GET } from "../requests";

export async function getBookByTitle(title: string): Promise<BookType> {
  const Book: BookType = await GET<BookType>("books", [`title=${title}`]).then(
    (response) => response
  );
  return Book;
}

export async function getBookList(): Promise<BookType[]> {
  const BookList: BookType[] = await GET<BookType[]>("books").then(
    (response) => response
  );
  return BookList;
}
