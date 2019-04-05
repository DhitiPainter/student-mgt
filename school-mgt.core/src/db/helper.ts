import mongoose from 'mongoose';
import { ConnectionString } from './../common/constant';

mongoose.connect(process.env.MONGODB_URI || ConnectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

export default { User: require('./models/user.model') };
