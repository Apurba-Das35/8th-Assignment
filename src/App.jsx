import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import TrendingApps from './Component/TrendingApps/TrendingApps';
import AppDetails from './Component/AppDetails/AppDetails';

function App() {
  return (
    <Router>
      {/* Navbar show all page */}
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <TrendingApps />
            </>
          }
        />

        {/* All Apps Page */}
        <Route path="/apps" element={<TrendingApps />} />

        {/* Single App Details Page */}
        <Route path="/app/:id" element={<AppDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
