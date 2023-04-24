import React from "react";
import './PadBank.css'

let playSound = (src) => new Audio(src).play();

export default function PadBank() {
    return(
        <div className="drumPads">
            <div className="drum-pad" onClick={() => playSound(document.getElementById("Q").src)} ><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>Q</div>
            <div className="drum-pad" onClick={() => playSound(document.getElementById("W").src)}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio>W</div>
            <div className="drum-pad" onClick={() => playSound(document.getElementById("E").src)}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio>E</div>
            <div className="drum-pad" onClick={() => playSound(document.getElementById("A").src)}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio>A</div>
            <div className="drum-pad" onClick={() => playSound(document.getElementById("S").src)}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"className="clip" id="S"></audio>S</div>
            <div className="drum-pad" onClick={() => playSound(document.getElementById("D").src)}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>D</div>
            <div className="drum-pad" onClick={() => playSound(document.getElementById("Z").src)}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio>Z</div>
            <div className="drum-pad" onClick={() => playSound(document.getElementById("X").src)}><audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio>X</div>
            <div className="drum-pad" onClick={() => playSound(document.getElementById("C").src)}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio>C</div>
            
        </div>
    );
}