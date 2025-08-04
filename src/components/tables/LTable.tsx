import React from 'react';
import { CustomTable, CustomTableBody, CustomTableCell, CustomTableContainer, CustomTableHead, CustomTableRow } from './TableComponents';
import { TableComponentProps } from '../../types/componentsTypes/tableTypes';
import { TablePagination } from '@mui/material';

const LTable = <T,>({ rows, columns, onRowClick, handlePageChange }: TableComponentProps<T>) => {
    const [selectedRowId, setSelectedRowId] = React.useState<number>();
    const [rowsPerPage] = React.useState<number>(10);

    const handleClick = (row: T, rowIndex: number) => {
        setSelectedRowId(rowIndex)
        onRowClick(row);
    }

    return (
        <CustomTableContainer sx={{ height: "70vh" }}>
            <CustomTable>
                <CustomTableHead >
                    <CustomTableRow sx={{ ':hover': { backgroundColor: 'white' } }}>
                        {columns.map((column) => (
                            <CustomTableCell key={column.key.toString()}>{column.label}</CustomTableCell>
                        ))}
                    </CustomTableRow>
                </CustomTableHead>
                <CustomTableBody>
                    {rows.rows.map((row, rowIndex) => {
                        const selected = selectedRowId == rowIndex;
                        return (
                            <CustomTableRow
                                sx={{
                                    ':hover': { backgroundColor: '#c1f0c1' },
                                    '&.Mui-selected': { backgroundColor: "#6fdc6f" }
                                }}
                                selected={selected}
                                onClick={() => handleClick(row, rowIndex)}
                                key={`table-row-${rowIndex}`}
                            >
                                {columns.map((column, columnIndex) => (
                                    <CustomTableCell
                                        key={`table-cell-row:${rowIndex}-column:${columnIndex}`}
                                    >
                                        {row[column.key] as React.ReactNode}
                                    </CustomTableCell>
                                ))}
                            </CustomTableRow>
                        )
                    })}
                </CustomTableBody>
            </CustomTable>
            <TablePagination
                component={"div"}
                count={rows.pagination.totalDataCount}
                onPageChange={handlePageChange}
                rowsPerPage={rows.rows.length}
                page={rows.pagination.page}
                rowsPerPageOptions={[rowsPerPage]}
                labelDisplayedRows={({ from, to, count }) => { return `${from}–${to} de ${count !== -1 ? count : `more than ${to}`}`; }}
            />
        </CustomTableContainer>
    )
}

export default LTable