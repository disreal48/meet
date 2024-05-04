import React from "react";

function NumberOfEvents({ setCurrentNOE }) {
  const handleInputChanged = (event) => {
    const value = event.target.value;

    setCurrentNOE(value);
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
