import mongoose from "mongoose";
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/van');
        console.log('connect successfully!!!');
    }
    catch (error) {
        console.error('Đã có lỗi xảy ra:', error);
    }
};
export default { connect };