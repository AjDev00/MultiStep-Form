import "./App.css";
import Home from "./components/Home";
import Plan from "./components/Plan";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { createContext, useState } from "react";
import AddOns from "./components/AddOns";
import Finish from "./components/Finish";
import Confirm from "./components/Confirm";

export const AppContext = createContext();

function App() {
  //personal info parameters.
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState({ name: "", type: "email" });
  const [emailValidity, setEmailValidity] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [error, setError] = useState("");

  //plan parameters.
  const [planType, setPlanType] = useState("");
  const [planPayment, setPlanPayment] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  //add-ons parameters.
  const [onlineType, setOnlineType] = useState("");
  const [onlineAmount, setOnlineAmount] = useState("");
  const [largerType, setLargerType] = useState("");
  const [largerAmount, setLargerAmount] = useState("");
  const [profileType, setProfileType] = useState("");
  const [profileAmount, setProfileAmount] = useState("");

  //handle monthly and yearly toggle.
  function handleToggle() {
    setIsToggled(!isToggled);
  }

  return (
    <div>
      <AppContext.Provider
        value={{
          nameInput,
          setNameInput,
          emailInput,
          setEmailInput,
          phoneInput,
          setPhoneInput,
          error,
          setError,
          setPlanType,
          planType,
          setPlanPayment,
          planPayment,
          setIsToggled,
          isToggled,
          handleToggle,
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
          emailValidity,
          setEmailValidity,
        }}
      >
        <Router>
          <Switch>
            <Route exact path="/">
              <div className="bg-gray-100 md:bg-white h-[700px]">
                <Home />
              </div>
            </Route>
            <Route path="/plan">
              <div className="bg-gray-100 md:bg-white h-[850px]">
                <Plan />
              </div>
            </Route>
            <Route path="/add-ons">
              <div className="bg-gray-100 md:bg-white h-[700px]">
                <AddOns />
              </div>
            </Route>
            <Route path="/finish">
              <div className="bg-gray-100 md:bg-white h-[630px]">
                <Finish />
              </div>
            </Route>
            <Route path="/confirm">
              <div className="bg-gray-100 md:bg-white h-screen">
                <Confirm />
              </div>
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
