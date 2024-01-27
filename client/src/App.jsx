import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./views/LandingPage";
import { Products } from "./views/ProductsPage";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <Auth0Provider
    // Add your Auth0 configuration here
    >
      <QueryClientProvider client={queryClient}>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
      </QueryClientProvider>
    </Auth0Provider>
  );
}

export default App;
