import React from "react";
import './DrumMachine.css'
import PadBank from "../pad-bank/PadBank";
import Controls from "../controls/Controls";
import {FaFireAlt} from 'react-icons/fa'

export default function DrumMachine() {
    return(
        <div id="drum-machine" className="drum-machine">
            <PadBank />
            <FaFireAlt className="logo"/>
            <Controls />
        </div>
    );
}