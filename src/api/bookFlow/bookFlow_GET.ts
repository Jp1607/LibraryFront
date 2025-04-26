import { GET } from "../requests";
import { BookFlowTableDisplayType, BookFlowType } from "./bookFlow.types";

export async function getBorrowedBookList(): Promise<BookFlowTableDisplayType[]> {
    return await GET("flow")
}

export async function getBorrowedBookById(id: number): Promise<BookFlowType> {
    return await GET("flow", [`id=${id}`])
}