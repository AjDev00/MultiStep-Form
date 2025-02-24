import { useContext } from "react";
import AddOnsNextStepBtn from "./AddOnsNextStepBtn";
import AddOnsYearly from "./AddOnsYearly";
import { AppContext } from "../../App";
import { useRef, useState } from "react";

export default function AddOnsMonthly() {
  const {
    isToggled,
    setOnlineType,
    setOnlineAmount,
    setLargerType,
    setLargerAmount,
    setProfileType,
    setProfileAmount,
  } = useContext(AppContext);

  const onlineRef = useRef(null);
  const largerRef = useRef(null);
  const profileRef = useRef(null);
  const [isOnlineChecked, setIsOnlineChecked] = useState(true);
  const [isLargerChecked, setIsLargerChecked] = useState(true);
  const [isProfileChecked, setIsProfileChecked] = useState(true);

  function handleIsOnlineChecked() {
    setIsOnlineChecked(!isOnlineChecked);
  }

  function handleIsLargerChecked() {
    setIsLargerChecked(!isLargerChecked);
  }

  function handleIsProfileChecked() {
    setIsProfileChecked(!isProfileChecked);
  }

  function handleOnlineClick() {
    if (isOnlineChecked) {
      onlineRef.current.style.border = "1px solid blue";
      onlineRef.current.style.backgroundColor = "rgb(245 245 245)";
      setOnlineType(
        onlineRef.current.children[1].firstChild.firstChild.innerText
      );
      setOnlineAmount(
        onlineRef.current.children[1].children[1].children[2].innerText
      );
    } else {
      onlineRef.current.style.border = "1px solid rgb(203 213 225)";
      onlineRef.current.style.backgroundColor = "white";
    }
  }

  function handleLargerClick() {
    if (isLargerChecked) {
      largerRef.current.style.border = "1px solid blue";
      largerRef.current.style.backgroundColor = "rgb(245 245 245)";
      setLargerType(
        largerRef.current.children[1].firstChild.firstChild.innerText
      );
      setLargerAmount(
        largerRef.current.children[1].children[1].children[2].innerText
      );
    } else {
      largerRef.current.style.border = "1px solid rgb(203 213 225)";
      largerRef.current.style.backgroundColor = "white";
    }
  }

  function handleProfileClick() {
    if (isProfileChecked) {
      profileRef.current.style.border = "1px solid blue";
      profileRef.current.style.backgroundColor = "rgb(245 245 245)";
      setProfileType(
        profileRef.current.children[1].firstChild.firstChild.innerText
      );
      setProfileAmount(
        profileRef.current.children[1].children[1].children[2].innerText
      );
    } else {
      profileRef.current.style.border = "1px solid rgb(203 213 225)";
      profileRef.current.style.backgroundColor = "white";
    }
  }

  return (
    <div>
      <div className="md:border-none md:bg-none md:shadow-none border border-white bg-white w-80 ml-5 p-4 py-7 px-5 rounded-md shadow-lg mt-12 h-[540px] min-[375px]:ml-9 min-[414px]:ml-8 min-[414px]:w-[350px] md:py-0 md:ml-0 md:mt-2 md:h-0">
        <h4 className="font-bold text-2xl text-blue-950">Pick add-ons</h4>
        <p className="opacity-45 font-semibold mt-3 mb-6 md:text-nowrap">
          Add-ons help enhance your gaming experience.
        </p>
        <div className="">
          {isToggled ? (
            <div>
              <AddOnsYearly />
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {/* //Online service. */}
              <div
                onClick={handleOnlineClick}
                ref={onlineRef}
                className="flex flex-row items-center border border-slate-300 p-5 rounded-md w-72 -ml-1 min-[414px]:w-80 md:w-[500px]"
              >
                <input
                  onClick={handleIsOnlineChecked}
                  type="checkbox"
                  name=""
                  id=""
                  className="-ml-2 h-5 w-5 rounded-full cursor-pointer"
                />
                <div className="flex flex-row justify-center items-center">
                  <div className="flex flex-col ml-4">
                    <h6 className="font-bold text-blue-950">Online service</h6>
                    <p
                      style={{ fontSize: "15px" }}
                      className="font-semibold opacity-45 md:text-nowrap"
                    >
                      Access to multiplayer games
                    </p>
                  </div>
                  <span
                    style={{ fontSize: "14px" }}
                    className=" text-blue-800 min-[414px]:ml-12 md:ml-48"
                  >
                    <span>+</span>
                    <span>$</span>
                    <span>1</span>
                    <span>/mo</span>
                  </span>
                </div>
              </div>

              {/* //larger storage. */}
              <div
                onClick={handleLargerClick}
                ref={largerRef}
                className="flex flex-row items-center border border-slate-300 p-5 rounded-md w-72 -ml-1 min-[414px]:w-80 md:w-[500px]"
              >
                <input
                  onClick={handleIsLargerChecked}
                  type="checkbox"
                  name=""
                  id=""
                  className="-ml-2 h-5 w-5 rounded-full cursor-pointer"
                />
                <div className="flex flex-row justify-center items-center">
                  <div className="flex flex-col ml-4">
                    <h6 className="font-bold text-blue-950">Larger storage</h6>
                    <p
                      style={{ fontSize: "15px" }}
                      className="font-semibold opacity-45 text-wrap md:text-nowrap"
                    >
                      Extra 1TB of cloud save
                    </p>
                  </div>
                  <span
                    style={{ fontSize: "14px" }}
                    className=" text-blue-800 ml-12 md:ml-56"
                  >
                    <span>+</span>
                    <span>$</span>
                    <span>2</span>
                    <span>/mo</span>
                  </span>
                </div>
              </div>

              {/* //Customizable profile. */}
              <div
                onClick={handleProfileClick}
                ref={profileRef}
                className="flex flex-row items-center border border-slate-300 p-5 rounded-md w-72 -ml-1 min-[414px]:w-80 md:w-[500px]"
              >
                <input
                  onClick={handleIsProfileChecked}
                  type="checkbox"
                  name=""
                  id=""
                  className="-ml-2 h-5 w-5 rounded-full cursor-pointer"
                />
                <div className="flex flex-row justify-center items-center">
                  <div className="flex flex-col ml-4">
                    <h6 className="font-bold text-blue-950">
                      Customizable profile
                    </h6>
                    <p
                      style={{ fontSize: "15px" }}
                      className="font-semibold opacity-45 md:text-nowrap"
                    >
                      Custom theme on your profile
                    </p>
                  </div>
                  <span
                    style={{ fontSize: "14px" }}
                    className=" text-blue-800 md:ml-44"
                  >
                    <span>+</span>
                    <span>$</span>
                    <span>2</span>
                    <span>/mo</span>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <AddOnsNextStepBtn />
      </div>
    </div>
  );
}
