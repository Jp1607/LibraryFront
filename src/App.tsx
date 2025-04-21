import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Routes';
import { LSideBar } from './components/layoutComponents/LSideBar';
import { LBox } from './components/layoutComponents/LBox';

const App = () => {
  return (
    <BrowserRouter>
      <LBox display={"flex"} height={"100vh"} width={"100vw"}>
        <LSideBar />
        <LBox flexGrow={1}>
          <Router />
        </LBox>
      </LBox>
    </BrowserRouter>
  );
}

export default App;