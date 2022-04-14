import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Gallery from "./pages/Gallery/Gallery";
import Header from "./parts/Header/Header";
import Footer from "./parts/Footer/Footer";
import Facilities from "./pages/Facilities/Facilities";
import SlotBooking from "./pages/SlotBooking/SlotBooking";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/facilities" element={<Facilities />} />
                    <Route path="/slot-booking" element={<SlotBooking />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
