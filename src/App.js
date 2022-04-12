import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Gallery from "./pages/Gallery/Gallery";
import Header from "./parts/Header/Header";
import Footer from "./parts/Footer/Footer";
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
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
