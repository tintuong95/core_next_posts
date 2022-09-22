import Link from "next/link.js";
import { useRouter } from "next/router.js";
import React from "react";
import { useDispatch } from "react-redux";
import { addBreadCrumb } from "../../../stores/reducer/reducerLocal.js";

const CardItem = ({id,title,param,image,description,updatedAt,category,views}) => {
  const dispatch=useDispatch()
  console.log(views)
  return (
    <div className="flex items-center   mb-5  ">
      <img className="object-cover img-card-base rounded" src={image} alt="" />
      <div
        className="flex flex-col justify-between  ml-4 leading-normal"
        bis_skin_checked="1"
      >
        <Link href={"/" + category.param + "/" + param}>
          <a
            onClick={() => {
              dispatch(addBreadCrumb([category.name, title]));
            }}
            className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {title}
          </a>
        </Link>
        <p className="mb-3 text-sm text-description font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex gap-5 text-gray-400 text-sm">
          <p>{new Date(updatedAt).toLocaleDateString("vi-VN")}</p>
          <p href="#" className="">
            {category.name}
          </p>

          <p className="flex gap-2 items-stretch   ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-eye self-center"
              viewBox="0 0 16 16"
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
            </svg>

            <span>{views}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
