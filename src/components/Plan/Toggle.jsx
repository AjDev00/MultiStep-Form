import { useContext, useState } from "react";
import "../../App.css";
import { AppContext } from "../../App";

const Toggle = () => {
  const { isToggled, handleToggle } = useContext(AppContext);

  return (
    <div>
      <div className="flex flex-row justify-between px-6 items-center mt-10 border border-transparent bg-gray-100 p-4 rounded-md">
        <span style={{ fontSize: "16px" }} className="font-bold text-blue-950">
          Monthly
        </span>
        <div className="relative w-12 duration-700">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            checked={isToggled}
            onChange={handleToggle}
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 rounded-full cursor-pointer"
          ></label>
        </div>
        <span style={{ fontSize: "16px" }} className="opacity-45 font-bold">
          Yearly
        </span>
      </div>
    </div>
  );
};

export default Toggle;
