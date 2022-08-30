import React from "react";

const tableStyle = {
    width: "350px",
}

const tdStyle = {
    border: "5px solid white",
    background: "lightgreen",
    fontSize: '20px',
    fontWeight: '400',
}


function MoveButtons({ moveSnake, pause }) {
  return (
    <center className= "my-2">
      <table className="text-center" style={tableStyle} hidden = {pause}>
        <tbody className="shadow mb-5">
          <tr>
            <td
              rowSpan={2}
              onClick={(e) => {
                moveSnake({ keyCode: 37 })
            }}
              style={{...tdStyle, width: "15%"}}
            >
              LEFT
            </td>
            <td
              colSpan={2}
              onClick={() => moveSnake({ keyCode: 38 })}
              style={{...tdStyle, width: "30%", height: "85px"}}
            >
              UP
            </td>
            <td
              rowSpan={2}
              onClick={() => moveSnake({ keyCode: 39 })}
              style={{...tdStyle,width: "15%"}}
            >
              RIGHT
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              onClick={() => moveSnake({ keyCode: 40 })}
              style={{...tdStyle,width: "30%", height: "70px"}}
            >
              DOWN
            </td>
          </tr>
        </tbody>
      </table>
    </center>
  );
}

export default MoveButtons;
