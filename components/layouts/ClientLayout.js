import Head from "next/head.js";
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
      <Head>
   
          <meta content="INDEX,FOLLOW" name="robots" />
          <meta name="viewport" content="width=device-width" />
          <meta name="copyright" content="website tin tức hanoitime.com" />
          <meta name="author" content="website tin tức hanoitime.com" />
          <meta http-equiv="audience" content="General" />
          <meta name="resource-type" content="Document" />
          <meta name="distribution" content="Global" />
          <meta name="revisit-after" content="1 days" />
          <meta name="GENERATOR" content="website tin tức hanoitime.com" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta property="og:site_name" content="hanoitimes.com" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="vi_VN" />
          <meta property="fb:pages" content="214993791879039" />
          <meta http-equiv="x-dns-prefetch-control" content="on"></meta>
    
      </Head>
      <NavBar data={categorys} />
      <main className="container m-auto">{children}</main>
      <Footer data={categorys} />
    </>
  );
};

export default ClientLayout;
