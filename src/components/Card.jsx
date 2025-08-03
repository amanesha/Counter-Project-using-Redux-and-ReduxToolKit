import React, { useEffect, useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import Header from "./Header";

function Card() {
  const [status, setStatus] = useState("");

  return (
    <>
      <div className="dark:bg-gray-800 dark:border-gray-700 h-screen">
        <Header />
        <div className="flex justify-center items-center px-4 py-8">
          <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <ul
              className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
              id="defaultTab"
              data-tabs-toggle="#defaultTabContent"
              role="tablist"
            >
              <li className="me-1">
                <NavLink
                  onClick={() => {
                    setStatus((prev) => (prev = "reduxv1"));
                  }}
                  to="/redux"
                  className={({ isActive }) =>
                    `inline-block p-4 rounded ${
                      isActive
                        ? "text-white dark:text-white bg-gray-100 dark:bg-gray-700"
                        : "text-gray-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700"
                    }`
                  }
                  data-tabs-target="#services"
                  type="button"
                  role="tab"
                  aria-controls="services"
                  aria-selected="false"
                  // className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  end
                >
                  With Redux ToolKit
                </NavLink>
              </li>
            </ul>
            <div className="flex justify-center items-center px-4 py-15 w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
