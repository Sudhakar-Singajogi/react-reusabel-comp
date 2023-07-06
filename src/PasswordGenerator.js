import React from "react";
import { useState } from "react";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";
import StrengthIndicator from "./components/StrengthIndicator";
import usePasswordGenerator from "./customHooks/usePasswordGenerator";

function PasswordGenerator() {
  const [length, setLength] = useState(4);
  const { password, errMsg, generatePassword } = usePasswordGenerator();
  const [copied, setCopied] = useState(false);

  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const HandleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData((prev) => updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="password-container">
      {password && (
        <div className="password-with-copy">
          <div className="password-text">{password}</div>
          <Button
            customClass="copy-btn"
            title={copied ? "Copied" : "copy"}
            onClick={handleCopy}
          />
        </div>
      )}

      <div className="charlength">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
      </div>

      <div className="checkboxes">
        {checkboxData.map((checkbox, index) => (
          <Checkbox
            key={index}
            title={checkbox.title}
            onChange={() => {
              HandleCheckboxChange(index);
            }}
            state={checkbox.state}
          />
        ))}
      </div>

      <StrengthIndicator password={password} />
      {errMsg && <div className="err-msg">{errMsg}</div>}

      <div style={{ padding: "25px" }}>
        <Button
          title="Generate Password"
          onClick={() => {
            generatePassword(checkboxData, length);
          }}
          customClass="gen-pwd-btn"
        />
      </div>
    </div>
  );
}

export default PasswordGenerator;
