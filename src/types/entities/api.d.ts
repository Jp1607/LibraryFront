export type apiDataType = { id: number, [key: string]: any }
type Pagination = {
    totalDataCount: number,
    page: number,
}
export type ApiData<T> = {
    rows: T[],
    pagination: Pagination
}