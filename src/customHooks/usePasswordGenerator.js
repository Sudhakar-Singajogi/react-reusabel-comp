import React, { useState } from "react";

function usePasswordGenerator() {
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const generatePassword = (checkboxData, length) => {
    let charset,
      generatedPassword = "";

    const selectedOptions = checkboxData.filter((checkbox) => checkbox.state);

    if (selectedOptions.length === 0) {
      setErrMsg(() => "Select at leaset one option");
      setPassword("");
      return "";
    }

    selectedOptions.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });

    for(let i=0; i<length; i++) {
        const randomIndex=  Math.floor(Math.random() * charset.length);
        generatedPassword += charset[randomIndex];
    }
    setErrMsg('');
    setPassword(generatedPassword);
  };

  return { password, errMsg, generatePassword };
}

export default usePasswordGenerator;
