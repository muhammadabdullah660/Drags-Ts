import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crwnlogo } from "../../assests/crown.svg";
import "./navigationBar.scss";
import { UserContext } from "../../Contexts/userContext.jsx";
import { signOutAuthUser } from "../../utils/Firebase/firebase";
export default function NavigationBar() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);
  const signOutHandler = async () => {
    try {
      const response = await signOutAuthUser();
      console.log(response);
      setCurrentUser(null);
    } catch (error) {
      console.log(error);
    }
  };
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
            <span onClick={signOutHandler} className="nav-link">
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
