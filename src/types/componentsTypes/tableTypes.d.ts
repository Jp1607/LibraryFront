import { TableRowProps } from "@mui/material";
import { ApiData } from "../entities/api";

export type TableHeaders<T> = { key: keyof T, label: string };
export type TableComponentProps<T> = { rows: ApiData<T>, columns: TableHeaders<T>[], onRowClick: (param: T) => void, handlePageChange: (event, page: number) => void };
export type TableRowPropsType = TableRowProps & { children?: React.ReactNode, onClick?: () => void };