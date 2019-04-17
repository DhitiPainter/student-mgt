import { Response } from "express";
// import strategies
import { Strategy as ClientPasswordStrategy } from 'passport-oauth2-client-password';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import passport from 'passport';

// TODO : middleware for validating token using passport
export const validateToken = (req: any, res: Response, next: any) => {
    passport.authenticate('bearer', { session: false }, (err, user) => {
        console.log('err' + err, "validateToken req", req);
        console.log("userData", req['userData']);
        if (user) {
            req['user_data'] = user;
            next();
        } else {
            // next(getResponse(httpStatus.UNAUTHORIZED, null, err));
            console.log("ERROR : " + '[validateToken]' + err);
        }
    })(req, res, next);
}