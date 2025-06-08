import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { HashRouter as Router, Routes, Route, Link  } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Resume from "./Pages/Resume";
import Footer from "./Pages/Footer";

import "./App.css";


function App() {
  return (
    <div>
      <nav style={{ padding: "20px", background: "rgba(13, 5, 26, 0.84)" }}>
        <Link to="/" style={{ margin: "20px" }}>Home</Link>
        <Link to="/about" style={{ margin: "20px" }}>About</Link>
        <Link to="/projects" style={{ margin: "20px" }}>Projects</Link>
        <Link to="/contact" style={{ margin: "20px" }}>Contact</Link>
        <Link to="/Resume" style={{ margin: "20px" }}>Resume</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;

// export default function App() {
//   return <h1>Hello, Portfolio!</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Router basename="/Prachi-portfolio">
//         <div>
//           <nav style={{ padding: "20px", background: "rgba(13, 5, 26, 0.84)" }}>
//             <Link to="/" style={{ margin: "20px" }}>
//               Home
//             </Link>
//             <Link to="/about" style={{ margin: "20px" }}>
//               About
//             </Link>
//             <Link to="/projects" style={{ margin: "20px" }}>
//               Projects
//             </Link>
//             <Link to="/contact" style={{ margin: "20px" }}>
//               Contact
//             </Link>
//             <Link to="/Resume" style={{ margin: "20px" }}>
//               Resume
//             </Link>
//           </nav>
//           <Routes>
//             <Route path="/" element={<Home />} className="App">
//             </Route>
//             <Route path="/about" element={<About />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/Resume" element={<Resume />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//           <Footer />
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <main>
//         <About />
//         <Projects />
//         <Resume />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }
