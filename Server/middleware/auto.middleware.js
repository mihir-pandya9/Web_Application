import asyncHandler from "express-async-handler";
import ApiError from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import { User } from "../models/community-chat/user.model.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  console.log(
    "Request headers with authorization : ",
    req.headers.authorization
  );

  if (req.headers && req.headers.authorization) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decode value : ", decode);
      req.user = await User.findById(decode.id).select("-password");
      console.log("Request of user : ", req.user);
      next();
    } catch (err) {
      throw new ApiError(401, "Not authorized, token failed");
    }
  }

  if (!token) {
    throw new ApiError(401, "Not authorized, no token");
  }
});

export { protect };
