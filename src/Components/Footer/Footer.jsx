import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container ">
      {/* get in touch */}
      <div className="flex flex-col justify-center items-center ">
        <div className="py-10 space-y-4">
          <p className="font-bold text-lg text-gray-600">
            Interested in working with us{" "}
            <span className="text-purple-700 ">?</span>
          </p>

          {/* CTA buttons  */}
          <div className="flex justify-start gap-3 ">
            <a
              href="mailto:peteroluwa2019@gmail.com"
              aria-label="mymail"
              rel="noopener"
              target="_blank"
              className="bg-purple-700 rounded-lg p-2 text-white flex justify-centeritems-center px-3"
            >
              Get in touch
            </a>
            <button className="border border-purple-700 rounded-lg p-2 px-3">
              <NavLink to="/Project">Browse Project</NavLink>
            </button>
          </div>
        </div>

        {/* copyright */}

        <div className="text-gray-600 border-t-2 border-gray-300 py-2 flex pb-3 ">
          <p className="text-center text-sm md:text-[15px] pb-2">
            2025 All Right Reserved. Made by Peter Oyerinde
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
