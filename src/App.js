import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = async () => {
    setLoading(true);
    setDisplayText("");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setDisplayText(text);
    setLoading(false);
  };

  return (
    <div className="app">
      <div className="card">
        <h2>React Event & Async Handling</h2>

        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={handleChange}
        />

        <button onClick={handleClick}>Submit</button>

        {loading && <p className="loading">Loading...</p>}
        {!loading && displayText && (
          <p className="result">You typed: {displayText}</p>
        )}
      </div>
    </div>
  );
}

export default App;
