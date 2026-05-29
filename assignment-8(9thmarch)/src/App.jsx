import { useState } from "react";

function App() {
  const [mood, setMood] = useState("😊");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Mood Tracker</h1>

      <h2>Your Mood: {mood}</h2>

      <button onClick={() => setMood("😊")}>Happy</button>
      <button onClick={() => setMood("😢")}>Sad</button>
      <button onClick={() => setMood("😡")}>Angry</button>
      <button onClick={() => setMood("😴")}>Sleepy</button>
    </div>
  );
}

export default App;