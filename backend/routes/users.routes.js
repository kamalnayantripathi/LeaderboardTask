import { Router } from "express"

import { getUsers, createUsers, getUserById, claimPoints } from "../controllers/users.controller.js"

const router = Router();


router.route("/users").get(getUsers);
router.route("/users").post(createUsers);
router.route("/user/:id").get(getUserById);
router.route("/user/:id/claim").post(claimPoints);

export default router;