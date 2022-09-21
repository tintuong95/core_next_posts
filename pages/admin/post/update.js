import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import BreadCrumb from "../../../components/common/BreadCrumb.js";
import AdminLayout from "../../../components/layouts/AdminLayout.js";
import { useDispatch, useSelector } from "react-redux";
import {
  actionNewsCreate,
  actionNewsGet,
  actionNewsUpdate,
} from "../../../stores/actions/actionNews.js";
import { actionCategoryGets } from "../../../stores/actions/actionCategory.js";
import { useRouter } from "next/router.js";
import Swal from "sweetalert2";

const Editor = dynamic(
  () => import("../../../components/common/admin/Ckeditor.js"),
  {
    ssr: false,
  }
);

const Update = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { breadCrumbs } = useSelector((state) => state.reducerLocal);
  const { categorys } = useSelector((state) => state.reducerCategory);
  const { newsDetails } = useSelector((state) => state.reducerNews);
  const { register, handleSubmit, watch, setValue, reset, getValues } = useForm(
    {
      defaultValues: {
        title: newsDetails?.title,
        description: newsDetails?.description,
        content: newsDetails?.content,
        idCategory: newsDetails?.idCategory,
      },
    }
  );
  const onSubmit = handleSubmit((values) => {
    let data = new FormData();
    Object.entries(values).forEach((item) => {
      data.append(item[0], item[1]);
    });
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Update",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(actionNewsUpdate({ id: query.id, data }));
      }
    });
  });

  useEffect(() => {
    dispatch(actionCategoryGets());
    dispatch(actionNewsGet({ id: query.id }));
  }, [query]);

  useEffect(() => {
    reset(newsDetails);
  }, [newsDetails]);

  return (
    <>
      <BreadCrumb data={breadCrumbs} />
      <div className="my-6"></div>
      <form action="" onSubmit={onSubmit}>
        <div className="mb-6">
          <label
            for="base-input"
            className="block mb-2 text-base font-medium text-gray-900"
          >
            Title
          </label>
          <input
            {...register("title")}
            type="text"
            className="bg-gray-50 border p-3 w-full border-gray-300 text-gray-900  rounded-lg    "
          />
        </div>

        <div className="mb-6">
          <label
            for="base-input"
            className="block mb-2 text-base font-medium text-gray-900"
          >
            Categories
          </label>
          <select
            {...register("idCategory")}
            className="bg-gray-50 border p-3 w-full border-gray-300 text-gray-900  rounded-lg    "
          >
            {categorys.map((item, index) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label
            for="base-input"
            className="block mb-2 text-base font-medium text-gray-900"
          >
            Image
          </label>
          <input
            type="file"
            onChange={(e) => {
              setValue("image", e.target.files[0]);
            }}
            className="bg-gray-50 border p-3 w-full border-gray-300 text-gray-900  rounded-lg    "
          />
        </div>

        <div className="mb-6">
          <label
            for="base-input"
            className="block mb-2 text-base font-medium text-gray-900"
          >
            Description
          </label>
          <textarea
            {...register("description")}
            type="text"
            className="bg-gray-50 border p-3 w-full border-gray-300 text-gray-900  rounded-lg    "
          />
        </div>
        <div className="mb-6">
          <label
            for="base-input"
            className="block mb-2 text-base font-medium text-gray-900"
          >
            Content
          </label>
          <Editor setValue={setValue} defaultValue={getValues("content")} />
        </div>
        <div className="mb-6">
          <button
            rows={10}
            type="text"
            htmlFor="submit"
            className="bg-blue-400 border p-3 w-full border-gray-300 text-white  rounded-lg    "
          >
            Update Post
          </button>
        </div>
      </form>
    </>
  );
};

Update.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Update;
