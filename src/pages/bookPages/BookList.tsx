import React from "react";
import { getBookList } from "../../api/books/GET";
import { LButton } from "../../components/buttons/LButton";
import LTable from "../../components/tables/LTable";
import { TableHeaders } from "../../types/componentsTypes/tableTypes";
import { Book } from "../../types/entities/book";
import { LBox } from "../../components/layoutComponents/LBox";

const BookTableHeaders: TableHeaders<Book>[] = [
    { key: 'id', label: "id" },
    { key: 'title', label: "Título" },
    { key: 'author', label: "Autor" },
    { key: 'genre', label: "Gênero" }
]

const BookPage = () => {
    const [booklist, setBookList] = React.useState<Book[]>([]);
    const [selectedBook, setSelectedBook] = React.useState<Book>({ id: 0, author: "", genre: "", title: "" });
    const [open, setOpen] = React.useState<Boolean>(false);

    React.useEffect(() => {
        getBookList().then((response) => { setBookList(response) });
    }, []);

    const HandleRowClick = (book: Book) => {
        setSelectedBook(book);
    }

    const HandleSave = () => {

    }
    const HandleEdit = () => {

    }
    const HandleDelete = () => {

    }
    const HandleBorrow = () => {

    }

    return (
        <LBox>

            <LButton label="Novo" onClick={ } />
            <LButton label="Editar" onClick={ } />
            <LButton label="Excluir" onClick={ } />
            <LButton label="Emprestar" onClick={ } />
            <LTable<Book> rows={booklist} onRowClick={HandleRowClick} columns={BookTableHeaders} />
        </LBox>
    )
}

export default BookPage;