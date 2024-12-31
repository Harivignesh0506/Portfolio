import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 text-center text-[#000000] bg-[#9fabc8] text-sm md:text-base">
      &copy; {new Date().getFullYear()} HVcode | Designed by Hari Vignesh
    </footer>
  );
};

export default Footer;
