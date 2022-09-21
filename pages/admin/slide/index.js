import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableSlide from "../../../components/common/admin/TableSlide.js";
import BreadCrumb from "../../../components/common/BreadCrumb.js";
import AdminLayout from "../../../components/layouts/AdminLayout.js";
import { actionSlideGets } from "../../../stores/actions/actionSlide.js";

const Slide = () => {
  const dispatch = useDispatch();
  const { slides } = useSelector((state) => state.reducerSlide);
  const { breadCrumbs } = useSelector((state) => state.reducerLocal);
  useEffect(() => {
    dispatch(actionSlideGets());
  }, []);

  return (
    <>
      <BreadCrumb data={breadCrumbs} />
      <div className="my-6"></div>
      <TableSlide data={slides} />
    </>
  );
};

Slide.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
export default Slide;
