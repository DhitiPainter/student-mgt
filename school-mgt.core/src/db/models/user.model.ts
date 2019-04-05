import mongoose from 'mongoose';
import { DbModel } from './../../common/constant';

const userSchema = new mongoose.Schema({
    userName: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: Number, required: true },
    createdDate: { type: Date, default: Date.now }
});

userSchema.set('toJSON', { virtuals: true });

const UserModel = mongoose.model(DbModel.user, userSchema);

export default UserModel;
