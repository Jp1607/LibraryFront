import { BookType } from "../../types/entities/book";
import { StudentType } from "../../types/entities/student";
import { GET, POST } from "../requests";

export async function borrowBook(book: BookType, student: StudentType) {
    const response = await POST("flow", [`bookId=${book.id}`, `studentId=${student.id}`])
    return response;
}

export async function returnBook(bookId: number, studentId: number) {
    console.log(bookId, studentId)
    const response = await POST("flow", undefined, [`bookId=${bookId}`, `studentId=${studentId}`])
    return response;
}

