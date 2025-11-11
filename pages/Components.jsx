import React from "react";
import Search from "../components/Search";

function Components() {
  return (
    <>
      <section className="flex flex-col h-screen">
        <div className="m-auto">
          <h2 className="text-6xl text-blue-800">Search For A Component</h2>
        </div>
        <Search />
        <div className="relative w-[80%] bg-blue-500 h-[80%] m-auto flex flex-row rounded-2xl">
          {/* Sidebar */}
          <div className="w-[25%] h-full bg-blue-800 rounded-l-2xl">
            <ul>
              <li className="text-white my-20 py-3 px-5 bg-blue-600 text-lg">
                Common Components
              </li>
              <li className="text-white my-20 py-3 px-5 border-y border-y-blue-300 text-lg">
                Skill Tree
              </li>
              <li className="text-white my-20 py-3 px-5 border-y border-y-blue-300 text-lg">
                Tutorials & Components
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Components;
