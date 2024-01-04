import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import About from "./pages/About";
import CharacterDetails from "./pages/CharacterDetails";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import ShinchanFandom from "./pages/ShinchanFandom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ShinchanFandom />} />
          <Route path="character/:name" element={<CharacterDetails />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

<Layout>
  <About />
</Layout>;

export default App;
