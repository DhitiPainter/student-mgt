import * as userService from "./../db/service/user.service";
const express = require('express');
const router = express.Router();

router.post('/authenticate', authenticate);
router.post('/register', registerUser)
router.get('/', getAll);


module.exports = router;

function authenticate(req: any, res: any, next: any) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function registerUser(req: any, res: any, next: any) {
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req: any, res: any, next: any) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}


// const registerUser = async (user: any): Promise<any> => {
//     try {
//         await userService.create(user)
//             .then((res: any) => {
//                 res.json({});
//                 // console.log("User", res)
//             });
//     } catch (error) {
//         console.log("Error while registering")
//     }
// };



// export default class UserController {



//     // constructor(private userService : UserService){}
//     registerUser = async (user: any): Promise<any> => {
//         try {
//             await userService.create(user)
//                 .then((res: any) => {
//                     // res.json({});
//                     console.log("User", res)
//                 });
//         } catch (error) {
//             console.log("Error while registering")
//         }
//     };
// }