"use server";

import { connectToDb } from "../mongoose";

interface ParamsChat {
  senderId: string;
  receiverIds: string[];
  messageId: string;
}

export async function createChat(params: ParamsChat) {
  try {
    connectToDb();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
