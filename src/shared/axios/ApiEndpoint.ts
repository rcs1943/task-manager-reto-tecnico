export enum ApiEndpointMethod {
    Get = "GET",
    Post = "POST",
    Put = "PUT",
    Delete = "DELETE",
}

export type ApiEndpoint = {
    method: ApiEndpointMethod;
    path: string;
};

export default ApiEndpoint;