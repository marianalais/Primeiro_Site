import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Contato from "./Pages/Contato";
import Header from "./Files/Header";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/contato" element={<Contato />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
