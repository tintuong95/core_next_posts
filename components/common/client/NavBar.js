import Link from "next/link.js";
import React from "react";

const NavBar = ({data}) => {
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
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
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
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0  md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <Link
                href={{
                  pathname: "/moi-nhat" ,
                  query: {  name: "Mới nhất" },
                }}
              >
                <a className="block  px-1 rounded   " aria-current="page">
                  Mới nhất
                </a>
              </Link>
              {data?.map((item, index) => (
                <li key={item.id}>
                  <Link
                    href={{
                      pathname: "/" + item.param,
                      query: { id: item.id, name: item.name },
                    }}
                  >
                    <a className="block  px-1 rounded   " aria-current="page">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
