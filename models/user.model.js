import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minLength: [3, 'Name must be at least 3 characters'],
        maxLength: [50, 'Name must be less than 50 characters']

    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        minLength: 3,
        maxLength: 50,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Email is invalid']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: 6,
    },
}, {timespamps: true});

const User = mongoose.model('User', userSchema);

export default User;