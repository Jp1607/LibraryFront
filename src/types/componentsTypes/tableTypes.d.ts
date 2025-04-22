import { TableRowProps } from "@mui/material";

export type TableHeaders<T> = { key: keyof T, label: string };
export type TableComponentProps<T> = { rows: T[], columns: TableHeaders<T>[], onRowClick: (param: T) => void };
export type TableRowPropsType = TableRowProps & { children?: React.ReactNode, onClick?: () => void };