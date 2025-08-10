import { ApiData } from "../../types/entities/api";
import { GET } from "../requests";
import { BookFlowTableDisplayType, BookFlowType } from "./bookFlow.types";

export async function getBorrowedBookList(page?: number): Promise<ApiData<BookFlowType>> {
    return await GET<BookFlowType>("flow", [`page=${page}`]);
}

export async function getBorrowedBookById(id: number): Promise<BookFlowType> {
    return (await GET<BookFlowType>("flow", [`id=${id}`])).rows[0];
}