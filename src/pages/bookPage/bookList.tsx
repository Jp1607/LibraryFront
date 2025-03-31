import React from "react";
import { getBookList } from "../../api/books/GET";
import { LButton } from "../../components/buttons/LButton";
import LTable from "../../components/tables/LTable";
import { TableHeaders } from "../../types/componentsTypes/tableTypes";
import { Book } from "../../types/entities/book";

const BookTableHeaders: TableHeaders<Book>[] = [
    { key: 'id', label: "id" },
    { key: 'title', label: "Título" },
    { key: 'author', label: "Autor" },
    { key: 'genre', label: "Gênero" }
]

const BookPage = () => {
    const [booklist, setBookList] = React.useState<Book[]>([]);
    const [selectedBook, setSelectedBook] = React.useState<Book>({ id: 0, author: "", genre: "", title: "" });

    React.useEffect(() => {
        getBookList().then((response) => { setBookList(response) });
    }, []);

    const HandleRowClick = (book: Book) => {
        setSelectedBook(book);
    }
    return (
        <>
            <LTable<Book> rows={booklist} onRowClick={HandleRowClick} columns={BookTableHeaders} />
        </>
    )
}

export default BookPage;