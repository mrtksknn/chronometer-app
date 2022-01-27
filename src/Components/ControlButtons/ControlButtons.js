import React from "react";
import "./ControlButtons.css";
  
const ControlButtons = (props) => {
  return (
    <div className="Control-Buttons">
      <div>
        {props.active ? 
        (
          <div className="btn-grp">
            <div className="btn btn-two" onClick={props.handleReset}>
              Reset
            </div>
            <div className="btn btn-one"  onClick={props.handlePauseResume}>
              {props.isPaused ? "Resume" : "Pause"}
            </div>
          </div>
        ) : 
        (
          <div className="btn btn-one btn-start" onClick={props.handleStart}>
            Start
          </div>
        )
        }
      </div>
    </div>
  );
}

export default ControlButtons;