import React from "react";
import "/src/index.css"; // Assuming your custom animations and variables are defined in this CSS file

const SlidingBar = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div
        className="relative min-h-[100px] rounded-[10px] shadow-lg"
        style={{
          width: calc(1 * sqrt(2 * pow(80, 2)) * 4),
          animation: "slide 4s linear infinite",
          backgroundColor: "#2c3e50",
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 40px, #f1c40f 40px, #f1c40f 80px)"
        }}
      ></div>
    </div>
  );
};

export default SlidingBar;