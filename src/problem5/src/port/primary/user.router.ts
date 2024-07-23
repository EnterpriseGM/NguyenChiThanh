import { Router } from "express";
import { UserController } from "../../application/user.controller";
import { _validateUserData } from "../../domain/user.middleware";

const router = Router();
const userController = new UserController();

//Create a resource.
router.post("/", _validateUserData, userController.createUser);

//List resources with basic filters.
router.post("/search", _validateUserData, userController.searchUser);

//Get details of a resource.
router.get("/:id", userController.findUserById);

//Update resource details.
router.put("/:id", _validateUserData, userController.updateUser);

//Delete a resource.
router.delete("/:id", userController.deleteUser);

export default router;
