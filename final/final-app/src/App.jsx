import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Shops from "./component/Shops";
import Contact from "./component/Contact";
import Register from "./component/Register";

function App() {
  const [page, setPage] = useState("Shops");

  return (
    <>
      <Header setPage={setPage} />
      <main className="main" id="main">
        {(page == "Home" || page == "Gallery") && <Home />}
        {page == "Shops" && <Shops />}
        {page == "Contact" && <Contact />}
        {page == "Register" && <Register />}
      </main>
      <Footer />
    </>
  );
}

export default App;
