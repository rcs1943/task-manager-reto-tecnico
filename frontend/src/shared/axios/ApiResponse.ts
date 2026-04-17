type ApiResponse<D> = {
  statusCode: number;
  message: string;
  data?: D;
};

export default ApiResponse;
