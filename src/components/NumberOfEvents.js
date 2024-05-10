import React from "react";

function NumberOfEvents({ setCurrentNOE, setErrorAlert }) {
  const handleInputChanged = (event) => {
    const value = event.target.value;

    let infoText;
    if (value <= 0 || isNaN(value)) {
      infoText =
        "Please enter a positive number greater than 0. Otherwise, the default number of events will be displayed.";
      setCurrentNOE(32);
    } else {
      infoText = "";
      setCurrentNOE(value);
    }
    setErrorAlert(infoText);
  };

  return (
    <div id="number-of-events">
      <input
        type="number"
        role="spinbutton"
        defaultValue={32}
        onChange={handleInputChanged}
      ></input>
    </div>
  );
}

export default NumberOfEvents;
