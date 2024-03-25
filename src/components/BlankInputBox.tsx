import React, { useState } from "react";
import "./BlankInput.css"; // Import the CSS file where the class is defined

const BlankInputBox: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="custom-input-container">
      <textarea
        value={inputValue}
        onChange={handleChange}
        placeholder=" "
        className="custom-input"
      />
      {/* Conditionally render the placeholder text */}
      {inputValue === "" && (
        <div className="placeholder-text">Write here...</div>
      )}
    </div>
  );
};

export default BlankInputBox;
