import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home/home.jsx";
import NavigationBar from "./Routes/NavigationBar/navigationBar.jsx";
import Authentication from "./Routes/Authentication/authentication.jsx";
import Checkout from "./Routes/Checkout/checkout.jsx";
import Shop from "./Routes/Shop/shop.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
