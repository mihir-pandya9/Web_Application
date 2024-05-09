import express from "express";
import { Server } from "socket.io";
import http from "http";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import { userRouter } from "./Routes/userRouter.route.js";
import { notFound } from "./middleware/error.middleware.js";
import { chatRouter } from "./Routes/chatRouter.route.js";
import { dietRouter } from "./Routes/diet.router.js";
import cookieParser from "cookie-parser";
import { requireAuth } from "./middleware/authantication.middleware.js";
import { aiChatRouter } from "./Routes/aichat.route.js";
import { workoutRouter } from "./Routes/workout.route.js";
import { yogaRouter } from "./Routes/yoga.route.js";
import { aiRouter } from "./Routes/AiRouter.route.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});

connectDB();

app.use(express.static("public"));

app.use(express.json());

app.use(cookieParser());

app.use("/api/diet", requireAuth, dietRouter);

app.use("/api/login", userRouter);

app.use("/api/chat", chatRouter);

app.use("/api/login/aichat", aiChatRouter);

app.use("/api/workout", workoutRouter);

app.use("/api/yoga", yogaRouter);

app.use("http://127.0.01:5000/generate_workout", aiRouter);

app.use(notFound);

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
  });
});

server.listen(PORT, () => {
  console.log(`Server is ruuning on port ${PORT}`);
});
