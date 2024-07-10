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

export const AppContext = createContext();

function App() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [error, setError] = useState("");
  const [planType, setPlanType] = useState("");
  const [planPayment, setPlanPayment] = useState("");
  const [isToggled, setIsToggled] = useState(false);

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
        }}
      >
        <Router>
          <Switch>
            <Route exact path="/">
              <div className="bg-gray-100 h-[700px]">
                <Home />
              </div>
            </Route>
            <Route path="/plan">
              <div className="bg-gray-100 h-[850px]">
                <Plan />
              </div>
            </Route>
            <Route path="/add-ons">
              <div className="bg-gray-100 h-[800px]">
                <AddOns />
              </div>
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
