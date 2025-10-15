import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, CheckCircle, Users } from "lucide-react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export default function EmailCTA() {
  const [email, setEmail] = useState("");
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");
  // --- UPDATE: State to hold the waitlist count ---
  const [count, setCount] = useState<number | null>(null);

  // --- UPDATE: useEffect to fetch the count when the component loads ---
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch("/api/waitlist-count");
        if (response.ok) {
          const data = await response.json();
          setCount(data.count);
        }
      } catch (error) {
        console.error("Failed to fetch waitlist count:", error);
      }
    };
    fetchCount();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionState("submitting");
    setMessage("");

    console.log("Submitting email:", email);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      // Check if response is JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Non-JSON response:", text);
        throw new Error("Server returned non-JSON response");
      }

      const data = await response.json();
      console.log("Response data:", data);

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setSubmissionState("success");
      setMessage("Thank you! You're on the list.");
      setEmail("");
      setCount((prevCount) => (prevCount !== null ? prevCount + 1 : 1));
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Failed to subscribe. Please try again."
      );
    }
  };

  return (
    <section
      className="bg-gray-50 dark:bg-gray-900/50 py-20 md:py-24"
      id="EmailCTA"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Be the First to Know
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Get notified as soon as the SolVend mobile app is available for
            download.
          </p>

          {submissionState === "success" ? (
            <div className="flex items-center justify-center gap-2 text-lg text-green-600 dark:text-green-400 font-semibold p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
              <CheckCircle className="w-6 h-6" />
              <p>{message}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow text-gray-900 dark:text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={submissionState === "submitting"}
              />
              <Button
                type="submit"
                size="lg"
                className="text-sm font-semibold h-auto bg-gray-900 text-white rounded-lg hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors"
                disabled={submissionState === "submitting"}
              >
                {submissionState === "submitting" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Notify Me <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          )}

          {/* --- UPDATE: This block displays the waitlist counter --- */}
          {count !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400"
            >
              <Users className="w-4 h-4" />
              <span>
                Join{" "}
                <span className="font-bold text-gray-700 dark:text-gray-200">
                  {count.toLocaleString()}
                </span>{" "}
                others on the waitlist!
              </span>
            </motion.div>
          )}

          {submissionState === "error" && (
            <p className="mt-3 text-sm text-red-600 dark:text-red-400">
              {message}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
