import { fetchAxios } from "../../config/axios.js";

export const fetchNewsCreate = async (payload) => {
  return await fetchAxios({
    method: "POST",
    url: "/api/news",
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "multipart/form-data",
    },
    data: payload.data,
  });
};

export const fetchNewsUpdate = async (payload) => {
  return await fetchAxios({
    method: "PUT",
    url: "/api/news/" + payload.id,
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "multipart/form-data",
    },
    data: payload.data,
  });
};

export const fetchNewsGets = async (payload) => {
  const query = Object.entries(payload)
    .map((item) => item[0] + "=" + item[1])
    .join("&");
  return await fetchAxios({
    method: "GET",
    url: "/api/news?" + query,
  });
};

export const fetchNewsGet = async (payload) => {
  return await fetchAxios({
    method: "GET",
    url: "/api/news/" + payload.id,
  });
};

export const fetchNewsDelete = async (payload) => {
  return await fetchAxios({
    method: "DELETE",
    url: "/api/news/" + payload.id,
  });
};

