import "./App.css";
import { useState } from "react";
import emojiData from "./assets/emojidata";

function App() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("Result Will Come Here");

  const userInputChangeHandler = (event) => {
    const emoji = event.target.value;
    setUserInput(emoji);
    const foundData = emojiData.find((e) => e.emoji === emoji);
    if (foundData) {
      setResult(`${foundData.description}`);
    } else {
      setResult(`No Emoji found`);
    }
  };

  return (
    <div className="App">
      <h1>😉 Emoji Lookup 😁</h1>
      <h3>
        Supports two categories of people and animals with
        <span style={{ color: "white" }}> {emojiData.length} </span>emojis
      </h3>
      <input
        placeholder="Enter Emoji To Saerch"
        onChange={userInputChangeHandler}
        value={userInput}
      ></input>
      <div className="result">
        <h3>{result}</h3>
      </div>
    </div>
  );
}

export default App;
