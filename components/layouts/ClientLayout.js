import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCategoryGets } from "../../stores/actions/actionCategory.js";

import NavBar from "../common/client/NavBar.js";
import Footer from "../common/Footer.js";

const ClientLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { categorys } = useSelector((state) => state.reducerCategory);
  

  useEffect(() => {
    dispatch(actionCategoryGets());
  }, []);
  return (
    <>
      <NavBar data={categorys} />
      <main className="container m-auto">{children}</main>
      <Footer data={categorys} />
    </>
  );
};

export default ClientLayout;
