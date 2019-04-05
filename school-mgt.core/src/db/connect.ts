import mongoose, { Schema } from 'mongoose';
import { ConnectionString } from './../common/constant';
import { Roles } from './../common/enum';
const schema = mongoose.Schema;

export const connectDatabase = () => {
    // Set up default mongoose connection
    mongoose.connect(ConnectionString, { useNewUrlParser: true });

    // Get the default connection
    const db = mongoose.connection;
    // console.log(db);
    console.log(db.readyState);


    // Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    // var role = new Schema({
    //     id: {
    //         type: Number,
    //         required: [true]
    //     },
    //     role: {
    //         type: String,
    //         enum: [Roles]
    //     }
    // });

    // var user = new Schema({
    //     id: {
    //         type: Number,
    //         required: [true]
    //     },
    //     role_id: {
    //         type: Number,
    //         required: [true]
    //     },
    //     first_name: {
    //         type: String,
    //         required: [true]
    //     },
    //     last_name: {
    //         type: String,
    //         required: [true]
    //     },
    //     email: {
    //         type: String,
    //         required: [true]
    //     },
    //     password: {
    //         type: String,
    //         required: [true]
    //     }
    // });

    // Compile model from schema
    // var UserModel = mongoose.model('user', user);
};
