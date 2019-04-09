import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';
import { jwtSecret } from './../../common/constant';
import db from './../../db/helper';
const UserModel = db.User;

export async function authenticate(userObject: User) {
    let user: User = null;

    return UserModel.findOne({ userName: userObject.userName }).exec().then((res: any) => {
        if (res) {
            user = {
                firstName: res.firstName,
                hash: res.hash,
                id: res.id,
                lastName: res.lastName,
                role: res.role,
                userName: res.userName,
            };
            if (user && userObject.password && bcrypt.compareSync(userObject.password, user.hash)) {
                const token = jwt.sign({ sub: user.id }, jwtSecret);
                return { user, token, isAuthenticated: true, message: 'Logged in successfully!' };
            }
        } else {
            return { user: null, token: null, isAuthenticated: false, message: 'Invalid credentials' };
        }
    });
}

export async function getAll() {
    return await UserModel.find().select('-hash');
}

export async function getById(id: number) {
    return await UserModel.findById(id).select('-hash');
}

export async function create(userParam: User) {
    // validate
    return UserModel.findOne({ userName: userParam.userName }).exec().then((res: any) => {
        if (res) {
            return { isUserExists: true };
        }
    }).then((isUserExists: any) => {
        if (isUserExists) {
            return { message: 'Username "' + userParam.userName + '" is already taken', isUserExists: true };
        }
        const user: any = new UserModel(userParam);
        // hash password
        if (userParam.password) {
            user.hash = bcrypt.hashSync(userParam.password, 10);
        }
        // save user
        user.save();
        return { message: 'User "' + userParam.userName + '" created successfully', isUserExists: false };
    });
}

export async function update(id: number, userParam: any) {
    const user: any = await UserModel.findById(id);
    // validate
    if (!user) { throw new Error('User not found'); }
    if (user.userName !== userParam.username && await UserModel.findOne({ username: userParam.username })) {
        throw new Error('Username "' + userParam.username + '" is already taken');
    }
    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }
    // copy userParam properties to user
    Object.assign(user, userParam);
    await user.save();
}

export async function _delete(id: number) {
    await UserModel.findByIdAndRemove(id);
}
