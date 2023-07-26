import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { selectCurrentUser } from "../../Store/User/userSelector";
import { useSelector, useDispatch } from "react-redux";
import {
  NavigationBarContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigationBar-style";
import CartIcon from "../../Components/CartIcon/cartIcon";
import CartDropDown from "../../Components/CartDropDown/cartDropDown";
import { signOutStart } from "../../Store/User/userAction";
import { selectIsCartOpen } from "../../Store/Cart/cartSelector";
export default function NavigationBar() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const onClickSignOut = () => {
    return dispatch(signOutStart());
  };
  return (
    <Fragment>
      <NavigationBarContainer>
        <LogoContainer to="/">
          <img src="/Assests/crown.svg" alt="Crown" className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? ( // if currentUser is not null
            <NavLink to="/" onClick={onClickSignOut} as="span">
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
