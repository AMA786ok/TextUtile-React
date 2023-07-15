// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import Text from "./Components/Text";


import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const [blue, setBlue] = useState("light");
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

  const toggleMode1 = () => {
    if (blue === "light") {
      setBlue("blue");
      document.body.style.backgroundColor = "#060a2e";
      document.body.style.color = "white";
      showAlert("Blueish Mode has been enable", "primary ");
    } else {
      setBlue("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Blueish Mode has been disable", "danger ");
    }
  };

  return (
    <>
        <Alert alert={alert} />
        <Navbar
          title="Text-Sizing"
          blue={blue}
          mode={mode}
          toggleMode1={toggleMode1}
          toggleMode={toggleMode}
          alert="Hura! This Is Sale For Three Days"
        />
        <div className="container py-3">
              <Text
                showAlert={showAlert}
                heading="Enter Text And Enalize it "
                mode={mode}
                blue={blue}
                submit="Change text Upper case"
              />
        </div>
    </>
  );
}

export default App;
