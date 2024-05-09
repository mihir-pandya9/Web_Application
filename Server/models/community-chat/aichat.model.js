import mongoose, { Schema, mongo } from "mongoose";

const chatSchema = new Schema(
  {
    chats: [
      {
        role: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const botChat = mongoose.model("botChat", chatSchema);

export { botChat };
