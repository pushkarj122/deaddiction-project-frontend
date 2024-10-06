import React from "react";

export const LoginButton = () => (
  <button className="bg-transparent border border-[#458FF6] text-[#458FF6] py-2 px-4 rounded hover:bg-[#458FF6] hover:text-white transition mr-4">
    Login
  </button>
);

export const SignUpButton = () => (
  <button className="bg-[#458FF6] text-white py-2 px-4 rounded hover:bg-blue-600 transition">
    Sign Up
  </button>
);

export const LogoutButton = () => (
  <button className="bg-[#458FF6] text-white py-2 px-4 rounded hover:bg-blue-600 transition">
   Logout
  </button>
);