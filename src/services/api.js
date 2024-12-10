const backendUrl = "https://prompt-optimizer-backend.onrender.com/api/generate";

export const fetchResponse = async (prompt, tone, length) => {
  const res = await fetch(backendUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, tone, length }),
  });

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  return res.json();
};
