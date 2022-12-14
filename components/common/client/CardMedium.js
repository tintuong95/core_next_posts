import Link from 'next/link.js';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addBreadCrumb } from '../../../stores/reducer/reducerLocal.js';

const CardMedium = ({id,title,image,param,category}) => {
  const dispatch=useDispatch()

    return (
      <a href="#" className="flex flex-col items-center    ">
        <img
          className=" w-100 rounded   image-card-medium object-cover "
          src={
            process.env.NEXT_PUBLIC_VERCEL_URL_PROTOCOL +
            process.env.NEXT_PUBLIC_VERCEL_URL +"/"+
            image
          }
          alt=""
        />
        <div
          className="flex flex-col justify-between   leading-normal"
          bis_skin_checked="1"
        >
          <Link href={"/" + category.param + "/" + param}>
            <a
              onClick={() => {
                dispatch(addBreadCrumb([category.name, title]));
              }}
              className="mb-2 text-base text-description  font-bold  text-gray-900 mt-2"
            >
              {title}
            </a>
          </Link>
        </div>
      </a>
    );
}

export default CardMedium;
