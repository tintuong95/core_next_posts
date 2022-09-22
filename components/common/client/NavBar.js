import Link from "next/link.js";
import React from "react";

const NavBar = ({ data }) => {
  return (
    <>
      <nav className="bg-white border-b border-b-slate-100 py-2 mb-6 ">
        <div
          className="container flex flex-wrap justify-between items-center mx-auto"
          bis_skin_checked="1"
        >
          <Link href="/">
            <a className="flex items-center">
              <img className="logo" src="https://img.icons8.com/stickers/100/000000/news.png" />
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
              <li className="ml_12px">
                <Link
                  href={{
                    pathname: "/moi-nhat",
                    query: { name: "Mới nhất" },
                  }}
                >
                  <a
                    className="block  px-1 rounded  hover:text-sky-600 "
                    aria-current="page"
                  >
                    Mới nhất
                  </a>
                </Link>
              </li>
              {data?.map((item, index) => (
                <li className="ml_12px" key={item.id}>
                  <Link
                    href={{
                      pathname: "/" + item.param,
                      query: { id: item.id, name: item.name },
                    }}
                  >
                    <a
                      className="block hover:text-sky-600  px-1 rounded   "
                      aria-current="page"
                    >
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
