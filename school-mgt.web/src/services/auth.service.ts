import axios from 'axios';
import { Auth } from 'src/common/constant';

export class AuthService {
    public async authenticate(user: any) {
        return await axios.post(Auth.login, user);
    }
}