import "./style/GlobalCss.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import LoginSignup from "./pages/LoginSignup";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Accaunt from "./pages/Accaunt";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header Area Start */}
        <Header />
        {/* Header Area End */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/accaunt" element={<Accaunt />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
