import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { selectCurrentUser } from "./../../Store/User/userSelector";
import { useSelector } from "react-redux";
import {
  NavigationBarContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigationBar-style.jsx";
import CartIcon from "../../Components/CartIcon/cartIcon";
import CartDropDown from "../../Components/CartDropDown/cartDropDown";
import { CartContext } from "../../Contexts/cartcontext";
import { signOutAuthUser } from "../../utils/Firebase/firebase";
export default function NavigationBar() {
  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationBarContainer>
        <LogoContainer to="/">
          <img src="/Assests/crown.svg" alt="Crown" className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? ( // if currentUser is not null
            <NavLink onClick={signOutAuthUser} as="span">
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropDown />}
      </NavigationBarContainer>
      <Outlet />
    </Fragment>
  );
}
