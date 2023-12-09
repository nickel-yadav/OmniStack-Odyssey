import { Schema, model } from "mongoose";


const userSchema = new Schema({
    username: {
        type: String, 
        required: true,
        unique: true
    }, 
    email: {
        type: String, 
        required: true,
        unique: true
    }, 
    password1: {
        type: String, 
        required: true,
    }
}, { timestamps: true});

const User = model('user', userSchema);

export default User
