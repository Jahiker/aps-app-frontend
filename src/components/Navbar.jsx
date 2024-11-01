import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="bg-transparent w-full flex justify-center items-center p-4 fixed top-0 left-0 right-0 z-10">
      <div className="flex gap-3 w-max py-4 px-8 card-base">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
};
