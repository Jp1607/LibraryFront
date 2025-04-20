import { Route, Routes } from "react-router"
import BookPage from "../pages/bookPages/BookList"
import StudentPage from "../pages/student/StudentList"
import { StudentRegister } from "../pages/student/StudentRegister"

export const Router = () => {

    return (
        <Routes>
            <Route index path="/" element={<BookPage />} />
            <Route path="/students" element={<StudentPage />} />
            <Route path="/students/new" element={<StudentRegister />} />
            <Route path="/students/new/:studentId" element={<StudentRegister />} />
        </Routes>
    )
}