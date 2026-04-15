/// <reference types="expo/types" />

declare namespace NodeJS {
  interface ProcessEnv {
    EXPO_PUBLIC_API_REQUEST_TIMEOUT: string;
    EXPO_PUBLIC_API_URL: string;
    EXPO_PUBLIC_USERS_PORT: string;
    EXPO_PUBLIC_COMPANIES_PORT: string;
    EXPO_PUBLIC_TRIPS_PORT: string;
  }
}
