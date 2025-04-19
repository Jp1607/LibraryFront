import { Route, Routes } from "react-router"
import BookPage from "../pages/bookPages/BookList"
import StudentPage from "../pages/student/StudentList"

export const Router = () => {

    return (
        <Routes>
            <Route path="/books" element={<BookPage />} />
            <Route path="/students" element={<StudentPage />} />
        </Routes>
    )
}