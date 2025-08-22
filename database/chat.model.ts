import { Schema, models, model, Document } from "mongoose";

export interface IChat extends Document {
  messageId: Schema.Types.ObjectId;
  senderId: Schema.Types.ObjectId;
  receiverIds: Schema.Types.ObjectId[];
  createdAt: Date;
}

const chatSchema = new Schema({
  messageId: { type: Schema.Types.ObjectId, ref: "Message", require: true },
  senderId: { type: Schema.Types.ObjectId, ref: "User" },
  receiverIds: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
});

const Chat = models.Chat || model<IChat>("Answer", chatSchema);

export default Chat;
