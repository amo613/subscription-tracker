import mongoose from 'mongoose';
import { DB_URI, NODE_ENV } from '../config/env.js';

if(!DB_URI) {
    throw new Error('DB_URI is not defined in environment variable inside .env.<development/production>.local file');
}

const conntectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);

        console.log(`Connected to database in ${NODE_ENV} mode`);
    } catch (error) {
        console.error('Error connecting to the database', error);
        process.exit(1);
    }
}

export default conntectToDatabase;