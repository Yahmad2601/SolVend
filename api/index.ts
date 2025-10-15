// api/index.ts

import express, { type Express } from "express";
import "dotenv/config"; // Make sure to load environment variables

const app: Express = express();
app.use(express.json());

// In-memory store for the waitlist count.
let waitlistCount = 0;

// --- Helper function to get initial count from Brevo ---
async function fetchInitialCount() {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const BREVO_LIST_ID = process.env.BREVO_LIST_ID;

  if (!BREVO_API_KEY || !BREVO_LIST_ID) {
    console.warn("Brevo env vars not set. Count starts at 0.");
    return 0;
  }
  try {
    const response = await fetch(
      `https://api.brevo.com/v3/contacts/lists/${BREVO_LIST_ID}`,
      { headers: { "api-key": BREVO_API_KEY } }
    );
    if (!response.ok) return 0;
    const data = await response.json();
    return data.totalSubscribers || 0;
  } catch (error) {
    return 0;
  }
}

// Fetch the initial count when the serverless function starts
fetchInitialCount().then((count) => {
  waitlistCount = count;
  console.log(`Initial waitlist count loaded: ${waitlistCount}`);
});

// --- API Route to get the current waitlist count ---
app.get("/api/waitlist-count", (_req, res) => {
  res.status(200).json({ count: waitlistCount });
});

// --- API Route for email subscription ---
app.post("/api/subscribe", async (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Invalid email provided." });
  }

  const { BREVO_API_KEY, BREVO_LIST_ID } = process.env;
  if (!BREVO_API_KEY || !BREVO_LIST_ID) {
    return res.status(500).json({ message: "Server configuration error." });
  }

  try {
    const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        listIds: [parseInt(BREVO_LIST_ID, 10)],
        updateEnabled: true,
      }),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json();
      return res
        .status(brevoResponse.status)
        .json({ message: "Failed to subscribe.", details: errorData });
    }

    waitlistCount++;
    return res.status(201).json({ message: "Successfully subscribed!" });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred." });
  }
});

// Export the app for Vercel
export default app;
