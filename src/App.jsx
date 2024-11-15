// src/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Projects from './pages/projects.jsx';
import About from './pages/about.jsx';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
       
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
