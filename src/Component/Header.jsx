import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-3xl  font-bold text-purple-600 ">
      <NavLink className="mr-5" to="/">
        Home{" "}
      </NavLink>
      <NavLink to="/login">Login </NavLink>
    </div>
  );
};

export default Header;
