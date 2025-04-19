import { BrowserRouter } from 'react-router-dom'
import './App.css'
import BookPage from './pages/bookPages/BookList'
import { StudentRegister } from './pages/student/StudentRegister'

function App() {
  return (
    <>
      <BrowserRouter>
        <StudentRegister />
      </BrowserRouter>
    </>
  )
}

export default App
