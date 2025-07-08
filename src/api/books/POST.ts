import { BookType } from "../../types/entities/book";
import { POST } from "../requests";

export async function addBook(book: BookType): Promise<string> {
  const response = await POST("books", book).then((response) => response);
  return response;
}