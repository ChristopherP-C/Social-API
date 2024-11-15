import { User, Thought } from '../models/index.js';
// Get all users
export const getUsers = async (_req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// Get one user by id
export const getSingleUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId })
            .populate('thoughts');
        if (!user) {
            return res.status(404).json({ message: 'No user found with this id!' });
        }
        else {
            return res.json(user);
        }
    }
    catch (err) {
        return res.status(500).json(err);
    }
};
export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const updateUser = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { runValidators: true, new: true });
        if (!user) {
            return res.status(404).json({ message: 'No user found with this id!' });
        }
        res.json(user);
        return;
    }
    catch (err) {
        res.status(500).json(err);
        return;
    }
};
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.userId });
        if (!user) {
            return res.status(404).json({ message: 'No user found with this id!' });
        }
        await Thought.deleteMany({ _id: { $in: user.thoughts } });
        res.json({ message: 'User and associated thoughts deleted!' });
        return;
    }
    catch (err) {
        res.status(500).json(err);
        return;
    }
};
// add friend
export const addFriend = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'No user found with this id!' });
        }
        res.json({ message: 'Friend added!' });
        return;
    }
    catch (err) {
        res.status(500).json(err);
        return;
    }
};
// remove friend
export const removeFriend = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'No user found with this id!' });
        }
        res.json({ message: 'Friend removed!' });
        return;
    }
    catch (err) {
        res.status(500).json(err);
        return;
    }
};
