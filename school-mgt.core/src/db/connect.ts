import mongoose, { Schema } from 'mongoose';
import { ConnectionString } from './../common/constant';

export const connectDatabase = () => {
    // Set up default mongoose connection
    mongoose.connect(ConnectionString, { useNewUrlParser: true });

    // Get the default connection
    const db = mongoose.connection;

    // Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
};
