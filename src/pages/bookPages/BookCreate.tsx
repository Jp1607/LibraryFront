import React from "react";
import { LTextField } from "../../components/inputs/text/LTextField"
import { LBox } from "../../components/layoutComponents/LBox"
import { BookDTOType, BookType } from "../../types/entities/book"
import { getBookById } from "../../api/books/GET";
import { LButton } from "../../components/buttons/LButton";
import { addBook } from "../../api/books/POST";
import { editBook } from "../../api/books/PUT";
import { useParams } from "react-router";

export const CreateBook = () => {
    const { bookId } = useParams();
    const [book, setBook] = React.useState<BookDTOType>({
        title: "",
        author: "",
        genre: ""
    });

    async function getBook(bookId: number) {
        const B = await getBookById(bookId)
        setBook(B);
    }

    React.useEffect(() => {
        if (bookId) {
            getBook(bookId)
        }
    }, []);

    const handleParameterChange = (key: keyof BookDTOType, value: any) => {
        let b = Object.assign({}, book);
        b[key] = value;
        setBook(b);
    }

    const handleSubmit = () => {
        if (bookId) addBook(book);
        const Book: BookType = {
            id: bookId as number,
            author: book.author,
            genre: book.genre,
            title: book.title
        }
        editBook(Book);
    }

    return (
        <LBox>
            <LTextField label="Título" value={book.title} onChange={(e) => handleParameterChange('title', e.target.value.toString())} />
            <LTextField label="Autor" value={book.author} onChange={(e) => handleParameterChange('author', e.target.value.toString())} />
            <LTextField label="Gênero" value={book.genre} onChange={(e) => handleParameterChange('genre', e.target.value.toString())} />
            <LButton label="Salvar" onClick={handleSubmit} />
        </LBox>
    )
}