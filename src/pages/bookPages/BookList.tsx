import React from "react";
import { getBookByTitle, getBookList } from "../../api/books/GET";
import LTable from "../../components/tables/LTable";
import { TableHeaders } from "../../types/componentsTypes/tableTypes";
import { LBox } from "../../components/layoutComponents/LBox";
import { LLinkButton } from "../../components/buttons/LLinkButton";
import { BookType } from "../../types/entities/book";
import { LTextField } from "../../components/inputs/text/LTextField";
import { LButton } from "../../components/buttons/LButton";

const BookTableHeaders: TableHeaders<BookType>[] = [
    { key: 'id', label: "Id" },
    { key: 'title', label: "Título" },
    { key: 'author', label: "Autor" },
    { key: 'genre', label: "Gênero" }
]

const BookPage = () => {
    const [booklist, setBookList] = React.useState<BookType[]>([]);
    const [selectedBook, setSelectedBook] = React.useState<BookType>({ id: 0, author: "", genre: "", title: "", patrionialId: "", shelf: 0 });
    const [toSearchString, setToSearchString] = React.useState<string>("");

    React.useEffect(() => {
        getBookList().then((response) => { setBookList(response); setBookList(response) });
    }, []);

    const HandleRowClick = (book: BookType) => {
        setSelectedBook(book);
    }

    const handleToSearchStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setToSearchString(e.target.value.toString());
    }

    const handleSearch = () => {
        getBookByTitle(toSearchString).then((r) => setBookList(r));
    }

    return (
        <LBox>
            <LBox display={'flex'} width={'100%'} height={'6vh'} marginBottom={'1%'} sx={{ '& > *': { marginRight: '2%' }, '& > .MuiButtonBase-root': { width: '8%' } }}>
                <LLinkButton label="Novo" path="/books/new" />
                <LLinkButton label="Editar" path={`/books/new/${selectedBook.id}`} />
                {/* <LButton label="Excluir" onClick={() => HandleDelete} /> */}
                <LLinkButton label="Emprestar" path={`/books/borrow/${selectedBook.id}`} />
                <LTextField value={toSearchString} label="Buscar" onChange={handleToSearchStringChange} />
                <LButton label="Pesquisar" onClick={handleSearch} />
            </LBox>
            <LTable<BookType> rows={booklist} onRowClick={HandleRowClick} columns={BookTableHeaders} />
        </LBox>
    )
}

export default BookPage;