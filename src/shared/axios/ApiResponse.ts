type ApiResponse<D> = {
    message: string;
    data?: D;
};

export default ApiResponse;