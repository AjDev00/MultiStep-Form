import NextStepBtn from "./HomeNextStepBtn";
import { AppContext } from "../../App";
import { useContext } from "react";

export default function PersonalInfo() {
  const {
    nameInput,
    setNameInput,
    emailInput,
    setEmailInput,
    phoneInput,
    setPhoneInput,
    error,
    setError,
  } = useContext(AppContext);

  function handleChange(e) {
    setNameInput(e.target.value);
    setError("");
  }

  return (
    <div>
      <div className="font-bold rounded-md border border-white bg-white px-5 py-10 w-80 relative bottom-28 ml-5 min-[375px]:ml-9 min-[414px]:ml-8 min-[414px]:w-[350px] shadow-md">
        <h4 className="text-2xl mb-2">Personal Info</h4>
        <p style={{ fontSize: "18px" }} className="opacity-45 mb-8">
          Please provide your name, email, address and phone number.
        </p>
        <div className="flex flex-col">
          {/* //name input. */}
          <span>Name</span>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            className="border border-slate-300 p-2 rounded-sm mb-5 focus:outline-blue-950"
            onChange={handleChange}
            value={nameInput}
          />
          <span className="-mt-4 mb-4 text-red-500">{error ? error : ""}</span>

          {/* //email input. */}
          <span>Email Address</span>
          <input
            type="email"
            placeholder="e.g. stephenking@gmail.com"
            className="border border-slate-300 p-2 rounded-sm mb-5 focus:outline-blue-950"
            onChange={(e) => setEmailInput(e.target.value)}
            value={emailInput}
            required
          />
          <span className="-mt-4 mb-4 text-red-500">{error ? error : ""}</span>

          {/* //phone input. */}
          <span>Phone Number</span>
          <input
            type="text"
            placeholder="e.g. +1 234 567 890"
            className="border border-slate-300 p-2 rounded-sm focus:outline-blue-950"
            onChange={(e) => setPhoneInput(e.target.value)}
            value={phoneInput}
          />
          <span className="text-red-500">{error ? error : ""}</span>
        </div>
      </div>
      <div className="py-0">
        <NextStepBtn />
      </div>
    </div>
  );
}
