import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigationBar.scss";
import CartIcon from "../../Components/CartIcon/cartIcon";
import CartDropDown from "../../Components/CartDropDown/cartDropDown";
import { UserContext } from "../../Contexts/userContext.jsx";
import { CartContext } from "../../Contexts/cartcontext";
import { signOutAuthUser } from "../../utils/Firebase/firebase";
export default function NavigationBar() {
  const { currentUser } = useContext(UserContext);
  //console.log(currentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src="/Assests/crown.svg" alt="crown" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          {currentUser ? ( // if currentUser is not null
            <span onClick={signOutAuthUser} className="nav-link">
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
}
