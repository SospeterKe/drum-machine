import React from "react";
import './controls.css'

export default function Controls() {
    return(
        <div className="control-tab">
            <div className="switch">
                <p>Power</p>
                <div className="switch-button"></div>
            </div>
            <div className="whitespace"></div>
            <input type="range" max={1} min={0} step={0.01} value={0.32} />
        </div>
    );
}