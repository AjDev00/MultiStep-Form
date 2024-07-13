import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import FinishNextStepBtn from "./FinishNextStepBtn";

export default function FinishPage() {
  const {
    planType,
    planPayment,
    onlineType,
    onlineAmount,
    largerType,
    largerAmount,
    profileType,
    profileAmount,
    isToggled,
    setOnlineType,
    setOnlineAmount,
    setLargerType,
    setLargerAmount,
    setProfileType,
    setProfileAmount,
  } = useContext(AppContext);

  const history = useHistory();

  function handleChange() {
    history.push("/plan");
    setOnlineType("");
    setOnlineAmount("");
    setLargerType("");
    setLargerAmount("");
    setProfileType("");
    setProfileAmount("");
  }

  return (
    <div>
      <div className="border border-white bg-white h-[430px] w-80 ml-5 p-4 py-7 px-5 rounded-md shadow-lg min-[375px]:ml-9 min-[414px]:ml-12 mt-12">
        <h4 className="font-bold text-2xl text-blue-950">Finishing up</h4>
        <p className="opacity-45 font-semibold mt-3 mb-6">
          Double-check everything looks OK before confirming.
        </p>
        <div className="flex flex-col gap-4 border border-transparent bg-slate-100 p-4 rounded-md">
          <div className="flex flex-row justify-between px-0 items-center">
            <div className="flex flex-col">
              <div
                style={{ fontSize: "16px" }}
                className="flex flex-row gap-1 font-bold text-blue-950 tracking-tight"
              >
                <div>{planType ? planType : ""}</div>
                <span>{isToggled ? "(Yearly)" : "(Monthly)"}</span>
              </div>
              <span
                onClick={handleChange}
                className="underline opacity-50 font-bold cursor-pointer"
              >
                Change
              </span>
            </div>
            <div
              style={{ fontSize: "16px" }}
              className="font-bold text-blue-950"
            >
              {planPayment ? planPayment : ""}
            </div>
          </div>
          <div>
            <hr className="opacity-100" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between px-0">
              <div className="font-semibold opacity-50">
                {onlineType ? onlineType : ""}
              </div>
              <div className="font-semibold text-blue-950">
                {onlineAmount ? onlineAmount : ""}
              </div>
            </div>
            <div className="flex flex-row justify-between px-0">
              <div className="font-semibold opacity-50">
                {largerType ? largerType : ""}
              </div>
              <div className="font-semibold text-blue-950">
                {largerAmount ? largerAmount : ""}
              </div>
            </div>
            <div className="flex flex-row justify-between px-0">
              <div className="font-semibold opacity-50">
                {profileType ? profileType : ""}
              </div>
              <div className="font-semibold text-blue-950">
                {profileAmount ? profileAmount : ""}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between px-4 pt-5">
          <div className="opacity-50 font-semibold">
            Total {isToggled ? "(per year)" : "(per month)"}
          </div>
          <div style={{ fontSize: "17px" }} className="text-blue-800 font-bold">
            +$120/yr
          </div>
        </div>
      </div>
      <div>
        <FinishNextStepBtn />
      </div>
    </div>
  );
}
