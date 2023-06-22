import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crwnlogo } from "../../Assests/crown.svg";
import "./navigationBar.scss";
import CartIcon from "../../Components/CartIcon/cartIcon";
import CartDropDown from "../../Components/CartDropDown/cartDropDown";
import { UserContext } from "../../Contexts/userContext.jsx";
import { signOutAuthUser } from "../../utils/Firebase/firebase";
export default function NavigationBar() {
  const { currentUser } = useContext(UserContext);
  //console.log(currentUser);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crwnlogo className="logo" />
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
        <CartDropDown />
      </div>
      <Outlet />
    </Fragment>
  );
}
