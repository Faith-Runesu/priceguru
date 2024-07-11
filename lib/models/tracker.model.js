import mongoose from "mongoose";

const trackerSchema = new mongoose.Schema({
    emails: { type: [String], required: true, default: true },
    link: { type: String, unique: true, required: true },
    image: { type: String, unique: false, required: false },
    price: { type: Number, unique: false, required: true },
    description: { type: String, unique: false, required: true },
    title: { type: String, unique: false, required: true }
});
const Tracker = mongoose.models.Tracker || mongoose.model('Tracker', trackerSchema);

export default Tracker;