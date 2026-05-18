import axios from "axios";

const API = axios.create({
  baseURL: "https://resume-backend-iota-green.vercel.app"
});

export const uploadResume = (formData) => {
  return API.post("/upload", formData);
};
