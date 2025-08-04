import { ApiData } from "../../types/entities/api";
import { BookType } from "../../types/entities/book"
import { GET } from "../requests";

export async function getBookByTitle(title: string): Promise<ApiData<BookType>> {
  const Book: ApiData<BookType> = await GET<BookType>("books", [`title=${title}`]).then(
    (response) => response
  );
  return Book;
}

export async function getBookById(id: number): Promise<BookType> {
  const Book: ApiData<BookType> = await GET<BookType>("books", [`id=${id}`]).then(
    (response) => response
  );
  return Book.rows[0];
}

export async function getBookData(page?: number): Promise<ApiData<BookType>> {
  const BookList: ApiData<BookType> = await GET<BookType>("books", page ? [`page=${page}`] : undefined).then(
    (response) => response
  );
  return BookList;
}
