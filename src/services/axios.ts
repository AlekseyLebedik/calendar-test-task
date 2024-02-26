import axios from "axios";

export const axiosInstance = () => {
  return axios.create({ baseURL: "https://date.nager.at/api/v3" });
};
