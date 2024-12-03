import { Link, NavLink } from "react-router-dom";
import logo from "../assets/more/logo1.png";
import navbarImg from "../assets/more/15.jpg";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          // className={({ isActive }) =>
          //   isActive ? 'font-bold bg-[#e3b577] text-black' : 'font-bold'
          // }
          style={({ isActive }) => ({
            fontWeight: "bold",
            backgroundColor: isActive ? "#e3b577" : "transparent",
            color: isActive ? "black" : "white",
          })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addCoffee"
          // className={({ isActive }) =>
          //   `font-bold hover:underline ${
          //     isActive ? "bg-[#e3b577] text-black" : ""
          //   }`
          // }
          style={({ isActive }) => ({
            fontWeight: "bold",
            backgroundColor: isActive ? "#e3b577" : "transparent",
            color: isActive ? "black" : "white",
          })}
        >
          Add Coffee
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/users"
          // className={({ isActive }) =>
          //   `font-bold hover:underline ${
          //     isActive ? "bg-[#e3b577] text-black" : ""
          //   }`
          // }
          style={({ isActive }) => ({
            fontWeight: "bold",
            backgroundColor: isActive ? "#e3b577" : "transparent",
            color: isActive ? "black" : "white",
          })}
        >
          Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          // className={({ isActive }) =>
          //   `font-bold hover:underline ${
          //     isActive ? "bg-[#e3b577] text-black" : ""
          //   }`
          // }
          style={({ isActive }) => ({
            fontWeight: "bold",
            backgroundColor: isActive ? "#e3b577" : "transparent",
            color: isActive ? "black" : "white",
          })}
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div style={{ backgroundImage: `url(${navbarImg})` }} className="w-full">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold"
            >
              {links}
            </ul>
          </div>
          <img className="w-14 h-16" src={logo} alt="Logo Image" />
          <Link className="text-xl font-bold rancho-font text-white">
            Espresso Emporium
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 text-white font-bold">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/signIn"
            className="btn bg-[#e3b577] border border-[#e3b577] hover:bg-transparent hover:text-white"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
