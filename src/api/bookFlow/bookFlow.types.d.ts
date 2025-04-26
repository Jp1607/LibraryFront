import { BookType } from "../../types/entities/book";
import { StudentType } from "../../types/entities/student";
import { UserType } from "../user/user.types";

export type BookFlowType = { id?: number, book: BookType, student: StudentType, user: UserType, borrowDate: string };
export type BookFlowTableDisplayType = { id?: number, book: string, student: string, date: string };