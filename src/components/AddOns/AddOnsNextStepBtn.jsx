import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

export default function AddOnsNextStepBtn({
  isOnlineChecked,
  isProfileChecked,
  isLargerChecked,
}) {
  const history = useHistory();

  function handleNextStep() {
    // if (isOnlineChecked && isProfileChecked && isLargerChecked) {
    //   toast.error("Please pick add-ons.", {
    //     position: "top-right",
    //     autoClose: 5000,
    //   });
    // } else {
    history.push("/finish");
    // }
  }

  function goBack() {
    history.go(-1);
  }

  return (
    <div>
      <div className="flex flex-row justify-between px-5 mt-28 pb-10">
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
            className="cursor-pointer border border-blue-950 text-white font-bold p-3 rounded-md bg-blue-950"
          >
            Next Step
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
