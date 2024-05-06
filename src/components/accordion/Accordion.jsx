import { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    } else {
      setSelected(id);
    }
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className=" container bg-slate-100 overflow-auto md:p-5">
        <div className=" flex flex-col w-full  px-5 md:px-0 justify-center items-center">
          <h1 className=" py-5 font-bold md:font-extrabold md:text-3xl">
            Accordion
          </h1>
          {data.map((dataItems, id) => (
            <>
              <div className=" mb-5 container">
                <div
                  className="bg-red-200 text-base md:text-2xl font-bold p-5 flex justify-between pr-10 cursor-pointer"
                  onClick={() => toggle(id)}
                >
                  <h2>{dataItems.question}</h2>
                  <span>{selected === id ? "-" : "+"}</span>
                </div>

                <div
                  className={`text-sm bg-gray-300 py-3 opacity-70 p-5 ${
                    selected === id ? "none" : " hidden"
                  }`}
                >
                  <h2>{dataItems.answer}</h2>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
