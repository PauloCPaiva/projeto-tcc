// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./pages/home.jsx";
// import Cadastro from "./pages/cadastro.jsx";

// function App() {
//   return (
//     <Router>
//       <Routes>
//        <Route path="/" element={<Home/>} />
//        <Route path="/cadastro" element={<Cadastro/>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
//---------------------------------

// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Cadastro />} />
        {/* você pode adicionar mais rotas aqui */}
      </Routes>
    </>
  );
}

export default App;
