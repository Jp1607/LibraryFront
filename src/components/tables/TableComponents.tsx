import { styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

const StyledTableContainer = styled(TableContainer)({})
export const CustomTableContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (<StyledTableContainer>{children}</StyledTableContainer>)
}

const StyledTable = styled(Table)({})
export const CustomTable: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (<StyledTable>{children}</StyledTable>)
}

const StyledTableHead = styled(TableHead)({})
export const CustomTableHead: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (<StyledTableHead>{children}</StyledTableHead>)
}

const StyledTableBody = styled(TableBody)({})
export const CustomTableBody: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (<StyledTableBody>{children}</StyledTableBody>)
}

const StyledTableRow = styled(TableRow)({})
type TableRowProps = {
    children?: React.ReactNode,
    onClick: () => {}
}
export const CustomTableRow: React.FC<TableRowProps> = ({ children, onClick }) => {
    return (<StyledTableRow onClick={onClick}>{children}</StyledTableRow>)
}

const StyledTableCell = styled(TableCell)({})
export const CustomTableCell: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (<StyledTableCell>{children}</StyledTableCell>)
}