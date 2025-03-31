import { styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export const StyledTableContainer = styled(TableContainer)({
    '&': {
        backgroundColor: 'white',
    }
});
export const StyledTable = styled(Table)({});
export const StyledTableHead = styled(TableHead)({});
export const StyledTableBody = styled(TableBody)({});
export const StyledTableRow = styled(TableRow)({
    '&': {
        ':hover': {
            backgroundColor: 'blue'
        }
    }
});
export const StyledTableCell = styled(TableCell)({});