import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

export default function PlanButtons() {
  const history = useHistory();

  function toHome() {
    history.push("/");
  }

  function toAddOns() {
    history.push("/add-ons");
  }

  function giveWarning() {
    toast.error("Go through 3.", {
      position: "bottom-right",
      autoClose: 5000,
    });
  }

  return (
    <div>
      <div
        style={{ fontSize: "16px" }}
        className="flex flex-row justify-center items-center gap-4 pt-12"
      >
        <div
          onClick={toHome}
          className="cursor-pointer border-white border-2 p-2 w-10 h-10 items-center justify-center flex font-bold rounded-full text-white"
        >
          1
        </div>
        <div className="cursor-pointer border border-transparent p-2 w-10 h-10 items-center justify-center flex font-bold rounded-full bg-teal-100">
          2
        </div>
        <div
          onClick={toAddOns}
          className="cursor-pointer border-white border-2 p-2 w-10 h-10 items-center justify-center flex font-bold rounded-full text-white"
        >
          3
        </div>
        <div
          onClick={giveWarning}
          className="cursor-pointer border-white border-2 p-2 w-10 h-10 items-center justify-center flex font-bold rounded-full text-white"
        >
          4
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
