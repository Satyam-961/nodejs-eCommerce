import exppress from "express";
import { registerUserCtrl } from "../controllers/userCtrl.js";

const userRoutes = exppress.Router();

userRoutes.post('api/v1/user/register', registerUserCtrl);
export default userRoutes;
