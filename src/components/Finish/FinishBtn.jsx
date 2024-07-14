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
        className="flex flex-row justify-center items-center gap-4 pt-12 md:flex-col md:justify-normal md:items-start md:ml-5 md:pt-5 md:gap-6"
      >
        <div className="md:flex flex-row justify-center items-center gap-4">
          <div
            onClick={toHome}
            className="cursor-pointer border-white border-2 p-2 w-10 h-10 items-center justify-center flex font-bold rounded-full text-white"
          >
            1
          </div>
          <div className="hidden md:flex flex-col">
            <h1
              style={{ fontSize: "12px" }}
              className="font-light text-white opacity-80"
            >
              STEP 1
            </h1>
            <p
              style={{ fontSize: "14px" }}
              className="font-bold text-white tracking-wide"
            >
              YOUR INFO
            </p>
          </div>
        </div>
        <div className="md:flex flex-row justify-center items-center gap-4">
          <div
            onClick={toPlan}
            className="cursor-pointer border-2 border-white p-2 w-10 h-10 items-center justify-center flex font-bold rounded-full text-white"
          >
            2
          </div>
          <div className="hidden md:flex flex-col">
            <h1
              style={{ fontSize: "12px" }}
              className="font-light text-white opacity-80"
            >
              STEP 2
            </h1>
            <p
              style={{ fontSize: "14px" }}
              className="font-bold text-white tracking-wide text-nowrap"
            >
              SELECT YOUR PLAN
            </p>
          </div>
        </div>
        <div className="md:flex flex-row justify-center items-center gap-4">
          <div
            onClick={toAddOns}
            className="cursor-pointer border-white border-2 p-2 w-10 h-10 items-center justify-center flex font-bold rounded-full text-white"
          >
            3
          </div>
          <div className="hidden md:flex flex-col">
            <h1
              style={{ fontSize: "12px" }}
              className="font-light text-white opacity-80"
            >
              STEP 3
            </h1>
            <p
              style={{ fontSize: "14px" }}
              className="font-bold text-white tracking-wide"
            >
              ADD-ONS
            </p>
          </div>
        </div>
        <div className="md:flex flex-row justify-center items-center gap-4">
          <div className="cursor-pointer border-transparent border p-2 w-10 h-10 items-center justify-center flex font-bold rounded-full bg-teal-100">
            4
          </div>
          <div className="hidden md:flex flex-col">
            <h1
              style={{ fontSize: "12px" }}
              className="font-light text-white opacity-80"
            >
              STEP 4
            </h1>
            <p
              style={{ fontSize: "14px" }}
              className="font-bold text-white tracking-wide"
            >
              SUMMARY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
