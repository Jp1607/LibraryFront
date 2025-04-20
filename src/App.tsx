import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Routes'
import './App.css'
import { LSideBar } from './components/layoutComponents/LSideBar'

function App() {

  return (
    <>
      <BrowserRouter>
        <LSideBar />
        <Router />
      </BrowserRouter>
    </>
  )
}
export default App
