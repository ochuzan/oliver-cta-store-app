import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import KeyboardDetails from "./components/KeyboardDetails";
import KeyboardEditForm from "./components/KeyboardEditForm";
import KeyboardNewForm from "./components/KeyboardNewForm";
import Keyboards from "./components/Keyboards";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/keyboards" element={<Keyboards />} />
        <Route path="/keyboards/:id" element={<KeyboardDetails />} />
        <Route path="/keyboards/new" element={<KeyboardNewForm />} />
        <Route path="/keyboards/:id/edit" element={<KeyboardEditForm />} />
      </Routes>
    </Router>
  );
}

export default App;
