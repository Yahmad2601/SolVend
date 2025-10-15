// api/index.ts
import express, { type Express } from "express";

const app: Express = express();
app.use(express.json());

// A simple GET endpoint for testing
app.get("/api/waitlist-count", (_req, res) => {
  // We send back a fixed number for testing purposes
  res.status(200).json({ count: 123 });
});

// A simple POST endpoint for testing
app.post("/api/subscribe", (req, res) => {
  const { email } = req.body;
  console.log("Received email:", email); // This will show up in Vercel logs if it works

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  res.status(201).json({ message: "Successfully subscribed (test response)!" });
});

// Export the app for Vercel
export default app;
