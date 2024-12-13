import "./App.css";
import add from "./Add";
import { useEffect, useState } from "react";

function App() {
  const [string, setString] = useState(`//[**][+]\\n3+7**8`);
  const [answer, setAnswer] = useState("18");
  const [preview, setPreview] = useState(answer);
  useEffect(() => {
    setPreview(add(string.replace("\\n", "\n")).toString());
  }, [string]);

  return (
    <div className="App">
      <div className="">
        <text>Input</text>
        <input
          value={string}
          onChange={(s) => setString(s.target.value)}
        ></input>
        <text>{preview.toString()}</text>
      </div>
      <text>{answer.toString()}</text>

      <button
        onClick={() => {
          const c = add(string.replace("\\n", "\n"));
          console.log(c);
          setAnswer(c.toString());
        }}
      >
        Calculate
      </button>
    </div>
  );
}

export default App;
