import { useRouter } from "next/router.js";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "../../components/common/BreadCrumb.js";
import CardBase from "../../components/common/client/CardBase.js";
import CardSmall from "../../components/common/client/CardSmall.js";
import ClientLayout from "../../components/layouts/ClientLayout.js";
import {
  actionPostCategories,
  actionPostCategoryAdd,
  actionPostRecommends,
} from "../../stores/actions/actionNews.js";
import { addBreadCrumb } from "../../stores/reducer/reducerLocal.js";
import ads from "../../public/ads.png"
import Image from "next/image.js";

const Category = () => {
  //**** */
  const { query } = useRouter();
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(8);
  const { breadCrumbs } = useSelector((state) => state.reducerLocal);
  const { postCategories, postRecomments } = useSelector(
    (state) => state.reducerNews
  );

  const onClickSeeMore = () => {
    if (!query.id) {
      dispatch(actionPostCategoryAdd({ limit: 8, offset: offset,updatedAt:"DESC" }));
    } else {
      dispatch(
        actionPostCategoryAdd({ limit: 8, offset, idCategory: query.id ,updatedAt:"DESC"})
      );
    }
    setOffset(offset + 8);
  };

  useEffect(() => {
    dispatch(actionPostRecommends({ limit: 4 ,updatedAt:"DESC"}));
    dispatch(addBreadCrumb([query.name]));
    setOffset(8);
  }, [query]);

  useEffect(() => {
    if (!query.id) {
      dispatch(
        actionPostCategories({ limit: 8, offset: 0, updatedAt: "DESC" })
      );
    } else {
      dispatch(
        actionPostCategories({
          limit: 8,
          offset: 0,
          idCategory: query.id,
          updatedAt: "DESC",
        })
      );
    }
  }, [query]);

  return (
    <>
      <BreadCrumb data={breadCrumbs} />
      <div className="grid grid-cols-5 gap-8 mt-6">
        <div className="col-span-3">
          {postCategories?.map((item, index) => (
            <>
              <CardBase {...item} />
              <hr className="mb-5 " />
            </>
          ))}

          <div className="text-center">
            <button onClick={onClickSeeMore} className="bg-gray-200 w-full p-2">
              Xem thêm
            </button>
          </div>
        </div>
        <div className="col-span-2 ">
          <div className="mb-6">
            <p className="font-bold text-xl mb-4 pb-1  border-b-2 border-b-green-300 inline-block ">
              Ads
            </p>
            <Image className="rounded-xl shadow-xl" src={ads} alt="" />
          </div>
          <div className="bg-gray-50 p-6">
            <p className="font-bold text-xl mb-8 pb-1  border-b-2 border-b-green-300 inline-block ">
              Tin đề xuất
            </p>
            {postRecomments?.map((item, index) => (
              <CardSmall {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Category.getLayout = function getLayout(page) {
  return <ClientLayout>{page}</ClientLayout>;
};

export default Category;
