import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

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
      return res.status(brevoResponse.status).json({
        message: "Failed to subscribe.",
        details: errorData,
      });
    }

    return res.status(201).json({ message: "Successfully subscribed!" });
  } catch (error) {
    console.error("An unexpected error occurred in /api/subscribe:", error);
    return res.status(500).json({
      message: "An unexpected error occurred.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
