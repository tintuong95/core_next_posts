
import { fetchAxios } from "../../config/axios.js";

export const fetchAdminLogin = async (payload) => {
  return await fetchAxios({
    method: "POST",
    url: "/api/admin/login",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify(payload.data),
  });
};

export const fetchAdminUpdate = async (payload) => {
 
  return await fetchAxios({
    method: "PUT",
    url: "/api/admin/update",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify(payload.data),
  });
};

export const fetchAdminProfile = async (payload) => {
  return await fetchAxios({
    method: "GET",
    url: "/api/admin",
  });
};


export const fetchAdminLogout = async (payload) => {
  return await fetchAxios({
    method: "GET",
    url: "/api/admin/"+payload.id,
  });
};






