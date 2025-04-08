import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const [currentPage, setPage] = useState("Home");
  useEffect(() => {
    if (location.pathname === "/") {
      setPage("Home");
    } else if (location.pathname === "/projects") {
      setPage("Projects");
    } else if (location.pathname === "/resume") {
      setPage("Resume");
    }
    document.title = `${currentPage} | Nic Blaize - Portfolio)`;
  });
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
