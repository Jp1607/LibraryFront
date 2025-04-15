import { BookDTOType } from "../../types/entities/book";
import { POST } from "../requests";

export async function addBook(book: BookDTOType): Promise<string> {
  const response = await POST("books", book).then((response) => response);
  return response;
}
