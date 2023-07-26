import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./Routes/Home/home";
import NavigationBar from "./Routes/NavigationBar/navigationBar";
import Authentication from "./Routes/Authentication/authentication";
import Checkout from "./Routes/Checkout/checkout";
import Shop from "./Routes/Shop/shop";
import { checkUserSession } from "./Store/User/userAction";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);
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
