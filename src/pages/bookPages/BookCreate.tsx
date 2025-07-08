import React from "react";
import { LTextField } from "../../components/inputs/text/LTextField"
import { LBox } from "../../components/layoutComponents/LBox"
import { BookType } from "../../types/entities/book"
import { getBookById } from "../../api/books/GET";
import { LButton } from "../../components/buttons/LButton";
import { addBook } from "../../api/books/POST";
import { editBook } from "../../api/books/PUT";
import { useParams } from "react-router";

export const CreateBook = () => {
    const { bookId } = useParams();
    // const [bookDTO, setBookDTO] = React.useState<BookDTOType>({
    //     title: "",
    //     author: "",
    //     genre: "",
    //     patrionialId: "",
    //     shelf: ""
    // });
    const [book, setBook] = React.useState<BookType>({
        id: undefined,
        title: "",
        author: "",
        genre: "",
        patrionialId: "",
        shelf: undefined,
        isAvailable: undefined,
        isExcluded: undefined
    });

    async function getBook(bookId: number) {
        const B = await getBookById(bookId)
        setBook(B);
    }

    React.useEffect(() => {
        if (bookId) {
            getBook(parseInt(bookId))
        }
    }, []);

    const handleParameterChange = <K extends keyof BookType>(key: K, value: BookType[K]) => {
        let b = Object.assign({}, book);
        b[key] = value;
        setBook(b);
    }

    const handleSubmit = async () => {
        if (!bookId) {
            await addBook(book)
        } else {
            const Book: BookType = {
                id: parseInt(bookId),
                author: book.author,
                genre: book.genre,
                title: book.title,
                patrionialId: book.patrionialId,
                shelf: book.shelf
            }
            await editBook(Book)

        }
    }

    return (
        <LBox>
            <LTextField label="Título" value={book.title} onChange={(e) => handleParameterChange('title', e.target.value.toString())} />
            <LTextField label="Autor" value={book.author} onChange={(e) => handleParameterChange('author', e.target.value.toString())} />
            <LTextField label="Gênero" value={book.genre} onChange={(e) => handleParameterChange('genre', e.target.value.toString())} />
            <LButton label="Salvar" onClick={() => handleSubmit()} />
        </LBox>
    )
}