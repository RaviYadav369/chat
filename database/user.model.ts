import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  saved: Schema.Types.ObjectId[];
  joinedAt: Date;
}

const userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String },
  joinedAt: { type: Date, default: Date.now },
});

const User = models.User || model<IUser>("User", userSchema);

export default User;
