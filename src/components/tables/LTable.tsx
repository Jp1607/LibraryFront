import React from 'react';
import { CustomTable, CustomTableBody, CustomTableCell, CustomTableContainer, CustomTableHead, CustomTableRow } from './TableComponents';

interface TableHeaders<T> {
    key: keyof T,
    label: string
}

interface TableComponentProps<T> {
    rows: T[],
    columns: TableHeaders<T>[],
    onRowClick: () => {}
}
const LTableComponent = <T,>({ rows, columns, onRowClick }: TableComponentProps<T>) => {

    return (
        <CustomTableContainer>
            <CustomTable>
                <CustomTableHead>
                    <CustomTableRow onClick={onRowClick}>
                        {columns.map((column) => (
                            <CustomTableCell key={column.key.toString()}>{column.label}</CustomTableCell>
                        ))}
                    </CustomTableRow>
                </CustomTableHead>
                <CustomTableBody>
                    {rows.map((row) => (
                        <CustomTableRow onClick={onRowClick}>
                            {columns.map((column) => (
                                <CustomTableCell key={column.key.toString()}>{row[column.key] as React.ReactNode}</CustomTableCell>
                            ))}
                        </CustomTableRow>
                    ))}
                </CustomTableBody>
            </CustomTable>
        </CustomTableContainer>
    )
}

export default LTableComponent