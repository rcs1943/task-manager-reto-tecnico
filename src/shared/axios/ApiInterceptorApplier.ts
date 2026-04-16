import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import ApiEndpoint from "./ApiEndpoint";
import { useAuthStore } from "@/features/login/utils/authStore";

export default class ApiInterceptorApplier {
  constructor(private readonly publicEndpoints: ApiEndpoint[]) {}
  onRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    if (this.isPublicRoute(config)) return config;
    const { token } = useAuthStore.getState();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  }
  onResponseError(error: AxiosError): AxiosResponse<unknown, any, {}> {
    if (error.response) {
      const responseData = error.response.data as
        | { message?: string }
        | undefined;
      const message =
        responseData?.message || error.message || "Error desconocido";
      return error.response;
    }
    if (error.request) throw new Error("It cannot connect to the server");
    throw new Error(error.message || "It cannot perform the request");
  }

  apply(api: AxiosInstance) {
    api.interceptors.request.use(config => this.onRequest(config));
    api.interceptors.response.use(
      response => response,
      error => this.onResponseError(error)
    );
  }
  private isPublicRoute(config: InternalAxiosRequestConfig): boolean {
    return this.publicEndpoints.some(
      endpoint =>
        config.method?.toUpperCase() === endpoint.method &&
        config.url === endpoint.path
    );
  }
}
