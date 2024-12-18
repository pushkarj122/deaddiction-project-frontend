import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { LoginButton, SignUpButton } from "./Buttons";

const LandingpageNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("bg-white");
  const location = useLocation();

  const isRootRoute = location.pathname === "/";
  const isSearchRoute = location.pathname === "/search";
  const isProfilePage = location.pathname === "/profilepage";

  const handleScroll = () => {
    if (window.scrollY > 50 || isSearchRoute) {
      setNavbarBg("bg-blue-100 shadow-md");
    } else {
      setNavbarBg("bg-white");
    }
  };

  useEffect(() => {
    if (isProfilePage) {
      setNavbarBg("bg-blue-100");
    } else {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isSearchRoute, isProfilePage, location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${navbarBg} text-blue-700 transition-colors duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-3">
          <div className="bg-[#458FF6] text-white font-bold text-xl flex justify-center items-center w-12 h-12 rounded-full">
            D
          </div>
          <h1 className="text-3xl font-semibold text-sky-700">DeAddiction</h1>
        </div>
        
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FiMenu className="text-3xl" />
          </button>
        </div>

        <div className="hidden md:flex space-x-6">
          {isRootRoute ? (
            <>
              <LoginButton />
              <SignUpButton />
            </>
          ) : (
            <LogoutButton />
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg">
          <nav className="flex flex-col space-y-4 p-4">
            {isRootRoute ? (
              <>
                <LoginButton />
                <SignUpButton />
              </>
            ) : (
              <LogoutButton />
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

const LogoutButton = () => (
  <button className="bg-[#458FF6] text-white py-2 px-4 rounded hover:bg-[#458FF6]-600 transition">
    Logout
  </button>
);

export default LandingpageNavbar;
