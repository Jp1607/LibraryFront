import { StyledTable, StyledTableBody, StyledTableCell, StyledTableContainer, StyledTableHead, StyledTableRow } from "../../styles/componentsStyles/tableStyles"
import { TableRowProps } from "../../types/componentsTypes/tableTypes"


export const CustomTableContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (<StyledTableContainer>{children}</StyledTableContainer>)
}

export const CustomTable: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (<StyledTable>{children}</StyledTable>)
}

export const CustomTableHead: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (<StyledTableHead>{children}</StyledTableHead>)
}

export const CustomTableBody: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (<StyledTableBody>{children}</StyledTableBody>)
}

export const CustomTableRow: React.FC<TableRowProps> = ({ children, onClick }) => {
    return (<StyledTableRow onClick={onClick}>{children}</StyledTableRow>)
}

export const CustomTableCell: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (<StyledTableCell>{children}</StyledTableCell>)
}