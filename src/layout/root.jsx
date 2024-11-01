import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-light min-h-screen dark:bg-black">
      <Navbar />
      <main className="w-screen min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
