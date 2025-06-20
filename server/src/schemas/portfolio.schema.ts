import { Schema } from 'mongoose';

const PortfolioSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ type: String, required: true }]
});

export default PortfolioSchema;