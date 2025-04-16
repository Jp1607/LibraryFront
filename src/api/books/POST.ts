import { BookDTOType, BookType } from "../../types/entities/book";
import { StudentType } from "../../types/entities/student";
import { POST } from "../requests";

export async function addBook(book: BookDTOType): Promise<string> {
  const response = await POST("books", book).then((response) => response);
  return response;
}

export async function borrowBook(book: BookType, student: StudentType) {
  const response = await POST("flow", book, [`bookId=${book.id}`, `studentId=${student.id}`])
  return response;
}