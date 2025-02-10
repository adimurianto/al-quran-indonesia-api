import jwt from "jsonwebtoken";
import Logger from "$pkg/logger";
import { ServiceResponse, INVALID_TOKEN_SERVICE_RESPONSE } from '$entities/Service';

export function verifyToken(token: string): ServiceResponse<any> {
    try {
        const JWT_SECRET = process.env.JWT_SECRET || "";
        const decoded = jwt.verify(token, JWT_SECRET);
        return {
            status: true,
            data: decoded
        };
    } catch (err) {
        Logger.error(`utils.token.verifyToken : ${err}`);
        return INVALID_TOKEN_SERVICE_RESPONSE();
    }
}