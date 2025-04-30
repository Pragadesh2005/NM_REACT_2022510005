import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Login from './components/common/Auth/Login';
import Signup from './components/common/Auth/Signup';
import ForgotPassword from './components/common/Auth/ForgotPassword';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/FAQ';
import TermsAndConditions from './pages/TermsAndCondition';
import Checkout from './pages/Checkout';
import Products from './pages/Products';
import ProtectedRoute from './components/common/Auth/ProtectedRoute';
import Cart from './pages/Cart';
import './App.css';

const App = () => { 
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Login />} />
              <Route path="/products" element={<Products />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/Home" element={<Home />} />

              {/* Protected Routes */}
              <Route path="/checkout" element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;