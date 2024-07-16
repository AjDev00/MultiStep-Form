import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { useContext, useRef, useState } from "react";
import { AppContext } from "../App";

export default function PlanYearlyInfo() {
  const arcadeRef = useRef(null);
  const advancedRef = useRef(null);
  const proRef = useRef(null);

  const { planType, setPlanType, planPayment, setPlanPayment } =
    useContext(AppContext);

  function handleArcadeClick() {
    arcadeRef.current.style.border = "1px solid blue";
    arcadeRef.current.style.backgroundColor = "rgb(245 245 245)";
    advancedRef.current.style.border = "1px solid rgb(203 213 225)";
    advancedRef.current.style.backgroundColor = "white";
    proRef.current.style.border = "1px solid rgb(203 213 225)";
    proRef.current.style.backgroundColor = "white";
    setPlanPayment(
      arcadeRef.current.children[1].children[1].children[1].innerText
    );
    setPlanType(arcadeRef.current.children[1].firstChild.innerText);
  }

  function handleAdvancedClick() {
    advancedRef.current.style.border = "1px solid blue";
    advancedRef.current.style.backgroundColor = "rgb(245 245 245)";
    arcadeRef.current.style.border = "1px solid rgb(203 213 225)";
    arcadeRef.current.style.backgroundColor = "white";
    proRef.current.style.border = "1px solid rgb(203 213 225)";
    proRef.current.style.backgroundColor = "white";
    setPlanPayment(
      advancedRef.current.children[1].children[1].children[1].innerText
    );
    setPlanType(advancedRef.current.children[1].firstChild.innerText);
  }

  function handleProClick() {
    proRef.current.style.border = "1px solid blue";
    proRef.current.style.backgroundColor = "rgb(245 245 245)";
    arcadeRef.current.style.border = "1px solid rgb(203 213 225)";
    arcadeRef.current.style.backgroundColor = "white";
    advancedRef.current.style.border = "1px solid rgb(203 213 225)";
    advancedRef.current.style.backgroundColor = "white";
    setPlanPayment(
      proRef.current.children[1].children[1].children[1].innerText
    );
    setPlanType(proRef.current.children[1].firstChild.innerText);
  }

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div
          onClick={handleArcadeClick}
          className="flex flex-row border border-slate-300 p-4 gap-4 rounded-md cursor-pointer md:flex-col md:pr-10 md:gap-14"
          ref={arcadeRef}
        >
          <div>
            <img src={arcade} alt="" className="w-12 md:w-9" />
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
              <span>90</span>
              <span>/yr</span>
            </span>
            <span className="font-semibold text-blue-950 md:text-nowrap">
              2 months free
            </span>
          </div>
        </div>

        {/* //advanced. */}
        <div
          onClick={handleAdvancedClick}
          className="flex flex-row border border-slate-300 p-4 gap-4 rounded-md cursor-pointer md:flex-col md:pr-10 md:gap-14"
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
              <span>120</span>
              <span>/yr</span>
            </span>
            <span className="font-semibold text-blue-950 text-nowrap">
              2 months free
            </span>
          </div>
        </div>

        {/* //pro. */}
        <div
          onClick={handleProClick}
          className="flex flex-row border border-slate-300 p-4 gap-4 rounded-md cursor-pointer md:flex-col md:pr-10 md:gap-14"
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
              <span>150</span>
              <span>/yr</span>
            </span>
            <span className="font-semibold text-blue-950 md:text-nowrap">
              2 months free
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
