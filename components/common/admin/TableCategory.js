import Link from 'next/link.js';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { actionCategoryDelete, actionCategoryGets } from '../../../stores/actions/actionCategory.js';

const TableCategory = () => {

  const { categorys } = useSelector((state) => state.reducerCategory);

  const dispatch =useDispatch()




  useEffect(() => {
    dispatch(actionCategoryGets())
   
  }, []);
;
    return (
      <>
        <div className="overflow-x-auto relative" bis_skin_checked="1">
          <table className="w-full  text-left text-gray-500 dark:text-gray-400">
            <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Quality
                </th>
                <th scope="col" className="py-3 px-6">
                  Edit
                </th>

                <th scope="col" className="py-3 px-6">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {categorys.map((item, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6">{item.name}</td>
                  <td className="py-4 px-6">{item.category.length}</td>
                  <td className="py-4 px-6 text-blue-500">
                    <Link
                      href={{
                        pathname: "/admin/category/update",
                        query: { id: item.id },
                      }}
                    >
                      <a>Edit</a>
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-red-500">
                    <button onClick={()=>{

                      Swal.fire({
                        title: "Are you sure?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Delete",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          dispatch(actionCategoryDelete({ id: item.id }));
                        }
                      });
                     
                    }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
}

export default TableCategory;
