import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import LoginSignup from "./pages/LoginSignup";
import ErrorPage from "./pages/ErrorPage";
import Accaunt from "./pages/Accaunt";
import "./style/Template.css";
import "./style/GlobalCss.css";
import SidebarPrimary from "./components/SidebarPrimary/SidebarPrimary";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes></Routes>
        <div className="container-scroller">
          {/* Sidebar primary penal */}
          <SidebarPrimary />
          <div className="container-fluid">
            {/* Navbar Penal */}
            <Header />
            <div className="main-panel">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Product />} />
                <Route path="/accaunt" element={<Accaunt />} />
                <Route path="/login" element={<LoginSignup />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
