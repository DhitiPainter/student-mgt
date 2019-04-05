import expressJwt from 'express-jwt';
import { jwtSecret } from './../common/constant';
import * as userService from '../db/service/user.service';

export function jwt() {
    const secret = jwtSecret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/auth/authenticate',
            '/auth/register'
        ]
    });
}

async function isRevoked(req: any, payload: any, done: any) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};

export default jwt();