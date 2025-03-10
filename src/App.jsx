import Home from "./pages/home";
import Logement from "./pages/logement";
import About from "./pages/about";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./pages/404";
import "./styles/global.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
