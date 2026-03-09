import axios from "axios";

const API = axios.create({
  baseURL: "https://resumebackend-production-7bfd.up.railway.app/"
});

export const uploadResume = (formData) => {
  return API.post("/upload", formData);
};
