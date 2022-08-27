import React, { useState } from "react";
import Character from "./Character";

function Name({ clientName, cross }) {
  const [nameArr, setNameArr] = useState(
    Array.from(clientName.replace(" ", "").toUpperCase())
  );
  
  return (
    <div className="m-3">
      {nameArr.map((ch, index) => (
        <Character key={ch + index} ch={ch} iscrossed = {cross.includes(ch)}/>
      ))}
    </div>
  );
}
export default Name;
