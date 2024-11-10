export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const API_KEY = import.meta.env.VITE_API_KEY;

export const API_AUTH = `${API_BASE_URL}/auth`;

export const API_AUTH_LOGIN = `${API_AUTH}/login`;

export const API_AUTH_REGISTER = `${API_AUTH}/register`;

export const API_AUTH_KEY = `${API_AUTH}/create-api-key`;

export const API_SOCIAL = `${API_BASE_URL}/social`;

export const API_SOCIAL_POSTS = `${API_SOCIAL}/posts`;

export const API_SOCIAL_PROFILES = `${API_SOCIAL}/profiles`;
