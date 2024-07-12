import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function AddOnsBtn() {
  const history = useHistory();

  function toPlan() {
    history.push("/plan");
  }

  function toHome() {
    history.push("/");
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
        <div className="cursor-pointer p-2 w-10 h-10 items-center justify-center flex font-bold rounded-full bg-teal-100 ">
          3
        </div>
        <div className="cursor-pointer border-white border-2 p-2 w-10 h-10 items-center justify-center flex font-bold rounded-full text-white">
          4
        </div>
      </div>
    </div>
  );
}
