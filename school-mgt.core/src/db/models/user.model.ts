import mongoose from 'mongoose';
import { DbModel } from './../../common/constant';
import { ObjectID } from 'bson';
import validator from "validator";

const userSchema = new mongoose.Schema({
    userName: {
        type: String, unique: true, required: true,
        validate: { validator: validator.isEmail, message: '{value} is not valid' }
    },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: Number, required: true },
    createdBy: { type: ObjectID, required: true },
    updatedBy: { type: ObjectID },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    userDetails: { type: ObjectID }
});

userSchema.set('toJSON', { virtuals: true });

const UserModel = mongoose.model(DbModel.user, userSchema);

export default UserModel;
