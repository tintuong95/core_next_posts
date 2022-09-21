import Link from 'next/link.js';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addBreadCrumb } from '../../../stores/reducer/reducerLocal.js';

const CardSmall = ({ id, title,param, category, image }) => {
  const dispatch=useDispatch()
  return (
    <div className="flex flex-col items-center  mb-6 md:flex-row md:max-w-xl  ">
      <img
        className="object-cover rounded image-card-recommend     "
        src={image}
        alt=""
      />
      <div
        className="flex flex-col justify-between  ml-4 leading-normal"
        bis_skin_checked="1"
      >
        <Link href={"/" + category.param + "/" + param}>
          <a
            onClick={() => {
              dispatch(addBreadCrumb([category.name, title]));
            }}
            className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {title}
          </a>
        </Link>
        <div className="flex gap-5 text-gray-400 text-sm">
          <p>{category.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CardSmall;
