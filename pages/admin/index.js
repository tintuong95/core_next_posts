import { useRouter } from "next/router.js";
import React, { useEffect } from "react";
import AdminLayout from "../../components/layouts/AdminLayout.js";

const HomeAdmin = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/admin/post");
  }, []);
  return <></>;
};
HomeAdmin.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default HomeAdmin;
