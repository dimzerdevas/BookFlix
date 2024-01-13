import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./components/LandingPage";
import { Products } from "./components/ProductsPage";

function App() {
  return (
    <Auth0Provider
    // Add your Auth0 configuration here
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
}

export default App;
