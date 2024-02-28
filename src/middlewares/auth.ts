import { auth } from "express-oauth2-jwt-bearer";
import {
  AUTH0_AUDIENCE,
  AUTH0_ISSUER_BASE_URL,
  AUTH0_TOKEN_SIGNING_ALG,
} from "../config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import Container from "typedi";
import UserRepository from "../repositories/user.repository";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

export const checkJwt = auth({
  audience: AUTH0_AUDIENCE,
  issuerBaseURL: AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: AUTH0_TOKEN_SIGNING_ALG,
});

export async function parseJwt(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization;

  if (!authorization || !authorization.startsWith("Bearer"))
    return res.sendStatus(401);

  const token = authorization.split("")[1];

  const decoded = jwt.decode(token) as jwt.JwtPayload;
  const authProviderId = decoded.sub;

  const userRepository = Container.get(UserRepository);

  const user = await userRepository.getUser({ authProviderId });

  if (!user) return res.sendStatus(401);

  req.userId = user._id.toString();

  next();
}
