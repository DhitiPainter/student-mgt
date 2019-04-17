import mongoose from 'mongoose';
import { DbModel } from './../../common/constant';

const roleSchema = new mongoose.Schema({
    role: { type: String, required: true },
    role_id: { type: Number, unique: true, required: true },
});

roleSchema.set('toJSON', { virtuals: true });

const RoleModel = mongoose.model(DbModel.role, roleSchema);

export default RoleModel;
