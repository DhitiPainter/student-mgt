import UserController from '../../controllers/user.controller';

export const auth = (router: any) => {
    router.post(
        '/register',
        async (req: any, res: any, next: any) => {
            const userController = new UserController();
            const response: any = await userController.registerUser(req.body);
            return res.send(response); // .status(response.status)
        },
    );

    router.post(
        '/authenticate',
        // validate(registerUser),
        async (req: any, res: any, next: any) => {
            const userController = new UserController();
            const response = await userController.authenticate(req.body);
            return res.send(response); // .status(response.status)
        },
    );
};

export default auth;