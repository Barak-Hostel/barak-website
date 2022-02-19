import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Header from "./parts/Header/Header";
import Footer from "./parts/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
