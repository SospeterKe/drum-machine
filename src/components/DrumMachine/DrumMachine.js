import React from "react";
import './DrumMachine.css'
import Controls from "../controls/Controls";
import {FaFireAlt} from 'react-icons/fa';
import { useState } from "react";

export default function DrumMachine() {

    const [dispayText, setDisplayText] = useState("");

    const handleButtonClick = (text, audioSrc) => {
        setDisplayText(text);
        let id = document.getElementById(audioSrc).src;
        new Audio(id).play();
    }

    return(
        <div id="drum-machine" className="drum-machine">

            <div className="drumPads">
                <div className="drum-pad" onClick={() => {handleButtonClick("Heater-1", "Q")}} ><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>Q</div>
                <div className="drum-pad" onClick={() => {handleButtonClick("Heater-2", "W")}}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio>W</div>
                <div className="drum-pad" onClick={() => {handleButtonClick("Heater-3", "E")}}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio>E</div>
                <div className="drum-pad" onClick={() => {handleButtonClick("Heater-4", "A")}}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio>A</div>
                <div className="drum-pad" onClick={() => {handleButtonClick("Heater-6", "S")}}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"className="clip" id="S"></audio>S</div>
                <div className="drum-pad" onClick={() => {handleButtonClick("Dsc_oh", "D")}}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>D</div>
                <div className="drum-pad" onClick={() => {handleButtonClick("Kick_n_Hat", "Z")}}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio>Z</div>
                <div className="drum-pad" onClick={() => {handleButtonClick("RP4_KICK_1", "X")}}><audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio>X</div>
                <div className="drum-pad" onClick={() => {handleButtonClick("Cev_H2", "C")}}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio>C</div>
            </div>
            <FaFireAlt className="logo"/>
            <Controls text = {dispayText}/>
        </div>
    );
}