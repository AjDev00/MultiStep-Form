import { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AppContext } from "../../App";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

export default function HomeButtons() {
  const history = useHistory();
  const { nameInput, emailInput, phoneInput, setError } =
    useContext(AppContext);

  function toPlan() {
    if (nameInput === "" || emailInput === "" || phoneInput === "") {
      setError("This field cannot be empty");
    } else {
      history.push("/plan");
    }
  }

  function giveWarning() {
    toast.error("Go through 2.", {
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
        <div className="cursor-pointer border border-transparent p-2 w-10 h-10 items-center justify-center flex font-bold rounded-full bg-teal-100">
          1
        </div>
        <div
          onClick={toPlan}
          className="cursor-pointer border-white border-2 p-2 w-10 h-10 items-center justify-center flex font-bold rounded-full text-white"
        >
          2
        </div>
        <div
          onClick={giveWarning}
          className="cursor-pointer border-white border-2 p-2 w-10 h-10 items-center justify-center flex font-bold rounded-full text-white"
        >
          3
        </div>
        <div className="cursor-pointer border-white border-2 p-2 w-10 h-10 items-center justify-center flex font-bold rounded-full text-white">
          4
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
