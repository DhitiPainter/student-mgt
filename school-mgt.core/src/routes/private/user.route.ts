import UserController from '../../controllers/user.controller';

export const userRoutes = (router: any) => {
    const userController = new UserController();

    router.get('/updateUserDetails/:id',
        async (req: any, res: any, next: any) => {
            const response: any = await userController.getUserProfile(req.params['id']);
            return res.send(response);
        }
    );

    router.post(
        '/updateUserDetails/:id',
        async (req: any, res: any, next: any) => {
            const authorization: string = req.headers['authorization'];
            // const bearerToken: string = authorization.split(' ')[1];            
            const response: any = await userController.updateUserProfile(authorization, req.params['id'], req.body);
            return res.send(response);
        }
    );
};

export default userRoutes;