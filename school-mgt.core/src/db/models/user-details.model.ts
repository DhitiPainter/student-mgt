import mongoose from 'mongoose';
import { DbModel } from './../../common/constant';
import { ObjectID } from 'bson';

const userDetailsSchema = new mongoose.Schema({
    address1: { type: String, required: true, maxlength: 50 },
    address2: { type: String, maxlength: 50 },
    city: { type: String, maxlength: 50 },
    pincode: { type: String, required: true, maxlength: 6 },
    email: { type: String, required: true },
    hobbies: { type: String, maxlength: 200 },
    bloodGroup: { type: String, required: true, maxlength: 10 },
    class: { type: ObjectID }
});

userDetailsSchema.set('toJSON', { virtuals: true });

const UserDetailsModel = mongoose.model(DbModel.userDetails, userDetailsSchema);

export default UserDetailsModel;
