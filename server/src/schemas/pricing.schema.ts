import { model, Schema } from 'mongoose';

const PricingSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});
export const pricing = model('pricing', PricingSchema);