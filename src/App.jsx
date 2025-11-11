import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Docs from '../pages/Docs'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DocsIntro from '../components/DocsIntro'
import Components from '../pages/Components'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/components" element={<Components/>}/>
      <Route path="/docs" element={ <Docs/>}>
      <Route path='intro' element={ < DocsIntro/> }/>
      </Route>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
