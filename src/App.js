import React from "react";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="app-content">
        <h2>Bem-vindo ao Catálogo Digital Lenovo!</h2>
        <p>Use os links no menu para navegar.</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;
