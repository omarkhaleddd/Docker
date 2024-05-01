import React, { useState } from "react";
import apis from "./api/index.js";

function CountLettersPage() {
  const [inputString, setInputString] = useState("");
  const [responseValue, setResponseValue] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCountLetters = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apis.nodeCountString({ inputString });
      setResponseValue(response.value);
    } catch (error) {
      setError(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRepeat = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apis.nodeRepeat({ inputString });
      setResponseValue(response.value);
    } catch (error) {
      setError(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Count Letters & Write Characters</h1>
      <input
        type="text"
        placeholder="Enter a string"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
      />
      <button onClick={handleCountLetters} disabled={isLoading}>
        {isLoading ? "Loading..." : "Count Letters"}
      </button>
      <button onClick={handleRepeat} disabled={isLoading}>
        {isLoading ? "Loading..." : "Write Characters"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {responseValue && (
        <div>
          <p>Response from API:</p>
          <p>{responseValue}</p>
        </div>
      )}
    </div>
    
  );
}

export default CountLettersPage;
