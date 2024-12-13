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
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <div className="top self-center items-center">
        <h1 className="text-6xl">Input</h1>
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
