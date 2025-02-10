import { Request, Response, NextFunction } from 'express';

import { verifyToken } from '$utils/token.utils';
import { UNAUTHORIZED_SERVICE_RESPONSE, INVALID_TOKEN_SERVICE_RESPONSE } from '$entities/Service';
export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

  if (!token) {
    return res.status(UNAUTHORIZED_SERVICE_RESPONSE().err?.code || 500).json(UNAUTHORIZED_SERVICE_RESPONSE());
  }

  const serviceResponse = verifyToken(token);

  if (!serviceResponse.status) {
    return res.status(serviceResponse.err?.code || 500).json(INVALID_TOKEN_SERVICE_RESPONSE());
  }

  res.locals.jwtPayload = serviceResponse.data;

  next();
}