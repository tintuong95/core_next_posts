import Link from "next/link.js";
import React from "react";
import { useDispatch } from "react-redux";
import { addBreadCrumb } from "../../../stores/reducer/reducerLocal.js";

const Head = ({data}) => {
  const dispatch=useDispatch()
  return (
    <>
      <nav className="bg-white border-b border-b-slate-100 py-2 mb-6 ">
        <div
          className="container flex flex-wrap justify-between items-center mx-auto"
          bis_skin_checked="1"
        >
          <Link href="/">
            <a className="flex items-center">
              <img
                className="logo"
                src="https://img.icons8.com/stickers/100/000000/news.png"
              />
              <span className="self-center  font-semibold whitespace-nowrap dark:text-white">
                Hanoi Times
              </span>
            </a>
          </Link>

          <div
            className=" w-full md:block md:w-auto"
            id="navbar-default"
            bis_skin_checked="1"
          >
            <ul className="flex flex-col  mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0  md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <Link href="/admin/info">
                <li
                  onClick={() => {
                    dispatch(addBreadCrumb(["Admin", "Account"]));
                  }}
                  className="flex gap-4 bg-blue-400 text-white  p-2 px-3 m-2 rounded-md"
                >
                  <a className="block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 ">
                    {data?.username}
                  </a>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Head;
