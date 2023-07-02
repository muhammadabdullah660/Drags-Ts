import { Outlet } from "react-router-dom";
import CategoryMenu from "../../Components/CategoryMenu/categoryMenu";
function Home() {
  return (
    <div>
      <CategoryMenu />
      <Outlet />
    </div>
  );
}

export default Home;
