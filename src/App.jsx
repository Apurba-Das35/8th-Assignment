import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Component/Header/Header'
import Navbar from './Component/Navbar/Navbar'
import TrendingApps from './Component/TrendingApps/TrendingApps'


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

        {/* Apps Page */}
        <Route path="/apps" element={<TrendingApps />} />
      </Routes>
    </Router>
  )
}

export default App
