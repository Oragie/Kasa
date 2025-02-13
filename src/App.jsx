import './App.css'

import Header from '../src/components/Header/Header.jsx'
import Footer from '../src/components/Footer/Footer.jsx'
import Error from '../src/pages/404/404.jsx'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<home />} />

            {/* <Route path="/about" element={<about />} />
            <Route path="/logement/:id" element={<logement />} /> */}

            <Route path="/*" element={<Error/>} />
        </Routes>
        <Footer />
    </Router>
    </>
  )
}

export default App

