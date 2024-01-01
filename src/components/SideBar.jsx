import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";
const SideBar = () => {
  return (
    <>
      <aside className="sideBar ">
        <div className="shadow-lg shadow-cyan-500/50 flex flex-col h-full border rounded-lg border-">
          <div className="h-[30%]"></div>
          <div className="sideBarLinks">
            <Link className="border px-2 py-4" to="/">
              Me
            </Link>
            <Link className="border px-2 py-4" to="/entropie">
              Entropie
            </Link>
            <Link className="border px-2 py-4" to="/">
              Prefix code
            </Link>
            <Link className="border px-2 py-4" to="/huffman">
              Huffman
            </Link>
            <Link className="border px-2 py-4" to="/shannon-fano">
              Shannon-Fano
            </Link>
          </div>
        </div>
      </aside>
      <Outlet />
    </>
  );
};

export default SideBar;
