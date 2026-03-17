/**
 * Base URL for your backend API.
 * Set VITE_API_URL in your .env or environment variables.
 * Example: VITE_API_URL=https://api.teleco.com.gh
 */
const API_URL = import.meta.env.VITE_API_URL || "";

interface FormPayload {
  type: "contact" | "start_project" | "ask_question" | "career_application";
  [key: string]: unknown;
}

export async function submitForm(payload: FormPayload): Promise<boolean> {
  if (!API_URL) {
    console.warn("[Teleco] VITE_API_URL not set — form submission logged to console only.");
    console.log("[Teleco] Form data:", payload);
    return true;
  }

  try {
    const res = await fetch(`${API_URL}/api/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error(`[Teleco] Form submit failed: ${res.status}`);
      return false;
    }

    return true;
  } catch (err) {
    console.error("[Teleco] Form submit error:", err);
    return false;
  }
}
