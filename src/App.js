import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <a
  id="btnWhatsapp"
  style={{
    position: "fixed",
    width: "50px",
    height: "50px",
    right: "25px",
    bottom: "75px",
  }}
  aria-label="Chat on WhatsApp"
  href="https://wa.me/1111111111"
>
  <img
    alt="Chat on WhatsApp"
    style={{ height: "100%", width: "100%" }}
    src="/images/whatsapp-icon.svg"
  />
</a>; */
}
