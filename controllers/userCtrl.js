import { Admin } from "mongodb"
import User from "../models/User.js"

// @desc Register User
// @route POST /api/v1/user/register
// @access Private/Admin

export const registerUserCtrl = async(req, res) => {
    res.json({
        msg: "User register controller",
    });
}