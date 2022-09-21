import axios from "axios";
import { fetchAxios } from "../../config/axios.js";

export const fetchSlideCreate = async (payload) => {
  return await fetchAxios({
    method: "POST",
    url: "/api/slide",
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "multipart/form-data",
    },
    data: payload.data,
  });
};


export const fetchSlideGets = async (payload) => {
  return await fetchAxios({
    method: "GET",
    url: "/api/slide",
  });
};





export const fetchSlideDelete = async (payload) => {
  return await fetchAxios({
    method: "DELETE",
    url: "/api/slide/" + payload.id,
  });
};


