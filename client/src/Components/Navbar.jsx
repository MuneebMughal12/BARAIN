import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.webp";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Units",
      path: "/units",
      children: [
        { name: "BED 1", path: "/units/bed-1" },
        { name: "BED 2", path: "/units/bed-2" },
      ],
    },
    { name: "Interior", path: "/interior" },
    { name: "Exterior", path: "/exterior" },
    { name: "Project-Team", path: "/project-team" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavigate = (path) => {
    setIsOpen(false);
    setDropdownOpen(false);
    navigate(path);
  };

  return (
    <nav
      className="bg-[#172D2D] h-36 px-6 py-4 flex items-center justify-between md:justify-around w-full relative"
      style={{ fontFamily: '"Montserrat"' }}
    >
      {/* Logo */}
      <div className="text-white font-semibold z-50">
        <Link to="/">
          <img src={Logo} alt="BARAIN" className="max-h-40 w-auto" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="text-white lg:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Nav Links */}
      <ul
        className={`lg:flex flex-col lg:flex-row bg-white lg:bg-transparent rounded-lg lg:rounded-none lg:static absolute top-36 left-0 w-full lg:w-auto shadow-lg lg:shadow-none transition-all duration-500 ease-in-out z-50
          ${isOpen ? "flex" : "hidden"}
        `}
      >
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`group relative px-6 py-3 text-black lg:text-white text-base font-semibold cursor-pointer hover:bg-[#142B2B] hover:text-white transition-colors duration-300
              ${location.pathname === item.path ? "bg-[#142B2B] text-white" : ""}
            `}
          >
            {/* Main Link */}
            <div
              onClick={() => handleNavigate(item.path)}
              className="flex items-center justify-between"
            >
              {item.name}
              {item.children && (
                <ChevronDown size={16} className="ml-1 lg:inline hidden" />
              )}
            </div>

            {/* Dropdown for Units */}
            {item.children && (
              <ul
                className="absolute left-0 top-full lg:mt-2 bg-white text-black rounded-md shadow-lg w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
              >
                {item.children.map((child, childIndex) => (
                  <li
                    key={childIndex}
                    className={`px-4 py-2 hover:bg-[#172D2D] hover:text-white transition-colors duration-300
                      ${location.pathname === child.path ? "bg-[#142B2D] text-white" : ""}
                    `}
                    onClick={() => handleNavigate(child.path)}
                  >
                    {child.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
