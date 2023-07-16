
import "./App.css";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import Text from "./Components/Text";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  // const [blue, setBlue] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#010517";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enable", "success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enable", "success ");
    }
  };

  return (
    <>
      <Router>
       
        <Navbar
          title="Text-Sizing"
          mode={mode}
          toggleMode={toggleMode}
          alert="Hura! This Is Sale For Three Days"
        />
         <Alert alert={alert} />
        <div className="container py-3">
          <Switch>
            <Route exact path="/">
              <Text
                showAlert={showAlert}
                heading="Try TextSize - word counter , Charcter Counter "
                mode={mode}
                submit="Change text Upper case"
              />
            </Route>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

