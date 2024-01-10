import "./App.css";
// import Registration from "./features/Registration";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout"; // outlet
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Mahasiswa from "./components/Mahasiswa";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="home" element={<Home />} />
          <Route exact path="mahasiswa" element={<Mahasiswa />} />
          <Route exact path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
