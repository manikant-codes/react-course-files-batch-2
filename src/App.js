import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./layouts/Layout";
import Products from "./pages/Products";
import ProductsNew from "./pages/ProductsNew";
import ProductDetails from "./pages/ProductDetails";
import ProductsLayout from "./layouts/ProductsLayout";
import ContactNav from "./layouts/ContactNav";
import ProductsRoutes from "./routes/ProductsRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes location="/contact">
        <Route path="/contact" element={<ContactNav />} />
      </Routes>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="/products/*" element={<ProductsRoutes />} />
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
