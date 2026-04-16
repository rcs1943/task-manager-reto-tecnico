import axios from "axios";
import ApiInterceptorApplier from "./ApiInterceptorApplier";

function createApi(port: string) {
  const BASE_URL = __DEV__
    ? `http://localhost:${port}`
    : process.env.EXPO_PUBLIC_API_URL;
  return axios.create({
    baseURL: BASE_URL,
    timeout: Number(process.env.EXPO_PUBLIC_API_REQUEST_TIMEOUT) || 10000,
  });
}

export const tasksApi = createApi(process.env.EXPO_PUBLIC_TASKS_PORT);

const allApis = [tasksApi];

const apiInterceptorApplier = new ApiInterceptorApplier();
allApis.forEach(api => apiInterceptorApplier.apply(api));
