import { NextResponse } from "next/server";
import { Server } from "socket.io";

let io;

export async function GET() {
  if (!io) {
    io = new Server({
      path: "/api/socket",
      addTrailingSlash: false,
    });

    io.on("connection", (socket) => {
      console.log("User connected:", socket.id);

      socket.on("message", (data) => {
        io.emit("message", {
          ...data,
          id: socket.id,
          timestamp: new Date().toISOString(),
        });
      });

      socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
      });
    });
  }

  return NextResponse.json({ status: "Socket.IO server ready" });
}

export async function POST(request) {
  const data = await request.json(); // Parse the incoming JSON data
  if (!data.message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }
  // Emit the message to all connected clients
  io.emit("message", {
    message: data.message,
    timestamp: new Date().toISOString(),
  });
  return NextResponse.json({ status: "Message sent", message: data.message });
}
