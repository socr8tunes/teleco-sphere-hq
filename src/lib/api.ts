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

/**
 * Submit a career application with file attachment (CV/resume).
 * Sends as multipart/form-data so the backend receives the actual file.
 * Backend endpoint: POST /api/career-apply
 */
export async function submitCareerApplication(
  fields: Record<string, string>,
  cvFile?: File | null
): Promise<boolean> {
  if (!API_URL) {
    console.warn("[Teleco] VITE_API_URL not set — career application logged to console only.");
    console.log("[Teleco] Career data:", fields);
    if (cvFile) console.log("[Teleco] CV file:", cvFile.name, `(${(cvFile.size / 1024).toFixed(1)} KB)`);
    return true;
  }

  try {
    const formData = new FormData();
    Object.entries(fields).forEach(([k, v]) => formData.append(k, v));
    if (cvFile) {
      formData.append("cv", cvFile, cvFile.name);
    }

    const res = await fetch(`${API_URL}/api/career-apply`, {
      method: "POST",
      body: formData, // No Content-Type header — browser sets multipart boundary automatically
    });

    if (!res.ok) {
      console.error(`[Teleco] Career submit failed: ${res.status}`);
      return false;
    }

    return true;
  } catch (err) {
    console.error("[Teleco] Career submit error:", err);
    return false;
  }
}
