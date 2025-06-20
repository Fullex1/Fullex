import { Schema } from 'mongoose';

const RateSchema = new Schema({
    userName: { type: String, required: true },
    description: { type: String, required: true },
    stars: { type: Number, required: true, min: 1, max: 5 }
});

export default RateSchema;