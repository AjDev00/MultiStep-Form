import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { useContext, useRef, useState } from "react";
import { AppContext } from "../App";
import PlanNextStepBtn from "./Plan/PlanNextStepBtn";
import Toggle from "./Plan/Toggle";
import PlanYearlyInfo from "./PlanYearlyInfo";

export default function PlanInfo() {
  const arcadeRef = useRef(null);
  const advancedRef = useRef(null);
  const proRef = useRef(null);

  const { planType, setPlanType, planPayment, setPlanPayment, isToggled } =
    useContext(AppContext);

  function handleArcadeClick() {
    arcadeRef.current.style.border = "1px solid blue";
    arcadeRef.current.style.backgroundColor = "rgb(245 245 245)";
    advancedRef.current.style.border = "1px solid rgb(203 213 225)";
    advancedRef.current.style.backgroundColor = "white";
    proRef.current.style.border = "1px solid rgb(203 213 225)";
    proRef.current.style.backgroundColor = "white";
    setPlanType(arcadeRef.current.children[1].firstChild.innerText);
    setPlanPayment(
      arcadeRef.current.children[1].lastElementChild.children[1].innerText
    );
    // setPlanPayment(
    //   arcadeRef.current.children[1].firstChild.nextElementSibspanng.innerText
    // );
    console.log(planType);
    console.log(planPayment);
  }

  function handleAdvancedClick() {
    advancedRef.current.style.border = "1px solid blue";
    advancedRef.current.style.backgroundColor = "rgb(245 245 245)";
    arcadeRef.current.style.border = "1px solid rgb(203 213 225)";
    arcadeRef.current.style.backgroundColor = "white";
    proRef.current.style.border = "1px solid rgb(203 213 225)";
    proRef.current.style.backgroundColor = "white";
    setPlanType(advancedRef.current.children[1].firstChild.innerText);
    setPlanPayment(
      advancedRef.current.children[1].lastElementChild.children[1].innerText
    );
    console.log(planType);
    console.log(planPayment);
  }

  function handleProClick() {
    proRef.current.style.border = "1px solid blue";
    proRef.current.style.backgroundColor = "rgb(245 245 245)";
    arcadeRef.current.style.border = "1px solid rgb(203 213 225)";
    arcadeRef.current.style.backgroundColor = "white";
    advancedRef.current.style.border = "1px solid rgb(203 213 225)";
    advancedRef.current.style.backgroundColor = "white";
    setPlanType(proRef.current.children[1].firstChild.innerText);
    setPlanPayment(
      proRef.current.children[1].lastElementChild.children[1].innerText
    );
    console.log(planType);
    console.log(planPayment);
  }

  return (
    <div>
      <div className="border border-white bg-white px-5 py-10 w-80 ml-5 mt-12 rounded-md min-[375px]:ml-9 min-[414px]:ml-8 min-[414px]:w-[350px] shadow-md md:mt-0 md:border-none md:bg-transparent md:shadow-none md:py-0">
        <h4 className="text-2xl mb-2 font-bold">Select your plan</h4>
        <p
          style={{ fontSize: "18px" }}
          className="opacity-50 mb-8 md:text-nowrap"
        >
          You have the option of monthly or yearly bilspanng.
        </p>
        <div>
          {isToggled ? (
            <div>
              <PlanYearlyInfo />
            </div>
          ) : (
            <div className="flex flex-col gap-4 md:flex-row">
              {/* //arcade. */}
              <div
                onClick={handleArcadeClick}
                className="flex flex-row border border-slate-300 p-4 gap-4 rounded-md cursor-pointer md:flex-col md:pr-16 md:gap-14"
                ref={arcadeRef}
              >
                <div>
                  <img src={arcade} alt="" className="w-12 md:w-9 " />
                </div>
                <div className="flex flex-col gap-1">
                  <span
                    value="Arcade"
                    style={{ fontSize: "18px" }}
                    className="font-bold text-blue-950"
                  >
                    Arcade
                  </span>
                  <span style={{ fontSize: "18px" }} className="opacity-50">
                    <span>$</span>
                    <span>9</span>
                    <span>/mo</span>
                  </span>
                  {/* {planType}
                  {planPayment} */}
                </div>
              </div>

              {/* //advanced. */}
              <div
                onClick={handleAdvancedClick}
                className="flex flex-row border border-slate-300 p-4 gap-4 rounded-md cursor-pointer md:flex-col md:pr-16 md:gap-14"
                ref={advancedRef}
              >
                <div>
                  <img src={advanced} alt="" className="w-12 md:w-9" />
                </div>
                <div className="flex flex-col gap-1">
                  <span
                    style={{ fontSize: "18px" }}
                    className="font-bold text-blue-950"
                  >
                    Advanced
                  </span>
                  <span style={{ fontSize: "18px" }} className="opacity-50">
                    <span>$</span>
                    <span>12</span>
                    <span>/mo</span>
                  </span>
                </div>
              </div>

              {/* //pro. */}
              <div
                onClick={handleProClick}
                className="flex flex-row border border-slate-300 p-4 gap-4 rounded-md cursor-pointer md:flex-col md:pr-16 md:gap-14"
                ref={proRef}
              >
                <div>
                  <img src={pro} alt="" className="w-12 md:w-9" />
                </div>
                <div className="flex flex-col gap-1">
                  <span
                    style={{ fontSize: "18px" }}
                    className="font-bold text-blue-950"
                  >
                    Pro
                  </span>
                  <span style={{ fontSize: "18px" }} className="opacity-50">
                    <span>$</span>
                    <span>15</span>
                    <span>/mo</span>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* //Toggle monthly/yearly. */}
        <div>
          <Toggle />
        </div>
      </div>
      <div>
        <PlanNextStepBtn />
      </div>
    </div>
  );
}
