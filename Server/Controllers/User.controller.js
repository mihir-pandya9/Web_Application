import asyncHandler from "express-async-handler";
import ApiError from "../utils/ApiError.js";
import { User } from "../models/community-chat/user.model.js";
import { generateToken } from "../db/generateToken.js";
import { Register } from "../models/RegistrationForm/Register.model.js";
import jwt from "jsonwebtoken";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, profile, registration_id } = req.body;

  const registerValues = await Register.findOne({ email });
  let registerId;
  if (registerValues) {
    registerId = registerValues._id;
  } else {
    throw new ApiError(400, "registerId can't be captured");
  }

  if (!name || !email || !password || registration_id) {
    throw new ApiError(400, "All fields are required");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    throw new ApiError(400, "User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    registration_id: registerId,
    profile,
  });

  const token = generateToken(user._id);
  res.cookie("jwt", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 3 });

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    profile: user.profile,
    registration_id: registerId,
    token: token,
  });
});

// import asyncHandler from "express-async-handler";
// import ApiError from "../utils/ApiError.js";
// import { User } from "../models/community-chat/user.model.js";
// import { generateToken } from "../db/generateToken.js";
// import { Register } from "../models/RegistrationForm/Register.model.js";
// import jwt from "jsonwebtoken";
// import { uploadImage } from "../utils/cloudinary.js"; // Importing the image upload function

// const registerUser = asyncHandler(async (req, res) => {
//   const { name, email, password, profile, registration_id, image } = req.body; // Including 'image' field in request body

//   const registerValues = await Register.findOne({ email });
//   let registerId;
//   if (registerValues) {
//     registerId = registerValues._id;
//   } else {
//     throw new ApiError(400, "registerId can't be captured");
//   }

//   if (!name || !email || !password || !registration_id) {
//     // Updated condition to include 'registration_id'
//     throw new ApiError(400, "All fields are required");
//   }

//   const userExists = await User.findOne({ email });

//   if (userExists) {
//     throw new ApiError(400, "User already exists");
//   }

//   let imageUrl = null;
//   if (image) {
//     // If image is provided, upload it to cloudinary and get the URL
//     imageUrl = await uploadImage(image);
//   }

//   const user = await User.create({
//     name,
//     email,
//     password,
//     registration_id: registerId,
//     profile,
//     image: imageUrl, // Saving the image URL in the 'image' field of the user document
//   });

//   const token = generateToken(user._id);
//   res.cookie("jwt", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 3 });

//   res.status(201).json({
//     _id: user._id,
//     name: user.name,
//     email: user.email,
//     profile: user.profile,
//     registration_id: registerId,
//     image: imageUrl, // Including the image URL in the response
//     token: token,
//   });
// });
//------------------------------------------------------------>

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).populate("registration_id");

  const token = generateToken(user._id);
  res.cookie("jwt", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 3 });

  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      registration_id: user.registration_id,
      profile: user.profile,
      token: token,
    });
  } else {
    throw new ApiError(400, "Invalid Email or Password");
  }
});

//---------------------------------------------------------------->

const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  console.log(keyword);
  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});

//-------------------------------------------------->

const getUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      try {
        if (err) {
          console.log("Error occur at verifying the token : ", err);
          res.json(null);
        } else {
          let user = await User.findById(decodedToken.id).populate(
            "registration_id"
          );
          res.json({ user });
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        res.json(null);
      } finally {
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

export { registerUser, authUser, allUsers, getUser };
