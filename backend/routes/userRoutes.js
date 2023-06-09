import express from "express";
const router = express.Router();

import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  addWorkout,
  getWorkouts,
  deleteWorkout,
  addExercise,
  getExercises,
  getWorkout,
  deleteExercise,
  addFriend,
  getUsers,
  getFriendById,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/logout").post(logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route("/workouts").get(protect, getWorkouts).post(protect, addWorkout);
router
  .route("/workout/:id")
  .delete(protect, deleteWorkout)
  .get(protect, getWorkout);
router
  .route("/workout/:id/exercise")
  .post(protect, addExercise)
  .get(protect, getExercises);

router
  .route("/workout/:workoutId/exercise/:exerciseId")
  .delete(protect, deleteExercise);

router
  .route("/friends/:friendId")
  .post(protect, addFriend)
  .get(protect, getFriendById);
router.route("/").get(protect, getUsers);

export default router;
