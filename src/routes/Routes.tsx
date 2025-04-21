import { Routes, Route } from 'react-router-dom';
import BookPage from '../pages/bookPages/BookList';
import StudentPage from '../pages/student/StudentList';
import { StudentRegister } from '../pages/student/StudentRegister';
import { CreateBook } from '../pages/bookPages/BookCreate';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<BookPage />} />
            <Route path="/books" element={<BookPage />} />
            <Route path="/books/new" element={<CreateBook />} />
            <Route path="/books/new/:bookId" element={<CreateBook />} />
            <Route path="/students" element={<StudentPage />} />
            <Route path="/students/new" element={<StudentRegister />} />
            <Route path="/students/new/:studentId" element={<StudentRegister />} />
        </Routes>
    );
};

export default Router;