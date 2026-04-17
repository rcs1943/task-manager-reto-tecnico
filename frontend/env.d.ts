/// <reference types="expo/types" />

declare namespace NodeJS {
  interface ProcessEnv {
    EXPO_PUBLIC_API_REQUEST_TIMEOUT: string;
    EXPO_PUBLIC_TASKS_PORT: string;
  }
}
