export const BASE_URL = import.meta.env.VITE_URL_API;
export const URL_GET_IP = import.meta.env.VITE_URL_GET_IP;

export const ENV_ENVIRONMENT_AWS_KEYS = {
  bucket: import.meta.env.VITE_BUCKET_S3,
  accessKeyID: import.meta.env.VITE_ACCESS_KEY_S3,
  secretKeyID: import.meta.env.VITE_SECRET_KEY_S3,
  endpoint: import.meta.env.VITE_ENDPOINT_S3,
  region: import.meta.env.VITE_REGION_S3,
};
