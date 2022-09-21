import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableNews from "../../../components/common/admin/TableNews.js";
import BreadCrumb from "../../../components/common/BreadCrumb.js";
import AdminLayout from "../../../components/layouts/AdminLayout.js";
import { actionNewsGets } from "../../../stores/actions/actionNews.js";

const HomeAdmin = () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const { posts } = useSelector((state) => state.reducerNews);
  const { breadCrumbs } = useSelector((state) => state.reducerLocal);
  const onNext = () => {
    setOffset(offset + 6);
    dispatch(actionNewsGets({ limit: 6, offset }));
  };

  const onPrevious = () => {
    if (offset == 0) {
      dispatch(actionNewsGets({ limit: 6, offset }));
    } else {
      setOffset(offset - 6);
      dispatch(actionNewsGets({ limit: 6, offset: offset - 6 }));
    }
  };

  useEffect(() => {
    dispatch(actionNewsGets({ limit: 6, offset }));
  }, []);

  return (
    <>
      <BreadCrumb data={breadCrumbs} />
      <div className="my-6"></div>
      <TableNews data={posts} offset={offset} />
      <div className="flex justify-center mt-4">
        <a
          onClick={onPrevious}
          className="m-2 bg-blue-100 py-2 px-4 rounded border border-blue-300"
        >
          Previous
        </a>
        <a
          onClick={onNext}
          className="m-2 bg-blue-100 py-2 px-4 rounded border border-blue-300"
        >
          Next
        </a>
      </div>
    </>
  );
};
HomeAdmin.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default HomeAdmin;
