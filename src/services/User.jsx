import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});


// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

export const login = (email, password) => {
  return axiosInstance.post("/api/v1/user/login", { email, password });
};

export const register = (fullName, email, userName, password) => {
  return axiosInstance.post("/api/v1/user/register", {
    fullName,
    email,
    userName,
    password,
  });
};

export const forgetpass = (email) => {
  return axiosInstance.post("/api/v1/user/forgetpass", { email });
};

export const changepass = (oldPassword, newPassword, userId) => {
  return axiosInstance.post(`/api/v1/user/changepass/${userId}`, {
    oldPassword,
    newPassword,
  });
};

export const updateProfile = (userId, updatedData) => {
  return axiosInstance.patch(`/api/v1/user/profile/update/${userId}`, updatedData);
};
