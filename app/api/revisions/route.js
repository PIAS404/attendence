import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data/db.json");

export async function GET() {
  const data = JSON.parse(fs.readFileSync(filePath));
  return Response.json(data);
}

export async function POST(req) {
  const body = await req.json();
  const data = JSON.parse(fs.readFileSync(filePath));

  data.revisions.push(body);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return Response.json({ success: true });
}
