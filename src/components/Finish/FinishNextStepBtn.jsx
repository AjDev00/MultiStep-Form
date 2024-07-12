import { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AppContext } from "../../App";

export default function FinishNextStepBtn() {
  const history = useHistory();
  const {
    setOnlineType,
    setOnlineAmount,
    setLargerType,
    setLargerAmount,
    setProfileType,
    setProfileAmount,
  } = useContext(AppContext);

  function handleNextStep() {
    history.push("/confirm");
  }

  function goBack() {
    history.go(-1);
    setOnlineType("");
    setOnlineAmount("");
    setLargerType("");
    setLargerAmount("");
    setProfileType("");
    setProfileAmount("");
  }

  return (
    <div>
      <div className="flex flex-row justify-between px-5 mt-28 pb-20">
        <div>
          <span
            style={{ fontSize: "18px" }}
            className="opacity-45 font-semibold"
            onClick={goBack}
          >
            Go Back
          </span>
        </div>
        <div>
          <span
            onClick={handleNextStep}
            className="cursor-pointer border border-blue-800 text-white font-bold p-3 rounded-md bg-blue-800"
          >
            Confirm
          </span>
        </div>
      </div>
    </div>
  );
}
