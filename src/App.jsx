import Contato from './Pages/Contato';
import Home from './Pages/Home'
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Sobre from './Pages/Sobre'
import { GlobalStyle } from './styles/GlobalStyled'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/sobre' element={<Sobre />}/>
          <Route path='/contato' element={<Contato />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
