import Image from "next/image.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardBase from "../components/common/client/CardBase.js";
import CardMedium from "../components/common/client/CardMedium.js";
import CardSmall from "../components/common/client/CardSmall.js";
import Slide from "../components/common/client/Slide.js";
import ClientLayout from "../components/layouts/ClientLayout.js";
import {
  actionPostFooters,
  actionPostImportands,
  actionPostNews,
  actionPostNewsAdd,
  actionPostRecommends,
  actionPostSlide,
} from "../stores/actions/actionNews.js";
import { actionSlideGets } from "../stores/actions/actionSlide.js";
import ads from "../public/ads.png";

export default function Home() {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(10);
  const { slides } = useSelector((state) => state.reducerSlide);
  const { postNews, postRecomments, postImportants, postSlides, postFooters } =
    useSelector((state) => state.reducerNews);
  const onSeeMore = () => {
    dispatch(actionPostNewsAdd({ offset, limit: 5 }));
    setOffset(offset + 5);
  };
  useEffect(() => {
    dispatch(
      actionPostRecommends({
        limit: 4,
        offset: 10,
        views: "DESC",
        updatedAt: "DESC",
      })
    );
    dispatch(actionPostNews({ limit: 10,offset:4, updatedAt: "DESC" }));
    dispatch(actionPostImportands({ limit: 10, views: "DESC" }));
    dispatch(actionPostSlide({ limit: 4 }));
    dispatch(actionPostFooters({ limit: 5,offset:14, views: "DESC" }));
    dispatch(actionSlideGets());
  }, []);

  return (
    <>
      <div className="grid grid-cols-10 gap-5 mb-8 rounded bg-slate-50 p-6">
        <div className="col-span-2">
          {postSlides?.slice(0, 2).map((item, index) => (
            <CardMedium {...item} />
          ))}
        </div>
        <div className="col-span-6">
          <Slide data={slides} />
        </div>
        <div className="col-span-2">
          {postSlides?.slice(2, 4).map((item, index) => (
            <CardMedium {...item} />
          ))}
        </div>
      </div>
      <div className=" mb-8 bg-yellow-300 rounded shadow p-6">
        <p className="font-bold text-xl  mb-3 ">Nổi bật</p>
        <div className="grid grid-cols-5 gap-6  ">
          {postImportants?.map((item, index) => (
            <CardMedium {...item} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-5 gap-8 mb-6">
        <div className="col-span-3">
          <p className="font-bold text-xl mb-8 pb-1  border-b-2 border-b-green-300 inline-block ">
            Tin mới
          </p>
          {postNews?.map((item, index) => (
            <>
              <CardBase {...item} />
              <hr className="mb-5 " />
            </>
          ))}

          <div className="text-center">
            <button onClick={onSeeMore} className="bg-gray-200 w-full p-2">
              Xem thêm
            </button>
          </div>
        </div>
        <div className="col-span-2 ">
          <div className="bg-gray-50 p-6">
            <p className="font-bold text-xl mb-8 pb-1  border-b-2 border-b-green-300 inline-block ">
              Đề xuất
            </p>
            {postRecomments?.map((item, index) => (
              <CardSmall {...item} />
            ))}
          </div>

          <div className="mt-6">
            <p className="font-bold text-xl mb-4 pb-1  border-b-2 border-b-green-300 inline-block ">
              Ads
            </p>
            <Image className="rounded-xl shadow-xl" src={ads} alt="" />
          </div>
        </div>
      </div>

      <div className=" mb-8 bg-gray-50 p-6 rounded">
        <div className="grid grid-cols-5 gap-6 ">
          {postFooters?.map((item, index) => (
            <CardMedium {...item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <ClientLayout>{page}</ClientLayout>;
};
