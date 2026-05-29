import { useState } from "react";

function Mood() {
  const [mood, setMood] = useState("😊");

  return (
    <div>
      <h1>Mood Tracker</h1>
      <h2>{mood}</h2>

      <button onClick={() => setMood("😊")}>Happy</button>
      <button onClick={() => setMood("😢")}>Sad</button>
      <button onClick={() => setMood("😡")}>Angry</button>
    </div>
  );
}

export default Mood;