import React, { useEffect } from "react";
import { LTextField } from "../../components/inputs/text/LTextField"
import { LBox } from "../../components/layoutComponents/LBox"
import { BookType } from "../../types/entities/book";
import LTable from "../../components/tables/LTable";
import { TableHeaders } from "../../types/componentsTypes/tableTypes";
import { StudentType } from "../../types/entities/student";
import { getStudentsList } from "../../api/students/students_GET";
import { LButton } from "../../components/buttons/LButton";
import { borrowBook } from "../../api/bookFlow/bookFlow_POST";
import { useParams } from "react-router-dom";
import { getBookById } from "../../api/books/GET";
import { ApiData } from "../../types/entities/api";

export const BookBorrow = () => {
    const { bookId } = useParams();
    const [page, setPage] = React.useState<number>(0);
    const [book, setBook] = React.useState<BookType>({
        id: undefined,
        author: "",
        genre: "",
        title: "",
        patrionialId: "",
        shelf: undefined,
        isAvailable: undefined,
        isExcluded: undefined
    })
    const [students, setStudents] = React.useState<ApiData<StudentType>>({
        rows: [],
        pagination: {
            page: 0,
            totalDataCount: 0
        }
    })
    const [student, setStudent] = React.useState<StudentType>({
        name: "",
        classroom: undefined,
        contact: "",
        surname: "",
        address: ""
    })

    const StudentsTableHeaders: TableHeaders<StudentType>[] = [
        { key: "name", label: "Nome" },
        { key: "surname", label: "Sobrenome" },
        { key: "classroom", label: "Turma" }
    ]

    async function getStudents(page?: number) {
        const sList = await getStudentsList(page);
        setStudents(sList);
    }

    const getBook = () => {
        getBookById(parseInt(bookId as string)).then((response) => { setBook(response) }).catch(() => { })
    }

    useEffect(() => {
        if (bookId) {
            getBook()
            getStudents();
        }
    }, [bookId])

    useEffect(() => {
        if (bookId) {
            getBook()
            getStudents(page);
        }
    }, [page])

    const HandleTableClick = (student: StudentType) => {
        setStudent(student);
    }

    const HandleBorrow = async () => {
        await borrowBook(book, student)
    }

    const HandlePageChange = (_event: any, newPage: number) => {
        setPage(newPage);
    }

    return (
        <LBox>
            <LTextField readonly={true} label="Título" value={book.title || ''} />
            <LTextField readonly={true} label="Autor" value={book.author || ''} />
            <LTextField readonly={true} label="Gênero" value={book.genre || ''} />
            <LTextField readonly={true} label="Aluno" value={student.name + " " + student.surname || ''} />
            <LTextField readonly={true} label="Turma" value={student.classroom || ''} />
            <LButton label="Emprestar" onClick={() => HandleBorrow()} />
            <LTable columns={StudentsTableHeaders} handlePageChange={HandlePageChange} rows={students} onRowClick={(s) => HandleTableClick(s)} />
        </LBox>
    )
}