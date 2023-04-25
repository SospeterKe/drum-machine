import React, { useState } from "react";
import { useTransition } from "react";
import './controls.css';



export default function Controls(props) {

    const descendantStyle = {
        float: props.power ? 'right' : 'left'
    };

    const [volume, setVolume] = useState(0.30);
    props.audio.volume = volume;

    const handleChange = (e) => {
        setVolume(e.target.value)
    }

    return(
        <div className="control-tab">
            <div className="switch">
                <p>Power</p>
                <div className="switch-button" onClick={props.setPower}>
                    <div className="switch-button-slider" style={descendantStyle}></div>
                </div>
            </div>
            <div className="whitespace" id="display">{props.text}</div>
            <input type="range" max={1} min={0} step={0.01} onChange={handleChange} value={volume} className="volume-slider"/>
        </div>
    );
}