import { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export default class ApiInterceptorApplier {
  constructor() {}
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
    api.interceptors.response.use(
      response => response,
      error => this.onResponseError(error)
    );
  }
}
