import axios from "axios";
import { fetchAxios } from "../../config/axios.js";

export const fetchCategoryCreate = async (payload) => {
  return await fetchAxios({
    method: "POST",
    url: "/api/category",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify(payload.data),
  });
};

export const fetchCategoryUpdate = async (payload) => {
  return await fetchAxios({
    method: "PUT",
    url: "/api/category/" + payload.id,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify(payload.data),
  });
};

export const fetchCategoryGets = async (payload) => {
  return await fetchAxios({
    method: "GET",
    url: "/api/category",
  });
};


export const fetchCategoryGet = async (payload) => {
  return await fetchAxios({
    method: "GET",
    url: "/api/category/"+payload.id,
  });
};



export const fetchCategoryDelete = async (payload) => {
  return await fetchAxios({
    method: "DELETE",
    url: "/api/category/" + payload.id,
  });
};


