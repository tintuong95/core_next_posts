import { useRouter } from "next/router.js";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCategoryGets } from "../../stores/actions/actionCategory.js";

import Head from "../common/admin/Head.js";
import Navbar from "../common/admin/Navbar.js";
import Footer from "../common/Footer.js";

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const { login, info } = useSelector((state) => state.reducerAdmin);
  const dispatch = useDispatch();
  const { categorys } = useSelector((state) => state.reducerCategory);

  useEffect(() => {
    dispatch(actionCategoryGets());
  }, []);

  useEffect(() => {
    if (!login) {
      // router.push("/admin/login");
    }
  }, []);

  return (
    <>
      <Head  data={info}/>
      <div className="container m-auto grid grid-cols-6">
        <div className="col-span-1 border-r">
          <Navbar />
        </div>
        <div className="col-span-5 pl-8">{children}</div>
      </div>
      <Footer data={categorys} />
    </>
  );
};

export default AdminLayout;
