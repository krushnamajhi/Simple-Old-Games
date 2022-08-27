import React, { useState } from "react";
import Message from "../comps/message";
import HeadSetup from "../comps/HeadSetup";
import Name from "../comps/flames/Name";
import FlameResults from "../comps/flames/FlameResults";

const boardstyle = {
  width: "400px",
};

function Flames(props) {
  const [name, setName] = useState("");
  const [soulmateName, setSoulmateName] = useState("");
  const [commonChars, setCommonChars] = useState([]);
  const [uncommonChars, setunCommonChars] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [validation, setValidation] = useState("");

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
    if (name == "" || soulmateName == "") {
      setValidation("Please enter Both Names");
      return;
    }else if(name.includes(" ") || soulmateName.includes(" ")){
      setValidation("Please enter only first name")
      return;
    } 
    else {
      setValidation("");
    }
    compare();
    setShowResults(true);
  };

  const handleNameChange = (e) => {
    setName(e.target.value.toLocaleUpperCase());
  };

  const handleSoulmateNameChange = (e) => {
    setSoulmateName(e.target.value.toLocaleUpperCase());
  };

  const handleReset = () => {
    setShowResults(false);
    setName("");
    setSoulmateName("");
  };

  function getFlamesResults(){
    console.log(uncommonChars,uncommonChars.length, uncommonChars.length % 6)
    return uncommonChars.length % 6;
  }

  const renderNames = () => {
    return (
      <div style={boardstyle}>
        <Name clientName={name} cross={commonChars} />
        <Name clientName={soulmateName} cross={commonChars} />
        <FlameResults result={getFlamesResults()} />
      </div>
    );
  };

  return (
    <div>
      <HeadSetup title="Flames" header="F.L.A.M.E.S" />
      <center className="container">
        <Message message={validation} error={validation != ""} />
        <div style={boardstyle} className="container row">
          <input
            className="m-2"
            placeholder="Enter your Name"
            value={name}
            onChange={handleNameChange}
            disabled={showResults}
          />
          <input
            className="m-2"
            placeholder="Enter your Soulmate Name"
            value={soulmateName}
            onChange={handleSoulmateNameChange}
            disabled={showResults}
          />
        </div>
        <button
          className="btn btn-success m-2"
          onClick={handleClick}
          disabled={showResults}
        >
          Match
        </button>
        <button
          className="btn btn-success m-2"
          onClick={handleReset}
          disabled={!showResults}
        >
          Change Names
        </button>
        {showResults ? renderNames() : null}
      </center>
    </div>
  );
}

export default Flames;
