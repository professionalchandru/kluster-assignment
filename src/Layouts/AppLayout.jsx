import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const AppLayout = () => {
  return (
    <div className="h-screen w-full">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
