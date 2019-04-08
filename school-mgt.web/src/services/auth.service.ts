import axios from 'axios';
import { Auth } from 'src/common/constant';

export async function authenticate(user: any) {
    return await axios.post(Auth.login, user);
}