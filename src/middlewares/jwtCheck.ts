import { auth } from "express-oauth2-jwt-bearer";
import {
  AUTH0_AUDIENCE,
  AUTH0_ISSUER_BASE_URL,
  AUTH0_TOKEN_SIGNING_ALG,
} from "../config";

const jwtCheck = auth({
  audience: AUTH0_AUDIENCE,
  issuerBaseURL: AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: AUTH0_TOKEN_SIGNING_ALG,
});

export default jwtCheck;
