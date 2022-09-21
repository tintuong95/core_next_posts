import { useRouter } from "next/router.js";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import BreadCrumb from "../../../components/common/BreadCrumb.js";
import AdminLayout from "../../../components/layouts/AdminLayout.js";
import {
  actionCategoryCreate,
  actionCategoryGet,
  actionCategoryGets,
  actionCategoryUpdate,
} from "../../../stores/actions/actionCategory.js";

const Update = () => {
  const dispatch = useDispatch();
  const { breadCrumbs } = useSelector((state) => state.reducerLocal);
  const { category } = useSelector((state) => state.reducerCategory);
  const { query } = useRouter();
  const { register, handleSubmit, watch, setValue, reset } = useForm();
  const onSubmit = handleSubmit((data) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Update",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(actionCategoryUpdate({ id: query.id, data: data }));
      }
    });
  });

  useEffect(() => {
    dispatch(actionCategoryGet({ id: query.id }));
  }, [query]);

  useEffect(() => {
    reset(category);
  }, [category]);

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
            placeholder="Nhập danh mục "
          />
          <button
            htmlFor="submit"
            className="bg-slate-100 rounded p-3 block mt-3 w-full"
          >
            Edit Category
          </button>
        </form>
      </div>
    </>
  );
};

Update.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Update;
