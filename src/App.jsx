import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Projects from './pages/projects.jsx';
import About from './pages/about.jsx';
import LottieAnimation from './pages/fileloads.jsx'; // Import the Lottie animation component

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);  // State to track loading

  useEffect(() => {
    // Simulate loading time or data fetching
    setTimeout(() => {
      setLoading(false);  // Set loading to false after some time
    }, 3000);  // Example: 3 seconds of loading
  }, []);

  return (
    <Router>
      <div>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', backgroundColor:'#252422', alignItems: 'center', height: '100vh' }}>
            <LottieAnimation />  {/* Display Lottie animation while loading */}
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
