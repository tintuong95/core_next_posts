import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import BreadCrumb from "../../components/common/BreadCrumb.js";
import AdminLayout from "../../components/layouts/AdminLayout.js";
import { actionAdminUpdate } from "../../stores/actions/actionAdmin.js";

const Info = () => {
  const dispatch = useDispatch();
  const {info}=useSelector(state=>state.reducerAdmin)
  const { breadCrumbs } = useSelector((state) => state.reducerLocal);
  const { register, handleSubmit, watch, setValue } = useForm();
  const onSubmit = handleSubmit((data) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Change password",
    }).then((result) => {
      if (result.isConfirmed) {
        
        dispatch(
          actionAdminUpdate({ data: { ...data, username: info.username } })
        );
      }
    });
  });
  return (
    <>
      <BreadCrumb data={breadCrumbs} />
      <div className="my-6"></div>
      <div className="w-1/2 m-auto ">
        <form action="" onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="text-slate-500">Old password</label>
            <input
              {...register("oldPassword")}
              type="password"
              className="bg-slate-100 rounded p-3 block w-full"
              placeholder="Please input here... "
            />
          </div>
          <div className="mb-4">
            <label className="text-slate-500">New password</label>
            <input
              {...register("newPassword")}
              type="password"
              className="bg-slate-100 rounded p-3 block w-full"
              placeholder="Please input here... "
            />
          </div>

          <button
            htmlFor="submit"
            className="bg-slate-100 rounded p-3 block mt-3 w-full"
          >
            Change password
          </button>
        </form>
      </div>
    </>
  );
};

Info.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Info;
