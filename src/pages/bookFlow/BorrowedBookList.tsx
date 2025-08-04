import React, { useEffect } from "react"
import { BookFlowTableDisplayType, BookFlowType } from "../../api/bookFlow/bookFlow.types"
import LTable from "../../components/tables/LTable"
import { TableHeaders } from "../../types/componentsTypes/tableTypes"
import { getBorrowedBookById, getBorrowedBookList } from "../../api/bookFlow/bookFlow_GET"
import { LButton } from "../../components/buttons/LButton"
import { LBox } from "../../components/layoutComponents/LBox"
import { returnBook } from "../../api/bookFlow/bookFlow_POST"
import { ApiData } from "../../types/entities/api"

export const BorrowedBookList = () => {
    // const [bookFlowList, setBookFlowList] = React.useState<BookFlowType[]>([])
    const [page, setPage] = React.useState<number>(0);
    const [bookFlow, setBookFlow] = React.useState<BookFlowType>(
        {
            id: undefined,
            book: {
                id: undefined,
                title: "",
                author: "",
                genre: "",
                patrionialId: "",
                shelf: 0,
                isAvailable: true,
                isExcluded: false
            },
            student: {
                id: undefined,
                name: "",
                surname: "",
                contact: "",
                address: "",
                classroom: 0
            },
            user: {
                id: undefined,
                name: "",
                password: "",
                active: undefined
            },
            borrowDate: ""
        }
    )

    const [bookFlowTableDisplayList, setBookFlowTableDisplayList] = React.useState<ApiData<BookFlowTableDisplayType>>({
        rows: [],
        pagination: {
            page: 0,
            totalDataCount: 0
        }
    });
    const BorrowedBookTableHeader: TableHeaders<BookFlowTableDisplayType>[] = [
        { key: "id", label: "Id" },
        { key: "book", label: "Livro" },
        { key: "student", label: "Aluno" },
        { key: "date", label: "Data de empréstimo" }
    ]

    const getList = (page?: number) => {
        getBorrowedBookList(page).then((response) => setBookFlowTableDisplayList(response))
    }

    useEffect(() => {
        getList()
    }, [])

    useEffect(() => {
        getList(page)
    }, [page])

    const HandleRowClick = (book: BookFlowTableDisplayType) => {
        getBorrowedBookById(book.id as number).then((response) => setBookFlow(response));
    }

    const HandleReturn = () => {
        returnBook(bookFlow.book.id as number, bookFlow.student.id as number)
    }

    const HandlePageChange = (_event: any, newPage: number) => {
        setPage(newPage);
    }

    return (
        <LBox>
            <LButton label="Devolver" onClick={() => HandleReturn()} />
            <LTable<BookFlowTableDisplayType> columns={BorrowedBookTableHeader} handlePageChange={HandlePageChange} rows={bookFlowTableDisplayList} onRowClick={(book) => HandleRowClick(book)} />
        </LBox>

    )
}