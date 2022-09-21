import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addBreadCrumb } from "../../../stores/reducer/reducerLocal.js";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <ul className="flex flex-col ">
      <li>
        <Link href="/admin/post/create">
          <a
            onClick={() => {
              dispatch(addBreadCrumb(["Admin", "Post", "Create"]));
            }}
            className="block py-2 mr-3 border rounded shadow-sm pl-3 mb-3  bg-stone-100 hover:bg-stone-200 "
          >
            Create post
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/post">
          <a
            onClick={() => {
              dispatch(addBreadCrumb(["Admin", "Post"]));
            }}
            className="block py-2 mr-3 border rounded shadow-sm pl-3 mb-3  bg-stone-100 hover:bg-stone-200 "
          >
            List posts
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/category/create">
          <a
            onClick={() => {
              dispatch(addBreadCrumb(["Admin", "Category", "Create"]));
            }}
            className="block py-2 border rounded shadow-sm mr-3 pl-3 mb-3  bg-stone-100 hover:bg-stone-200 "
          >
            Create category
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/category">
          <a
            onClick={() => {
              dispatch(addBreadCrumb(["Admin", "Category"]));
            }}
            className="block py-2 border rounded shadow-sm mr-3 pl-3 mb-3  bg-stone-100 hover:bg-stone-200 "
          >
            List categories
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/slide/create">
          <a
            onClick={() => {
              dispatch(addBreadCrumb(["Admin", "Slide", "Create"]));
            }}
            className="block border rounded shadow-sm py-2 mr-3 pl-3 mb-3  bg-stone-100 hover:bg-stone-200 "
          >
            Create slide
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/slide">
          <a
            onClick={() => {
              dispatch(addBreadCrumb(["Admin", "Slide"]));
            }}
            className="block border py-2 mr-3 pl-3 mb-3 rounded shadow-sm bg-stone-100 hover:bg-stone-200 "
          >
            List slide
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
