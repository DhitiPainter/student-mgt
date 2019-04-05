import mongoose from 'mongoose';
import { ConnectionString } from './../common/constant';
import User from './models/user.model';

mongoose.connect(process.env.MONGODB_URI || ConnectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

export default { User };
