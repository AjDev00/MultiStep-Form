import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AppContext } from "../../App";
import { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function NextStepBtn() {
  const {
    nameInput,
    emailInput,
    phoneInput,
    setError,
    emailValidity,
    setEmailValidity,
  } = useContext(AppContext);
  const history = useHistory();

  function handleNextStep() {
    if (emailInput.type !== "email") {
      setEmailValidity(true);
    } else if (
      nameInput === "" ||
      emailInput.name === "" ||
      phoneInput === ""
    ) {
      setError("This field cannot be empty");
      // setEmailValidity(true);
    } else {
      history.push("/plan");
    }
  }

  return (
    <div>
      <div>
        <span
          onClick={handleNextStep}
          className="cursor-pointer border border-blue-950 text-white font-bold p-3 rounded-md float-right px-5 mr-4 bg-blue-950 mb-6 md:mt-[440px] md:relative md:left-[450px]"
        >
          Next Step
        </span>
      </div>
    </div>
  );
}
