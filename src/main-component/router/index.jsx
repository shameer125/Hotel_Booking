import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage'
import AboutPage from '../AboutPage/AboutPage';
import RoomPage from '../RoomPage';
import SearchResults from '../SearchResults/SearchResults';
import ServicePage from '../ServicePage/ServicePage';
import CartPage from '../CartPage';
import CheckoutPage from '../CheckoutPage';
import DestinationPage from '../DestinationPage/DestinationPage';
import OrderRecived from '../OrderRecived';
import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import ForgotPassword from '../ForgotPassword'
import PricingPage from '../PricingPage/PricingPage';
import ContactPage from '../ContactPage/ContactPage';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='home' element={<Homepage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='search-result' element={<SearchResults />} />
          <Route path='room' element={<RoomPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='order_received' element={<OrderRecived />} />
          <Route path='service' element={<ServicePage />} />
          <Route path='destination' element={<DestinationPage />} />
          <Route path='pricing' element={<PricingPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<SignUpPage />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
