import Home from "./pages/Home/Home";
// import Login from "./pages/Auth/Login";
import Login2 from "./pages/Auth/Login2";
import Gallery from "./pages/Gallery/Gallery";
import Header from "./parts/Header/Header";
import Footer from "./parts/Footer/Footer";
import Facilities from "./pages/Facilities/Facilities";
import SlotBooking from "./pages/SlotBooking/SlotBooking";
import Contact from "./pages/Contact/Contact";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login2 />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/facilities" element={<Facilities />} />
                    <Route path="/slot-booking" element={<SlotBooking />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
