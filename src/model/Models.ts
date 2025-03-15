import mongoose, { Schema } from "mongoose";
import { Message, User } from "./Interfaces";

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdDateTime: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username field is required !"],
    trim: true,
    unique: true,
  },
  emailAddress: {
    type: String,
    required: [true, "Email Address is required !"],
    trim: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please use a valid email address."],
  },
  password: {
    type: String,
    required: [true, "Password field is required !"],
    trim: true,
  },
  verificationCode: {
    type: String,
    required: [true, "Verfication code is required !"],
  },
  codeExpiry: {
    type: String,
    required: [true, "Verfication code expiry detail is required !"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessage: {
    type: Boolean,
    default: true,
  },
  messages: {
    type: [MessageSchema],
  },
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
