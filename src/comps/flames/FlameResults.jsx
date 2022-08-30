import React, { useEffect, useState } from "react";

const style = {
  borderRadius: "1px",
  fontWeight: "700",
  fontSize: "20px",
};

const crossedStyle = {
  border: "2px solid darkgreen",
  borderRadius: "1px",
  background: "darkgreen",
  color: "white",
  fontSize: "21px",
  fontWeight: "700",
};

function FlameResults({ uncommonChars }) {
  const flames = [
    "FREINDS",
    "LOVERS",
    "ADMIRERS",
    "MARRIAGE",
    "ENEMIES",
    "SISTER",
  ];
  const [result, setResult] = useState(getFlamesResults());

  useEffect(() => {
    setResult(getFlamesResults())
  })

  function check(i) {
    return i == result - 1;
  }

  function isAllCommon(){
    return uncommonChars.length == 0 || uncommonChars == null || uncommonChars == undefined
  }

  function getFlamesResults() {
    if(isAllCommon()){
      return 0;
    }
    else if (uncommonChars.length % 6 == 0) {
      return 6;
    } else return uncommonChars.length % 6;
  }

  return (
    <div>
      <div className="shadow p-1 my-4 mb-3 bg-white rounded h2 m-3 p-2">
      {flames.map((m, i) => (
        <span
          className="px-1 btn btn"
          title={m}
          style={check(i) ? crossedStyle : style}
        >
          {check(i) ? m[0] + " - " + m : m[0]}
        </span>
      ))}
      </div>
      {isAllCommon()?
      <div className="h5">Keep distance, You're nobody</div>:null}
    </div>
  );
}

export default FlameResults;
