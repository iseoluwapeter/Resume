import React from "react";
import { navbarMenu } from "../../Components/MockData/data";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav>
      <div className="container flex justify-between items-center py-6">
        {/* logo section  */}
        <div className="text-3xl font-medium">
          <p>
            Peter<span className=" text-purple-700">.</span>
          </p>
        </div>
        {/* menu section  */}
        <div className=" hidden lg:block">
          <ul className="flex justify-center items-center gap-6">
            {navbarMenu.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink
                    to={item.link}
                    className="text-lg font-medium lg:hover:text-purple-900 transition-all duration-300 "
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        {/* cta button section  */}

        <div className="hidden lg:block">
          <BiSolidMessageRoundedDetail className="text-3xl text-purple-950" />
        </div>
        {/* mobile  hamburger section  */}
        <div
          className="lg:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <MdMenu className="text-4xl" />
        </div>

        {/* mobile side bar menu  */}
        <ResponsiveMenu isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
