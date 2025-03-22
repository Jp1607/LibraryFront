import Table from '@mui/joy/Table';
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from 'react';
import { GET } from '../../api/requests';

interface TableHeaders<T> {
    key: keyof T,
    label: string
}

interface TableComponentProps<T> {
    rows: T[],
    columns: TableHeaders<T>[]
}
const TableComponent = <T,>({ rows, columns }: TableComponentProps<T>) => {

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell key={column.key.toString()}>{column.label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.key.toString()}>{row[column.key] as React.ReactNode}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableComponent