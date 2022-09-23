import Link from "next/link.js";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  actionCategoryDelete,
  actionCategoryGets,
} from "../../../stores/actions/actionCategory.js";
import { actionSlideDelete } from "../../../stores/actions/actionSlide.js";

const TableSlide = ({ data }) => {


  const dispatch = useDispatch();

  return (
    <>
      <div className="overflow-x-auto relative" bis_skin_checked="1">
        <table className="w-full  text-left text-gray-500 dark:text-gray-400">
          <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Photo
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Time
              </th>

              <th scope="col" className="py-3 px-6">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6">
                  <img
                    className="rounded"
                    style={{ width: 150 }}
                    src={process.env.NEXT_PUBLIC_VERCEL_URL + "/" + item.image}
                    alt=""
                  />
                </td>
                <td className="py-4 px-6">{item.image}</td>
                <td className="py-4 px-6">
                  {new Date(item.updatedAt).toLocaleDateString("vi-VN")}
                </td>
                <td className="py-4 px-6 text-red-500">
                  <button
                    onClick={() => {
                      Swal.fire({
                        title: "Are you sure?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Delete",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          dispatch(actionSlideDelete({ id: item.id }));
                        }
                      });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableSlide;
