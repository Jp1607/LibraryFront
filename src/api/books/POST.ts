import type { BookDTOType } from "src/types/book";
import { POST } from "../requests";

export async function addBook(book: BookDTOType): Promise<string> {
  const response = await POST("books", book).then((response) => response);
  return response;
}
