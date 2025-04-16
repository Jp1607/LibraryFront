import { apiDataType } from "../../types/entities/api";
import { BookType } from "../../types/entities/book";
import { PUT, PUTExclude } from "../requests";

export async function editBook(book: BookType): Promise<string> {
  const response = await PUT("books", book).then((response) => response);
  return response;
}

export async function excludeBook(book: BookType) {
  const response = await PUTExclude("books", book as apiDataType).then((response) => response);
  return response;
}
