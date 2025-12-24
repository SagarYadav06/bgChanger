import React from "react";

const Button = ({ changeBg }) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 
                    bg-white shadow-lg rounded-xl px-4 py-3 
                    flex gap-3">
      
      <button
        onClick={() => changeBg("red")}
        className="px-4 py-2 rounded-lg bg-red-500 text-white hover:scale-105 transition"
      >
        Red
      </button>

      <button
        onClick={() => changeBg("green")}
        className="px-4 py-2 rounded-lg bg-green-500 text-white hover:scale-105 transition"
      >
        Green
      </button>

      <button
        onClick={() => changeBg("blue")}
        className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:scale-105 transition"
      >
        Blue
      </button>

      <button
        onClick={() => changeBg("yellow")}
        className="px-4 py-2 rounded-lg bg-yellow-400 text-black hover:scale-105 transition"
      >
        Yellow
      </button>

      <button
        onClick={() => changeBg("black")}
        className="px-4 py-2 rounded-lg bg-black text-white hover:scale-105 transition"
      >
        Dark
      </button>

    </div>
  );
};

export default Button;
