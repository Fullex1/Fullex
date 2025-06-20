import { Schema, model, Document } from 'mongoose';

const FaqSchema = new Schema({
    question: { type: String, required: true, trim: true },
    answer: { type: String, required: true, trim: true },
});

export const Faq = model('Faq', FaqSchema);