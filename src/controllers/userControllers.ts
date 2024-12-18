import { User, Thought } from '../models/index.js';
import { Request, Response } from 'express';


  // Get all users
  export const getUsers = async (_req: Request, res: Response) => {
    try {
      const users = await User.find()
      .populate('thoughts').populate('friends');
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

    // Get one user by id
    export const getSingleUser = async (req: Request, res: Response) => {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            .populate('thoughts').populate('friends');

            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            } else {
                return res.json(user);
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json(err);
        }
    }

    export const createUser = async (req: Request, res: Response) => {
        try {
          const user = await User.create(req.body);
          res.json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      }

        export const updateUser = async (req: Request, res: Response) => {
            try {
                const user = await User.findOneAndUpdate(
                    { _id: req.params.userId },
                    { $set: req.body },
                    { runValidators: true, new: true }
                );

                if (!user) {
                    return res.status(404).json({ message: 'No user found with this id!' });
                }

                res.json(user);
                return;
            } catch (err) {
                res.status(500).json(err);
                return;
            }
        }

        export const deleteUser = async (req: Request, res: Response) => {
            try {
                const user = await User.findOneAndDelete({ _id: req.params.userId });

                if (!user) {
                    return res.status(404).json({ message: 'No user found with this id!' });
                }

                await Thought.deleteMany({ _id: { $in: user.thoughts } });
                res.json({ message: 'User and associated thoughts deleted!' });
                return;
            } catch (err) {
                res.status(500).json(err);
                return;
            }
        }

        // add friend
        export const addFriend = async (req: Request, res: Response) => {
            try {
                const user = await User.findOneAndUpdate(
                    { _id: req.params.userId },
                    { $addToSet: { friends: req.params.friendId } },
                    { new: true }
                );

                if (!user) {
                    return res.status(404).json({ message: 'No user found with this id!' });
                }

                res.json({ message: 'Friend added!' });
                return;
            } catch (err) {
                res.status(500).json(err);
                return;
            }
        }

        // remove friend
        export const removeFriend = async (req: Request, res: Response) => {
            try {
                const user = await User.findOneAndUpdate(
                    { _id: req.params.userId },
                    { $pull: { friends: req.params.friendId } },
                    { new: true }
                );

                if (!user) {
                    return res.status(404).json({ message: 'No user found with this id!' });
                }

                res.json({ message: 'Friend removed!' });
                return;
            } catch (err) {
                res.status(500).json(err);
                return;
            }
        }