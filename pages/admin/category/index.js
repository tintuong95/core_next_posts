import React from "react";
import { useSelector } from "react-redux";
import TableCategory from "../../../components/common/admin/TableCategory.js";
import BreadCrumb from "../../../components/common/BreadCrumb.js";
import AdminLayout from "../../../components/layouts/AdminLayout.js";

const Category = () => {
  const { breadCrumbs } = useSelector((state) => state.reducerLocal);
  return (
    <>
      <BreadCrumb data={breadCrumbs} />
      <div className="my-6"></div>
      <TableCategory />
    </>
  );
};

Category.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Category;
