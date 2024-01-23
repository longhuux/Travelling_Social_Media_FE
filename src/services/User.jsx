import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

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

export const updateProfile = (data, userId) => {
  console.log(data);
  return axiosInstance.put(`/api/v1/user/profile/update/${userId}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
