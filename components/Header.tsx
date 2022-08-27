import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  return (
    <div className="shadow bg-white">
      <div className="h-16 mx-auto px-5 flex items-center justify-between">
        <a className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">
          Logo
        </a>

        <ul className="flex items-center gap-5">
          <li>
            {" "}
            <button
              type="button"
              className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
              Connect Wallet
            </button>
          </li>
          <li>
            <a className="hover:text-cyan-500 transition-colors" href="">
              Link 2
            </a>
          </li>
          <li>
            <a className="hover:text-cyan-500 transition-colors" href="">
              Link 3
            </a>
          </li>
          <li>
            <a className="hover:text-cyan-500 transition-colors" href="">
              Link 4
            </a>
          </li>
          <li>
            <a className="hover:text-cyan-500 transition-colors" href="">
              Link 5
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
