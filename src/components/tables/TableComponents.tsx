import { TableBodyProps, TableCellProps, TableContainerProps, TableHeadProps, TableProps } from "@mui/material"
import { StyledTable, StyledTableBody, StyledTableCell, StyledTableContainer, StyledTableHead, StyledTableRow } from "../../styles/componentsStyles/tableStyles"
import { TableRowPropsType } from "../../types/componentsTypes/tableTypes"


export const CustomTableContainer: React.FC<TableContainerProps & { children?: React.ReactNode }> = ({ children, ...rest }) => {
    return (<StyledTableContainer {...rest}>{children}</StyledTableContainer>)
}

export const CustomTable: React.FC<TableProps & { children?: React.ReactNode }> = ({ children, ...rest }) => {
    return (<StyledTable {...rest}>{children}</StyledTable>)
}

export const CustomTableHead: React.FC<TableHeadProps & { children?: React.ReactNode }> = ({ children, ...rest }) => {
    return (<StyledTableHead {...rest}>{children}</StyledTableHead>)
}

export const CustomTableBody: React.FC<TableBodyProps & { children?: React.ReactNode }> = ({ children, ...rest }) => {
    return (<StyledTableBody {...rest}>{children}</StyledTableBody>)
}

export const CustomTableRow: React.FC<TableRowPropsType> = ({ children, onClick, ...rest }) => {
    return (<StyledTableRow onClick={onClick} {...rest}>{children}</StyledTableRow>)
}

export const CustomTableCell: React.FC<TableCellProps & { children?: React.ReactNode }> = ({ children, ...rest }) => {
    return (<StyledTableCell {...rest}>{children}</StyledTableCell>)
}