import { Schema, model } from 'mongoose';
import Reaction from './reaction.js';

interface ThoughtInterface {
    thoughtText: string;
    createdAt: Date;
    username: string;
    reactions: Reaction[];
}

const thoughtSchema = new Schema<ThoughtInterface>({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: [Reaction],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

thoughtSchema.virtual('reactionCount')
.get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

export default Thought;
    