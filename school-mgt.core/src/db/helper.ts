import mongoose from 'mongoose';
import { ConnectionString } from './../common/constant';
import User from './models/user.model';
import Role from "./models/role.model";
import UserDetails from './models/user-details.model';
import ClassSection from './models/class-section.model';

mongoose.connect(process.env.MONGODB_URI || ConnectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

export default { Role, User, UserDetails, ClassSection };
