import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function FinishBtn() {
  const history = useHistory();

  function toHome() {
    history.push("/");
  }

  function toAddOns() {
    history.push("/add-ons");
  }

  function toPlan() {
    history.push("/plan");
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
        <div
          onClick={toPlan}
          className="cursor-pointer border-2 border-white p-2 w-10 h-10 items-center justify-center flex font-bold rounded-full text-white"
        >
          2
        </div>
        <div
          onClick={toAddOns}
          className="cursor-pointer border-white border-2 p-2 w-10 h-10 items-center justify-center flex font-bold rounded-full text-white"
        >
          3
        </div>
        <div className="cursor-pointer border-transparent border p-2 w-10 h-10 items-center justify-center flex font-bold rounded-full bg-teal-100">
          4
        </div>
      </div>
    </div>
  );
}
