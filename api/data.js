import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(MONGO_URI);
  isConnected = true;
}

const Attendance = mongoose.models.Attendance || mongoose.model("Attendance", {
  date: String,
  status: String
});

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    const data = await Attendance.find();
    return res.json(data);
  }

  if (req.method === "POST") {
    const { date, status } = req.body;

    await Attendance.findOneAndUpdate(
      { date },
      { status },
      { upsert: true }
    );

    return res.json({ success: true });
  }
}
