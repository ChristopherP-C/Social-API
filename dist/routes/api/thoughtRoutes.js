import { Router } from 'express';
const router = Router();
import { getThoughts, getSingleThought, createThought, updateThought, deleteThought, createReaction, removeReaction } from '../../controllers/thoughtControllers.js';
router.route('/')
    .get(getThoughts)
    .post(createThought);
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);
router.route('/:thoughtId/reactions')
    .post(createReaction);
router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);
export default router;
