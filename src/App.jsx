import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Favorites from './pages/Favorites';
import Stats from './pages/Stats';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import EditProfile from './components/EditProfile';
import Footer from './components/Footer';




function App() {
  return (
    <>
    {/* este primer div es para mantener el footer abajo siempre */}
    <div className="app-wrapper d-flex flex-column min-vh-100"> 
      <Navbar />
          <div className="container py-4 flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/edit" element={<EditProfile />} />

              

            </Routes>
          </div>
        <Footer />
    </div>
    </>
  );
}

export default App;
