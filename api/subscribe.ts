import type { VercelRequest, VercelResponse } from "@vercel/node";

async function fetchCountFromBrevo() {
  const { BREVO_API_KEY, BREVO_LIST_ID } = process.env;
  if (!BREVO_API_KEY || !BREVO_LIST_ID) {
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
    console.error("Error fetching count:", error);
    return 0;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const count = await fetchCountFromBrevo();
    return res.status(200).json({ count });
  } catch (error) {
    return res.status(500).json({ count: 0, message: "Error fetching count" });
  }
}
