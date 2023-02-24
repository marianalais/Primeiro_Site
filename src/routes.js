import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Header from "./Header";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/sobre" element={<Home />}></Route>
        <Route path="/contato" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
