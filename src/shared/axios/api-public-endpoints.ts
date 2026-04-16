import ApiEndpoint, { ApiEndpointMethod } from "./ApiEndpoint";

export const API_PUBLIC_ENDPOINTS: ApiEndpoint[] = [
    {
        method: ApiEndpointMethod.Post,
        path: "/auth/login",
    },
];