import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";

const FooterNav = () => {
  return (
    <div className="container py-7">
      <div className="flex justify-between items-center">
        {/* Footer Links  */}
        <nav>
          <ul className="flex gap-4 font-semibold text-sm md:text-lg text-gray-800">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Project">Projects</NavLink>
            </li>
            {/* <li>
              <NavLink to="/about">About</NavLink>
            </li> */}
          </ul>
        </nav>
        {/* Handles */}
        <div className="flex gap-7 text-lg md:text-2xl text-gray-700">
          <a
            href="https://www.instagram.com"
            aria-label="Instagram"
            rel="noopener"
            target="_blank"
          >
            <FaInstagram />
          </a>

          <a
            href="https://Wa.me//+2348136020880"
            aria-label="Whatsapp"
            rel="noopener"
            target="_blank"
          >
            <MdWhatsapp />
          </a>

          <a
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/oyerinde-iseoluwa-8741bb23a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2nTU7zm5RRGksBiqf0UtYQ%3D%3D"
          >
            <LuLinkedin />
          </a>

          <a
            rel="noopener"
            target="_blank"
            href="https://github.com/iseoluwapeter"
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
