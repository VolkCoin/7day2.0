export default function handler(_req: any, res: any) {
  res.status(200).json({ message: process.env.PING_MESSAGE ?? "ping" });
}
