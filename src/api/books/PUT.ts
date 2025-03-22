import type { BookType } from "src/types/book";
import { PUT, PUTExclude } from "../requests";
import type { apiDataType } from "src/types/apiData";

export async function editBook(book: BookType): Promise<string> {
  const response = await PUT("books", book).then((response) => response);
  return response;
}

export async function excludeBook(book: BookType) {
  const response = await PUTExclude("books", book as apiDataType).then((response) => response);
  return response;
}
