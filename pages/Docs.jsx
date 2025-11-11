import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet, Link } from "react-router-dom";

function Docs() {
  return (
    <>
      <section className="relative flex flex-row w-full">
        <Sidebar />
        <Outlet />
      </section>
    </>
  );
}

export default Docs;
