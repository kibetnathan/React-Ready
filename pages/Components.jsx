import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import ComponentCard from "../components/ComponentCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchComponents } from "../src/store/componentSlice";
import { useNavigate } from "react-router-dom";

function Components() {
  const dispatch = useDispatch();
  const { items, status, error, searchQuery } = useSelector(
    (state) => state.components
  );
  const navigate = useNavigate();
  const filteredItems = items.filter((component) =>
    component.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchComponents());
  }, [dispatch]);

  const [view, setView] = useState("components");

  function switchView(vp) {
    switch (vp) {
      case "components":
        setView(vp);
        console.log("viewpoint =" + vp);
        break;
      case "myComp":
        setView(vp);
        console.log("viewpoint =" + vp);
        break;
      default:
        alert("Fix yo function!");
        break;
    }
  }
  function ComponentDisplay() {
    return (
       <div className="flex flex-row flex-wrap w-full h-full gap-x-20 gap-y-2 overflow-scroll p-5 justify-center">
        {status === "loading" && (
          <p className="text-white">Loading components...</p>
        )}
        {status === "failed" && <p className="text-red-500">{error}</p>}
        {status === "succeeded" &&
          filteredItems.map((component) => (
            <ComponentCard
              key={component.id}
              name={component.name}
              description={component.description}
              tutorial={component.tutorial}
              image={component.image}
            />
          ))}
      </div>
    );
  }
  
function MyComponents() {
  const { items, status, error } = useSelector((state) => state.components);
  const [savedComponents, setSavedComponents] = useState([]);

  // Helper to load from localStorage
  const loadSaved = () => {
    const saved = JSON.parse(localStorage.getItem("savedComponents")) || [];
    const savedIds = saved.map(Number);
    const filtered = items.filter((component) => savedIds.includes(component.id));
    setSavedComponents(filtered);
  };

  useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("savedComponents")) || [];
  // If saved contains objects instead of ids, use them directly
  if (saved.length && typeof saved[0] === "object") {
    setSavedComponents(saved);
  } else {
    const savedIds = saved.map(Number);
    const filtered = items.filter((component) => savedIds.includes(component.id));
    setSavedComponents(filtered);
  }
}, [items]);

  return (
    <div className="flex flex-row flex-wrap w-full h-full gap-x-10 gap-y-2 overflow-scroll p-5 justify-center">
      {status === "loading" && (
        <p className="text-white">Loading components...</p>
      )}
      {status === "failed" && <p className="text-red-500">{error}</p>}

      {status === "succeeded" && savedComponents.length === 0 && (
        <p className="text-white text-lg">
          You haven’t saved any components yet.
        </p>
      )}

      {status === "succeeded" &&
        savedComponents.map((component) => (
          <ComponentCard
            key={component.id}
            name={component.name}
            description={component.description}
            tutorial={component.tutorial}
            image={component.image}
          />
        ))}
    </div>
  );
}


  return (
    <section className="flex flex-col h-screen">
      <div className="m-auto">
        <h2 className="text-6xl text-blue-800">Search For A Component</h2>
      </div>

      <Search />

      <div className="relative w-full md:w-[90%] bg-blue-500 h-[80%] m-auto flex flex-row rounded-2xl">
        {/* Sidebar */}
        <div className="w-[25%] h-full bg-blue-800 rounded-l-2xl">
          <ul>
            <li
              className={`text-white my-20 py-3 px-5 text-lg ${
                view === "components"
                  ? "bg-blue-600"
                  : "bg-blue-800 border-y border-y-blue-300"
              }`}
              onClick={() => switchView("components")}
            >
              Components
            </li>

            <li
                            className={`text-white my-20 py-3 px-5 text-lg ${
                view === "myComp"
                  ? "bg-blue-600"
                  : "bg-blue-800 border-y border-y-blue-300"
              }`}
              onClick={() => switchView("myComp")}
            >
              My Components
            </li>
            <li
              className="text-white my-20 py-3 px-5 border-y border-y-blue-300 text-lg hover:cursor-pointer hover:bg-blue-400"
              onClick={() => navigate("/")}
            >
              {"<-- Go Back Home"}
            </li>
          </ul>
        </div>
        {view === "components" && <ComponentDisplay />}
        {view === "myComp" && <MyComponents />}
      </div>
    </section>
  );
}

export default Components;
