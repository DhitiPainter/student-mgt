import axios from 'axios';
import { User } from 'src/common/constant';

export async function getProfile(userId: any) {
    const updateProfileConst = `${User.updateUserProfile}`.replace('{id}', `${userId}`);
    return await axios.get(updateProfileConst);
}

export async function updateProfile(user: any, userId: any) {
    const updateProfileConst = `${User.updateUserProfile}`.replace('{id}', `${userId}`);
    return await axios.post(updateProfileConst, user);
}