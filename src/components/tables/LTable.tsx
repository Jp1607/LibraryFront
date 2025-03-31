import React from 'react';
import { CustomTable, CustomTableBody, CustomTableCell, CustomTableContainer, CustomTableHead, CustomTableRow } from './TableComponents';
import { TableComponentProps } from '../../types/componentsTypes/tableTypes';

const LTable = <T,>({ rows, columns, onRowClick }: TableComponentProps<T>) => {

    return (
        <CustomTableContainer>
            <CustomTable>
                <CustomTableHead>
                    <CustomTableRow>
                        {columns.map((column) => (
                            <CustomTableCell key={column.key.toString()}>{column.label}</CustomTableCell>
                        ))}
                    </CustomTableRow>
                </CustomTableHead>
                <CustomTableBody>
                    {rows.map((row, rowIndex) => (
                        <CustomTableRow
                            onClick={() => onRowClick(row)}
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
                    ))}
                </CustomTableBody>
            </CustomTable>
        </CustomTableContainer>
    )
}

export default LTable