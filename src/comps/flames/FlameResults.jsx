import React from "react";

const style = {
  borderRadius: "1px",
  fontWeight: "700",
  fontSize:"20px"
};

const crossedStyle = {
  border: "2px solid darkgreen",
  borderRadius: "1px",
  background: "darkgreen",
  color: "white",
  fontSize:"21px",
  fontWeight: "700",
};

function FlameResults({ result }) {
  const flames = ["FREINDS", "LOVERS", "ADMIRERS", "MARRIAGE", "ENEMIES", "SISTER"];
  return (
    <div className="h1 m-5 p-3">
      {flames.map((m, i) => (
        <span className="px-1 btn btn" title={m} style={i == result ? crossedStyle : style}>
          {i == result ? m[0] + " - " + m : m[0]}
        </span>
      ))}
    </div>
  );
}

export default FlameResults;
