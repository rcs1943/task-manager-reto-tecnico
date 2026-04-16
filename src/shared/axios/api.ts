import axios from "axios";
import ApiInterceptorApplier from "./ApiInterceptorApplier";
import { API_PUBLIC_ENDPOINTS } from "./api-public-endpoints";

function createApi(port: string) {
	const BASE_URL = __DEV__ ? `http://localhost:${port}` : process.env.EXPO_PUBLIC_API_URL;
	return axios.create({
		baseURL: BASE_URL,
		timeout: Number(process.env.EXPO_PUBLIC_API_REQUEST_TIMEOUT) || 10000,
	});
}

export const usersApi = createApi(process.env.EXPO_PUBLIC_USERS_PORT);
export const companiesApi = createApi(process.env.EXPO_PUBLIC_USERS_PORT);
export const tripsApi = createApi(process.env.EXPO_PUBLIC_TRIPS_PORT);

const allApis = [usersApi, companiesApi, tripsApi];

const apiInterceptorApplier = new ApiInterceptorApplier(API_PUBLIC_ENDPOINTS);
allApis.forEach(api => apiInterceptorApplier.apply(api));
