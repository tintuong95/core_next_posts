import Link from "next/link.js";
import { useRouter } from "next/router.js";
import React from "react";
import { useDispatch } from "react-redux";
import { addBreadCrumb } from "../../../stores/reducer/reducerLocal.js";

const CardItem = ({id,title,param,image,description,updatedAt,category}) => {
  const dispatch=useDispatch()
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
        </div>
      </div>
    </div>
  );
};

export default CardItem;
