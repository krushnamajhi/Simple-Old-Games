import React, { useEffect, useState } from "react";
import Message from "../comps/message";
import HeadSetup from "../comps/HeadSetup";
import Name from "../comps/flames/Name";
import FlameResults from "../comps/flames/FlameResults";

const boardstyle = {
  width: "350px",
};

function Flames(props) {
  const [inputName, setInputName] = useState("")
  const [inputSoulMatename, setInputSoulmateName] = useState("")
  const [name, setName] = useState(inputName.replace(" ",""));
  const [soulmateName, setSoulmateName] = useState(inputSoulMatename.replace(" ", ""));
  const [commonChars, setCommonChars] = useState([]);
  const [uncommonChars, setunCommonChars] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [validation, setValidation] = useState("");

  useEffect(()=>{
    setName(inputName.replace(" ",""))
    setSoulmateName(inputSoulMatename.replace(" ", ""))
  })

  const compare = () => {
    let common = [];
    for (let i = 0; i < name.length; i++) {
      for (let j = 0; j < soulmateName.length; j++) {
        if (name[i] == soulmateName[j]) {
          if (!common.includes(name[i])) common.push(name[i]);
        }
      }
    }
    let uncommon = [];
    for (let i = 0; i < name.length; i++) {
      if (!common.includes(name[i]) && !uncommon.includes(name[i])) {
        uncommon.push(name[i]);
      }
    }
    for (let i = 0; i < soulmateName.length; i++) {
      if (!common.includes(soulmateName[i]) && !uncommon.includes(soulmateName[i])) {
        uncommon.push(soulmateName[i]);
      }
    }
    setCommonChars([...common]);
    setunCommonChars([...uncommon]);
  };

  const handleClick = () => {
    if (name == "") {
      setValidation("Please enter Your Name");
      return;
    }else if(soulmateName == ""){
      setValidation("Please enter Your Soulmate's name")
      return;
    } 
    else {
      setValidation("");
    }
    compare();
    setShowResults(true);
  };

  const handleNameChange = (e) => {
    setInputName(e.target.value.toLocaleUpperCase());
  };

  const handleSoulmateNameChange = (e) => {
    setInputSoulmateName(e.target.value.toLocaleUpperCase());
  };

  const handleReset = () => {
    setShowResults(false);
    setName("");
    setSoulmateName("");
  };

  const renderNames = () => {
    return (
      <div style={boardstyle}>
        <Name clientName={name} cross={commonChars} />
        <Name clientName={soulmateName} cross={commonChars} />
        <FlameResults uncommonChars={uncommonChars} />
      </div>
    );
  };

  return (
    <div>
      <HeadSetup title="Flames" header="F.L.A.M.E.S" />
      <center className="container" style = {boardstyle}>
        <Message message={validation} error={validation != ""} />
        <div className="container row">
          <input
            className="m-2"
            placeholder="Enter your Name"
            value={inputName}
            onChange={handleNameChange}
            disabled={showResults}
            maxLength="30"
          />
          <input
            className="m-2"
            placeholder="Enter your Soulmate Name"
            value={inputSoulMatename}
            onChange={handleSoulmateNameChange}
            disabled={showResults}
            maxLength="30"
          />
        </div>
        <button
          className="btn btn-success my-2 mx-1"
          onClick={handleClick}
          disabled={showResults}
          style={{width:"42%"}}
        >
          Match
        </button>
        <button
          className="btn btn-success my-2 mx-1"
          onClick={handleReset}
          disabled={!showResults}
          style={{width:"42%"}}
        >
          Change Names
        </button>
        {showResults ? renderNames() : null}
      </center>
    </div>
  );
}

export default Flames;
