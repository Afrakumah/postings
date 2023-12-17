import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import NewPost from "../pages/NewPost";

export default function MainLayout() {

  return (
    <div>
      <Header />
      {/* <NewPost /> */}

      <Outlet />
    </div>
  );
}
