import mongoose from "mongoose";
const Schema = mongoose.Schema;

const course = new Schema({
    // name: { type: String, default: '' },
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    img: { type: String, maxLength: 600 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model('course', course);