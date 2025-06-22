import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import News from "@/pages/News";
import NewsSingle from "@/pages/NewsSingle";
import Booking from "@/pages/Booking";
import Tips from "@/pages/Tips";
import TipsCategory from "@/pages/TipsCategory";
import Contacts from "@/pages/Contacts";
import About from "@/pages/About";
import Profile from "@/pages/Profile";
import NotFound from "@/pages/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsSingle />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/tips/:category" element={<TipsCategory />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
