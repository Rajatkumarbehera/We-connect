import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import { Routes, Route } from 'react-router-dom';
import LoginRegister from "./pages/login-register/LoginRegister";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="feed" element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="/login" element={<LoginRegister />} />
                <Route path="/register" element={<LoginRegister />} />
            </Routes>
        </div>
    );
}

export default App;
