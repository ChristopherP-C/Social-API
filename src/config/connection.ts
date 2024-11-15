import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/socialAPI');

export default mongoose.connection;
