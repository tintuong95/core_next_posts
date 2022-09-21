import React from "react";
import Image from "next/image.js";
import Link from "next/link.js";
import { useDispatch } from "react-redux";
import { actionNewsDelete } from "../../../stores/actions/actionNews.js";
import { addBreadCrumb } from "../../../stores/reducer/reducerLocal.js";
import Swal from "sweetalert2";

const TableNews = ({ data,offset }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="overflow-x-auto relative" bis_skin_checked="1">
        <table className="w-full  text-left text-gray-500 dark:text-gray-400">
          <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                IMAGE
              </th>
              <th scope="col" className="py-3 px-6">
                NAME
              </th>
              <th scope="col" className="py-3 px-6">
                CATEGORY
              </th>

              <th scope="col" className="py-3 px-6">
                EDIT
              </th>
              <th scope="col" className="py-3 px-6">
                DELETE
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="img-card-base rounded"
                      src={"http://localhost:3000/" + item.image}
                      alt="Picture of the author"
                    />
                  </td>
                  <td className="py-4 px-6">{item.title}</td>
                  <td className="py-4 px-6">{item.category.name}</td>
                  <td className="py-4 px-6 text-blue-500">
                    <Link
                      href={{
                        pathname: "/admin/post/update",
                        query: { id: item.id },
                      }}
                    >
                      <a
                        onClick={() => {
                          dispatch(addBreadCrumb(["Admin", "Post", "Update"]));
                        }}
                      >
                        Edit
                      </a>
                    </Link>
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
                            dispatch(actionNewsDelete({ id: item.id,offset }));
                          }
                        });
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableNews;
