import { ConnectionString, jwtSecret } from './../../common/constant';

// tslint:disable-next-line: no-var-requires
const bcrypt = require('bcryptjs');
import jwt from 'jsonwebtoken';
import db from './../../db/helper';
const User = db.User;

export async function authenticate({ username, password }: any) {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, jwtSecret);
        return {
            ...userWithoutHash,
            token,
        };
    }
}

export async function getAll() {
    return await User.find().select('-hash');
}

export async function getById(id: number) {
    return await User.findById(id).select('-hash');
}

export async function create(userParam: any) {
    // validate
    if (await User.findOne({ username: userParam.username })) {
        throw new Error('Username "' + userParam.username + '" is already taken');
    }

    const user = new User(userParam);

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();
}

export async function update(id: number, userParam: any) {
    const user = await User.findById(id);

    // validate
    if (!user) { throw 'User not found'; }
    if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
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
    await User.findByIdAndRemove(id);
}
