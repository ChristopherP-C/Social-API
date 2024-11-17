import { Schema, model, Document, ObjectId } from 'mongoose';

interface UserInterface extends Document {
    username: string;
    email: string;
    thoughts: ObjectId[];
    friends: ObjectId[];
}

const userSchema = new Schema<UserInterface>({
    username: { 
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought'
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
    ],
})

const User = model('user', userSchema);

export default User;