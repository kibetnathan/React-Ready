import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Docs from '../pages/Docs'
import Navbar from '../components/Navbar'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/docs" element={ <Docs/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
