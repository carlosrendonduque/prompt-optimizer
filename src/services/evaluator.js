const backendUrl = "https://prompt-optimizer-backend.onrender.com/api/evaluate"; 

export const evaluatePrompt = async (prompt) => {
  try {
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error evaluating prompt:", error);
    throw error;
  }
};
