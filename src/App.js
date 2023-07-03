import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserProfileDocumentFromAuth,
} from "./utils/Firebase/firebase";
import { useDispatch } from "react-redux";
import Home from "./Routes/Home/home.jsx";
import NavigationBar from "./Routes/NavigationBar/navigationBar.jsx";
import Authentication from "./Routes/Authentication/authentication.jsx";
import Checkout from "./Routes/Checkout/checkout.jsx";
import Shop from "./Routes/Shop/shop.jsx";
import { setCurrentUser } from "./Store/User/userAction.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserProfileDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    }); // onAuthStateChangedListener is a function that takes a callback function as an argument
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
