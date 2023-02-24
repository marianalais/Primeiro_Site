
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Header from './Header';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default RoutesApp;