"use client";
import { title } from "@/models/constants";
import { routes } from "@/models/enums";
import { useState } from "react";
import LinkedRoute from "./LinkedRoute";

function Navigator() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navStyle =
    "fixed top-0 z-30 w-full -mb-10 px-2 py-4 bg-white sm:px-4 sm:py shadow-xl";
  const divStyle = "flex items-center justify-between mx-auto max-w-7xl";
  const titleStyle = "md:text-2xl text-lg font-extrabold text-blue-600";
  const burgerMenuStyle = `${
    isOpen ? "absolute" : "hidden"
  } top-0 right-0 z-50 flex flex-col p-2 pb-4 m-2 space-y-3 bg-white rounded shadow`;

  return (
    <div className="bg-gray-100">
      <header className={navStyle}>
        <div className={divStyle}>
          <span className={titleStyle}>{title}</span>
          <div className="flex items-center space-x-1">
            <ul className="hidden space-x-2 md:inline-flex">
              {(Object.values(routes) as string[])?.map((route) => (
                <LinkedRoute route={route} key={route} hook={setIsOpen} />
              ))}
            </ul>
            <div className="inline-flex md:hidden">
              <button
                className="flex-none px-2"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
                <span className="sr-only">Open Menu</span>
              </button>
              <ul className={burgerMenuStyle}>
                {(Object.values(routes) as string[])?.map((route) => (
                  <LinkedRoute route={route} key={route} hook={setIsOpen} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navigator;
