import React from 'react';

import { MdArrowForward } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex text-white text-sm justify-between h-24  px-[50px] items-center">
      {/*logo */}
      <div className="h1 font-semibold text-3xl">rjt...</div>
      {/* */}
      <nav className="flex gap-4">
        <li>Company</li>
        <li>solution</li>
        <li>portfolio</li>
        <li>career</li>
        <li>blog</li>
        <li>all pages</li>
      </nav>
      {/*icon */}
      <div className="flex items-center">
        <button className="border-[1px] border border-white  px-5 py-3 rounded-full">get in touch</button>
        <button className="hover:rotate-0 p-3 rounded-full -ml-2 -rotate-45 bg-blue-600">
          <MdArrowForward/>
        </button>
      </div>
    </div>
  );
};

export default Header;
