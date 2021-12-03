
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import Shop from './Pages/Shop'
import NavBar from './Components/NavBar'
import About from './Pages/About';
import WorkShops from './Pages/WorkShops'
import Footer from './Components/Footer';
import SingleProdut from './Pages/SingleProdut';
import Events from './Pages/Events';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import Error from "./Pages/Error";


function App() {

  const user = false

  return (
    < >
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/product/:pid" element={<SingleProdut />} />

        <Route path="/about" element={<About />} />

        <Route path="/workshops" element={<WorkShops />} />

        <Route path="/events" element={<Events />} />

        <Route path="/login" element={<Login />} >

        </Route>

        <Route path="/register" element={<Register />} >

        </Route>

        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<Error />}>

        </Route>

      </Routes>

      <Footer />

    </>
  );
}

export default App;
