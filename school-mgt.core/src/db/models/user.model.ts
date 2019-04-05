import mongoose from 'mongoose';
import { DbModel } from './../../common/constant';

const Schema = mongoose.Schema;

const schema = new Schema({
    userName: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: Number, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

export default mongoose.model(DbModel.user, schema);