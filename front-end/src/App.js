import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Cart from "./components/Cart";
import CartDrawer from "./components/CartDrawer";
import Home from "./components/Home";
import KeyboardDetails from "./components/KeyboardDetails";
import KeyboardEditForm from "./components/KeyboardEditForm";
import KeyboardNewForm from "./components/KeyboardNewForm";
import Keyboards from "./components/Keyboards";
import NavigationBar from "./components/NavigationBar";

function App() {
  const [ cart, setCart ] = useState([]);
  const [ open, setOpen ] = useState(false);

  const getCartItems = (cartItems, open) => {
    setCart([...cart, cartItems]);

    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }

    setOpen(open)
  }

  const toggleDrawer = (open) => (event) => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }
    setOpen(open)
  }
  // const toggleCartDrawer = (open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //       return;
  //   }

  //   setOpen(open);
  // };


  return (
    <Router>
      <NavigationBar cart={cart} toggleDrawer={toggleDrawer}/>
      <CartDrawer open={open} toggleDrawer={toggleDrawer} cart={cart}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/keyboards" element={<Keyboards toggleCartDrawer={null} getCartItems={getCartItems} />} />
        <Route path="/keyboards/:id" element={<KeyboardDetails />} />
        <Route path="/keyboards/new" element={<KeyboardNewForm />} />
        <Route path="/keyboards/:id/edit" element={<KeyboardEditForm />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;
