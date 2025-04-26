export type BookType = {
    id?: number,
    title: string,
    author: string,
    genre: string,
    patrionialId: string,
    shelf?: number,
    isAvailable?: boolean,
    isExcluded?: boolean
}

export type BookDTOType = {
    title: string,
    author: string,
    genre: string,
    patrionialId: string,
    shelf: string
}