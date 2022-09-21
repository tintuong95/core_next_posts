import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import BreadCrumb from "../../../components/common/BreadCrumb.js";
import AdminLayout from "../../../components/layouts/AdminLayout.js";
import { actionCategoryCreate } from "../../../stores/actions/actionCategory.js";

const Category = () => {
  const dispatch = useDispatch();
  const { breadCrumbs } = useSelector((state) => state.reducerLocal);
  const { register, handleSubmit, watch, setValue } = useForm();
  const onSubmit = handleSubmit((data) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Create",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(actionCategoryCreate({ data }));
      }
    });
  });

  return (
    <>
      <BreadCrumb data={breadCrumbs} />
      <div className="my-6"></div>
      <div className="w-1/2 m-auto ">
        <form action="" onSubmit={onSubmit}>
          <input
            {...register("name")}
            type="text"
            className="bg-slate-100 rounded p-3 block w-full"
            placeholder="Please input here... "
          />
          <button
            htmlFor="submit"
            className="bg-slate-100 rounded p-3 block mt-3 w-full"
          >
            Create category
          </button>
        </form>
      </div>
    </>
  );
};

Category.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Category;
