import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/Home/Home";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Prof from "./pages/trainer/Prof";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="plans" element={<Plans />} />
          <Route path="prof" element={<Prof />} />
          <Route path="notFound" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
