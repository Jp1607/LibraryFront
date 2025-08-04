import React from "react";
import { getBookByTitle, getBookData } from "../../api/books/GET";
import { ApiData } from "../../types/entities/api";
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
    const [page, setPage] = React.useState<number>(0);
    const [bookData, setbookData] = React.useState<ApiData<BookType>>({ rows: [], pagination: { page: 0, totalDataCount: 0 } });
    const [selectedBook, setSelectedBook] = React.useState<BookType>({ id: 0, author: "", genre: "", title: "", patrionialId: "", shelf: 0 });
    const [toSearchString, setToSearchString] = React.useState<string>("");

    React.useEffect(() => {
        getBookData().then((response) => { setbookData(response) });
    }, []);

    React.useEffect(() => {
        getBookData(page).then((response) => { setbookData(response) });
    }, [page]);

    const HandleRowClick = (book: BookType) => {
        setSelectedBook(book);
    }

    const handleToSearchStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setToSearchString(e.target.value.toString());
    }

    const handleSearch = () => {
        getBookByTitle(toSearchString).then((r) => setbookData(r));
    }

    const HandlePageChange = (_event: any, newPage: number) => {
        setPage(newPage);
    }

    return (
        <LBox >
            <LBox display={'flex'} width={'100%'} height={'6vh'} marginBottom={'1%'} sx={{ '& > *': { marginRight: '2%' }, '& > .MuiButtonBase-root': { width: '8%' } }}>
                <LLinkButton label="Novo" path="/books/new" />
                <LLinkButton label="Editar" path={`/books/new/${selectedBook.id}`} />
                {/* <LButton label="Excluir" onClick={() => HandleDelete} /> */}
                <LLinkButton label="Emprestar" path={`/books/borrow/${selectedBook.id}`} />
                <LTextField value={toSearchString} label="Buscar" onChange={handleToSearchStringChange} />
                <LButton label="Pesquisar" onClick={handleSearch} />
            </LBox>
            <LTable<BookType> rows={bookData} handlePageChange={HandlePageChange} onRowClick={HandleRowClick} columns={BookTableHeaders} />
        </LBox>
    )
}

export default BookPage;