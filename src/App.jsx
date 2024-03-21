import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      {/* Added missing comment */}
      {/* Container for color selection buttons */}
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-black"> 
          <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")} // corrected onClick function
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "red"}}>Red</button>

            <button
              onClick={() => setColor("blue")} // corrected onClick function
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "blue"}}>Blue</button>

            <button 
              onClick={() => setColor("green")} // corrected onClick function
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "green"}}>Green</button>

            <button 
              onClick={() => setColor("cyan")} // corrected onClick function
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "cyan"}}>Cyan</button>

            <button
              onClick={() => setColor("orange")} // corrected onClick function
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "orange"}}>Orange</button>

            <button
              onClick={() => setColor("black")} // corrected onClick function
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "black"}}>Black</button>

            <button
              onClick={() => setColor("pink")} // corrected onClick function
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "pink"}}>Pink</button>

            <button
              onClick={() => setColor("grey")} // corrected onClick function
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "grey"}}>Grey</button>

            <button
              onClick={() => setColor("brown")} // corrected onClick function
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "brown"}}>Brown</button>

            <button
              onClick={() => setColor("olive")} // corrected onClick function
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "olive"}}>Olive</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
