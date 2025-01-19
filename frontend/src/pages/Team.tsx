import React from "react";

function Team() {
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Test data
    const testPayload = {
      restaurant_type: "study cafe",
      team_size: "20",
      budget: "1000",
      priceRange: "25",
      latitude: 43.7757,
      longitude: 79.3451,
    };

    console.log("Test form submission data:", testPayload);

    try {
      const response = await fetch("http://localhost:8000/form-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testPayload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const result = await response.json();
      console.log("Analysis result:", result);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Team;
