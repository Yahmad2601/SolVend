import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  try {
    // Parse body if it's a string
    let body = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch (e) {
        console.error("Failed to parse body:", e);
      }
    }

    const { email } = body;

    console.log("Received email:", email);

    if (!email || typeof email !== "string" || !email.includes("@")) {
      res.status(400).json({ message: "Invalid email provided." });
      return;
    }

    const { BREVO_API_KEY, BREVO_LIST_ID } = process.env;

    if (!BREVO_API_KEY || !BREVO_LIST_ID) {
      console.error("Brevo credentials missing");
      res.status(500).json({ message: "Server configuration error." });
      return;
    }

    console.log("Calling Brevo API...");

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

    console.log("Brevo response status:", brevoResponse.status);

    if (!brevoResponse.ok) {
      let errorData;
      try {
        errorData = await brevoResponse.json();
      } catch (e) {
        errorData = { message: "Failed to parse error response" };
      }
      console.error("Brevo API error:", errorData);
      res.status(brevoResponse.status).json({
        message: "Failed to subscribe.",
        details: errorData,
      });
      return;
    }

    console.log("Successfully subscribed:", email);
    res.status(201).json({ message: "Successfully subscribed!" });
    return;
  } catch (error) {
    console.error("Error in subscribe endpoint:", error);
    res.status(500).json({
      message: "An unexpected error occurred.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
    return;
  }
}

// Disable body parsing, let Vercel handle it
export const config = {
  api: {
    bodyParser: true,
  },
};
