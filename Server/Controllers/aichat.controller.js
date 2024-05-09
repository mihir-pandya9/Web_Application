import asyncHandler from "express-async-handler";
import ApiError from "../utils/ApiError.js";
import { User } from "../models/community-chat/user.model.js";
import jwt from "jsonwebtoken";
import { configureOpenAi } from "../config/openai.config.js";
import OpenAIApi from "openai";

const generateaiChat = asyncHandler(async (req, res) => {
  const { message } = req.body;

  if (!message) {
    throw new ApiError(400, "Message is required");
  }

  const token = req.cookies.jwt;

  if (!token) {
    throw new ApiError(401, "Authentication token is required");
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded Token : ", decodedToken);
    const user = await User.findById(decodedToken.userId);

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const chat = { content: message, role: "user" };
    user.chats.push(chat);

    const config = configureOpenAi();
    const openai = new OpenAIApi(config);
    const chatResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: user.chats.map(({ role, content }) => ({ role, content })),
    });

    const botResponse = chatResponse.data.choices[0].message;
    user.chats.push(botResponse);

    await user.save();

    // Sending back only the latest chat message for simplicity
    return res.status(200).json({ message: botResponse });
  } catch (err) {
    console.error("Error:", err);
    throw new ApiError(500, "Internal server error");
  }
});

export { generateaiChat };
