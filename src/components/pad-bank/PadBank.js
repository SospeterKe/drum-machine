import React from "react";
import './PadBank.css'

export default function PadBank() {
    return(
        <div className="drumPads">
            <div className="drum-pad" ><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>Q</div>
            <div className="drum-pad"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>W</div>
            <div className="drum-pad"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>E</div>
            <div className="drum-pad"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>A</div>
            <div className="drum-pad"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>S</div>
            <div className="drum-pad"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>D</div>
            <div className="drum-pad"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>Z</div>
            <div className="drum-pad"><audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>X</div>
            <div className="drum-pad"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>C</div>
            
        </div>
    );
}