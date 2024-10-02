import axios from "axios";
import swal from "sweetalert";

import { logout } from "@/utils/methods";
import { BASE_URL } from "./config";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json,application/x-www-form-urlencoded,text/plain,*/*",
    "Content-Type": "application/json;charset=utf-8",
  },
});

api.interceptors.request.use((request) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      swal(
        "Oops! Phiên làm việc đã hết hạn!!!",
        `Vui lòng đăng nhập lại để tiếp tục`,
        "error",
        {
          closeOnEsc: false,
          closeOnClickOutside: false,
        }
      ).then(() => {
        logout();
      });
      return;
    }
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }

    return Promise.reject(error.message);
  }
);

export default api;
