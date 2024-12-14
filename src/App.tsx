import add from "./Add";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FloatingCard } from "./ui/floating-card";
import { ConvertButton } from "./ui/convert-button";
import { Textarea } from "./ui/text-area";

export default function App() {
  const [input, setInput] = useState("//[***][.][xx]\n1***3.5xx9");
  const [output, setOutput] = useState("");
  // const [preview, setPreview] = useState(input);
  // useEffect(() => {
  //   setPreview(add(input.replace("\\n", "\n")).toString());
  // }, [input]);

  const handleConvert = () => {
    const c = add(input.replace("\\n", "\n"));
    console.log(c);
    setOutput(c.toString());
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <div className="absolute top-40">
        <motion.h1
          className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 4,
          }}
        >
          String Calculator
        </motion.h1>
      </div>
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 items-center">
        <motion.div
          className="w-full md:w-[45%]"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FloatingCard>
            <div className="space-y-4 px-2 py-2">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Input
              </h2>
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter text to convert..."
                className="min-h-[200px] resize-none bg-slate-100"
              />
              {/* <div className="p-4 bg-muted rounded-lg">
                <h3 className="text-sm font-medium mb-2">Preview</h3>
                <p className="text-sm text-muted-foreground">{preview}</p>
              </div> */}
            </div>
          </FloatingCard>
        </motion.div>

        <motion.div
          className="md:w-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ConvertButton onClick={handleConvert} />
        </motion.div>

        <motion.div
          className="w-full md:w-[45%]"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FloatingCard>
            <div className="space-y-4 px-2 py-2">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Output
              </h2>
              <Textarea
                value={output}
                readOnly
                className="min-h-[200px] resize-none bg-slate-100"
                placeholder="Converted text will appear here..."
              />
            </div>
          </FloatingCard>
        </motion.div>
      </div>
    </div>
  );
}
