import { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("#000000");

  const randomHexColor = () => {
    let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * 6)];
    }
    setColor(hexColor);
  };

  
  return (
    <div className="border border-grey">
      <div className="w-full h-screen">
        <h1 className=" py-5 font-bold md:font-extrabold md:text-3xl text-center ">
          Random Color Generator
        </h1>

        <div
          style={{ background: color }}
          className="w-[90%] h-[90vh] m-auto border border-dotted"
        >
          <div className="flex justify-center items-center ">
            <button
              className=" px-2 py-1 bg-slate-200 rounded-md mt-5 "
              onClick={() => randomHexColor()}
            >
              Random Color Generator
            </button>
          </div>

          <h3 className="text-white text-center">Hex Code - {color}</h3>
        </div>
      </div>
    </div>
  );
};

export default RandomColor;
