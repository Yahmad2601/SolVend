// api/index.ts
import express, { type Express } from "express";
import "dotenv/config";

const app: Express = express();
app.use(express.json());

let waitlistCount = 0;

async function fetchInitialCount() {
  const { BREVO_API_KEY, BREVO_LIST_ID } = process.env;
  if (!BREVO_API_KEY || !BREVO_LIST_ID) {
    console.warn("Brevo env vars not set. Count starts at 0.");
    return 0;
  }
  try {
    const response = await fetch(
      `https://api.brevo.com/v3/contacts/lists/${BREVO_LIST_ID}`,
      { headers: { "api-key": BREVO_API_KEY } }
    );
    if (!response.ok) {
      console.error("Failed to fetch initial count from Brevo.");
      return 0;
    }
    const data = await response.json();
    return data.totalSubscribers || 0;
  } catch (error) {
    console.error("Error fetching initial count:", error);
    return 0;
  }
}

// Fetch the initial count when the serverless function starts
fetchInitialCount().then((count) => {
  waitlistCount = count;
  console.log(`Initial waitlist count loaded: ${waitlistCount}`);
});

app.get("/api/waitlist-count", (_req, res) => {
  res.status(200).json({ count: waitlistCount });
});

app.post("/api/subscribe", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !email.includes("@")) {
      return res.status(400).json({ message: "Invalid email provided." });
    }

    const { BREVO_API_KEY, BREVO_LIST_ID } = process.env;
    if (!BREVO_API_KEY || !BREVO_LIST_ID) {
      console.error("Server configuration error: Brevo API keys are missing.");
      return res.status(500).json({ message: "Server configuration error." });
    }

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
      console.error("Failed to subscribe with Brevo:", errorData);
      return res
        .status(brevoResponse.status)
        .json({ message: "Failed to subscribe.", details: errorData });
    }

    waitlistCount++;
    return res.status(201).json({ message: "Successfully subscribed!" });
  } catch (error) {
    console.error("An unexpected error occurred in /api/subscribe:", error);
    return res.status(500).json({ message: "An unexpected error occurred." });
  }
});

export default app;
