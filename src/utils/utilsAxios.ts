import axios, { AxiosResponse } from "axios";

/**
 * Base url for spotify web page
 */
const axiosInstance = axios.create({
  baseURL: "https://poe-backend.onrender.com",
});

export async function wrapAxiosCall<T>(promise: Promise<AxiosResponse>) {
  const response = await promise;
  return response.data as T;
}

export default axiosInstance;
