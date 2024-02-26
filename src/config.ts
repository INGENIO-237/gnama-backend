import "dotenv/config";

export const DB_URI = process.env.DB_URI;
export const PORT = process.env.PORT || 7000;
export const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;
export const AUTH0_ISSUER_BASE_URL = process.env.AUTH0_ISSUER_BASE_URL;
export const AUTH0_TOKEN_SIGNING_ALG = process.env.AUTH0_TOKEN_SIGNING_ALG;
