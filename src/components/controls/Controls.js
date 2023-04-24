import React from "react";
import './controls.css';



export default function Controls(props) {
    return(
        <div className="control-tab">
            <div className="switch">
                <p>Power</p>
                <div className="switch-button" >
                    <div className="switch-slider"></div>
                </div>
            </div>
            <div className="whitespace" id="display">{props.text}</div>
            <input type="range" max={1} min={0} step={0.01} value={0.32} className="volume"/>
        </div>
    );
}