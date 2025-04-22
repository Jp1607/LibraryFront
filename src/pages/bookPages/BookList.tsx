import React from "react";
import { getBookList } from "../../api/books/GET";
import { LButton } from "../../components/buttons/LButton";
import LTable from "../../components/tables/LTable";
import { TableHeaders } from "../../types/componentsTypes/tableTypes";
import { LBox } from "../../components/layoutComponents/LBox";
import { LLinkButton } from "../../components/buttons/LLinkButton";
import { BookType } from "../../types/entities/book";

const BookTableHeaders: TableHeaders<BookType>[] = [
    { key: 'id', label: "Id" },
    { key: 'title', label: "Título" },
    { key: 'author', label: "Autor" },
    { key: 'genre', label: "Gênero" }
]

const BookPage = () => {
    const [booklist, setBookList] = React.useState<BookType[]>([]);
    const [selectedBook, setSelectedBook] = React.useState<BookType>({ id: 0, author: "", genre: "", title: "" });
    const [open, setOpen] = React.useState<Boolean>(false);

    React.useEffect(() => {
        getBookList().then((response) => { setBookList(response) });
    }, []);

    const HandleRowClick = (book: BookType) => {
        setSelectedBook(book);
    }

    // const HandleDelete = () => {

    // }

    return (
        <LBox>
            <LLinkButton label="Novo" path="/books/new" />
            <LLinkButton label="Editar" path={`/books/new/:${selectedBook.id}`} />
            {/* <LButton label="Excluir" onClick={() => HandleDelete} /> */}
            <LLinkButton label="Emprestar" path={`/books/borrow/:${selectedBook.id}`} />
            <LTable<BookType> rows={booklist} onRowClick={HandleRowClick} columns={BookTableHeaders} />
        </LBox>
    )
}

export default BookPage;