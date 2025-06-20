import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    userName: { type: String, required: true },
    email:    { type: String, required: true, unique: true },
    pass:     { type: String, required: true }
});

export default model('User', UserSchema);