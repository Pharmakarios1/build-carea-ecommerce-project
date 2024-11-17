import "./App.scss";
import About from "./Pages/About/About";
import Categories from "./Pages/Categories/Categories";
import Contact from "./Pages/Contact/Contact";
import Ads from "./Sections/ads/Ads";
import Footer from "./Sections/Footer/Footer";
import Hero from "./Sections/hero/Hero";
import Nav from "./Sections/Navigation/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Ads />
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */
          <Route path="/categories" element={<Categories />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
