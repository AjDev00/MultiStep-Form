import { useContext } from "react";
import { AppContext } from "../../App";
import { useRef, useState } from "react";

export default function AddOnsYearly() {
  const {
    onlineType,
    setOnlineType,
    onlineAmount,
    setOnlineAmount,
    largerType,
    setLargerType,
    largerAmount,
    setLargerAmount,
    profileType,
    setProfileType,
    profileAmount,
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
    // console.log(isChecked);
    // setIsChecked(false);
    if (isOnlineChecked) {
      onlineRef.current.style.border = "1px solid blue";
      onlineRef.current.style.backgroundColor = "rgb(245 245 245)";
      setOnlineType(
        onlineRef.current.children[1].firstChild.firstChild.innerText
      );
      setOnlineAmount(
        onlineRef.current.children[1].children[1].children[2].innerText
      );
      console.log(onlineType);
      console.log(onlineAmount);
    } else {
      onlineRef.current.style.border = "1px solid rgb(203 213 225)";
      onlineRef.current.style.backgroundColor = "white";
    }
  }

  function handleLargerClick() {
    // console.log(isChecked);
    // setIsChecked(false);
    if (isLargerChecked) {
      largerRef.current.style.border = "1px solid blue";
      largerRef.current.style.backgroundColor = "rgb(245 245 245)";
      setLargerType(
        largerRef.current.children[1].firstChild.firstChild.innerText
      );
      setLargerAmount(
        largerRef.current.children[1].children[1].children[2].innerText
      );
      console.log(largerType);
      console.log(largerAmount);
    } else {
      largerRef.current.style.border = "1px solid rgb(203 213 225)";
      largerRef.current.style.backgroundColor = "white";
    }
  }

  function handleProfileClick() {
    // console.log(isChecked);
    // setIsChecked(false);
    if (isProfileChecked) {
      profileRef.current.style.border = "1px solid blue";
      profileRef.current.style.backgroundColor = "rgb(245 245 245)";
      setProfileType(
        profileRef.current.children[1].firstChild.firstChild.innerText
      );
      setProfileAmount(
        profileRef.current.children[1].children[1].children[2].innerText
      );
      console.log(profileType);
      console.log(profileAmount);
    } else {
      profileRef.current.style.border = "1px solid rgb(203 213 225)";
      profileRef.current.style.backgroundColor = "white";
    }
  }

  return (
    <div>
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
              <span>10</span>
              <span>/yr</span>
            </span>
          </div>
          {/* <div>
            {!isOnlineChecked && onlineType ? onlineType : ""}
            {!isOnlineChecked && onlineAmount ? onlineAmount : ""}
          </div> */}
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
              <span>20</span>
              <span>/yr</span>
            </span>
          </div>
          {/* <div>
            {!isLargerChecked && largerType ? onlineType : ""}
            {!isLargerChecked && largerAmount ? onlineAmount : ""}
          </div> */}
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
              <h6 className="font-bold text-blue-950">Customizable profile</h6>
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
              <span>20</span>
              <span>/yr</span>
            </span>
          </div>
          {/* <div>
            {!isProfileChecked && profileType ? onlineType : ""}
            {!isProfileChecked && profileAmount ? onlineAmount : ""}
          </div> */}
        </div>
      </div>
    </div>
  );
}
