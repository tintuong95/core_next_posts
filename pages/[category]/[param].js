import axios from "axios";
import Head from "next/head.js";
import { useRouter } from "next/router.js";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import BreadCrumb from "../../components/common/BreadCrumb.js";
import CardMedium from "../../components/common/client/CardMedium.js";
import ClientLayout from "../../components/layouts/ClientLayout.js";

export async function getServerSideProps({ query }) {

  console.log(
    process.env.NEXT_PUBLIC_VERCEL_URL_PROTOCOL+
    process.env.NEXT_PUBLIC_VERCEL_URL
  );
  const resPostDetail = await axios({
    url:
     
      process.env.NEXT_PUBLIC_VERCEL_URL_PROTOCOL+
    process.env.NEXT_PUBLIC_VERCEL_URL+"/api/news?param=" + query.param,
    method: "GET",
  }).then((response) => response.data);

  const resPostRecommends = await axios({
    url:
     process.env.NEXT_PUBLIC_VERCEL_URL_PROTOCOL+
    process.env.NEXT_PUBLIC_VERCEL_URL+
      "/api/news?limit=5&offset=0",
    method: "GET",
  }).then((response) => response.data);

  return {
    props: {
      post: resPostDetail.data[0],
      recommends: resPostRecommends.data,
    },
  };
}

const Param = ({ post, recommends }) => {
  const { breadCrumbs } = useSelector((state) => state.reducerLocal);
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="keywords" content={post.title} />
        <meta name="description" content={post.description} />
        <meta
          property="og:url"
          itemprop="url"
          content={
            process.env.NEXT_PUBLIC_VERCEL_URL_PROTOCOL +
            process.env.NEXT_PUBLIC_VERCEL_URL +
            +router.asPath
          }
        />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
      </Head>
      <BreadCrumb data={breadCrumbs} />
      <div className="grid grid-cols-5 gap-8 my-6">
        <div className="col-span-3">
          <h1 className="text-center font-bold text-2xl mb-2">{post.title}</h1>
          <p className="text-center text-sm">
            <span>{post.category.name}</span>
            <span className="ml-3">
              {new Date(post.updatedAt).toLocaleDateString("vi-VN")}
            </span>
            <span className="ml-3">{post.views} views</span>
          </p>
          <p className="my-4 font-semibold">{post.description}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>

      <div className=" mb-8 bg-gray-50 p-6">
        <div className="grid grid-cols-5 gap-6 ">
          {recommends?.map((item, index) => (
            <CardMedium key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

Param.getLayout = function getLayout(page) {
  return <ClientLayout>{page}</ClientLayout>;
};

export default Param;
