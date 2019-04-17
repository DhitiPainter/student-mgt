import { User } from './../db/models/user';
import * as userService from './../db/service/user.service';

// OLD Working code
// const express = require('express');
// const router = express.Router();

// router.post('/authenticate', authenticate);
// router.post('/register', registerUser)

// module.exports = router;

// function authenticate(req: any, res: any, next: any) {
//     userService.authenticate(req.body)
//         .then((user: any) => {
//             user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' })
//         })
//         .catch(err => next(err));
// }

// function registerUser(req: any, res: any, next: any) {
//     userService.create(req.body)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }

// Better approach
export default class UserController {
    public authenticate = async (user: User) => {
        try {
            return await userService.authenticate(user);
        } catch (error) {
            console.log(error);
        }
    }

    public registerUser = async (user: User) => {
        try {
            return await userService.create(user);
        } catch (error) {
            console.log(error);
        }
    }

    public getUserProfile = async (userId: any) => {
        try {
            return await userService.getById(userId);
        } catch (error) {
            console.log(error);
        }
    }

    public updateUserProfile = async (token: string, userId: any, user: any) => {
        try {
            return await userService.update(userId, user, token);
        } catch (error) {
            console.log(error);
        }
    }
}
