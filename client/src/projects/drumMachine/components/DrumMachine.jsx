import React, { useState } from "react"
import style from "./style/Drum.css"

import bd01 from "../data/bd01.wav"
import chi1 from "../data/chi1.wav"
import clap1 from "../data/clap1.wav"
import cym01 from "../data/cym01.wav"
import rim1 from "../data/rim1.wav"
import sd01 from "../data/sd01.wav"
import tlo1 from "../data/tlo1.wav"
import cme1 from "../data/cme1.wav"
import hh01 from "../data/hh01.wav"


export default function DrumMachine() {


        const [display, setDisplay] = useState("Loading...")


        const drumPad = (e) => {
                e.preventDefault()
                setDisplay(e.target.name)
                e.target.children[0].play()



        }



        return (
                <div id="drum-machine" style={{ backgroundColor: "black", color: "white", height: "100vh", padding: "10%" }}>

                        <div id="mainContainer" style={{}}>

                                <div >
                                        <div className="drum-col">


                                                <div className="drum-col-60">

                                                        <div className="drum-grid">

                                                                <button
                                                                        className="drum-pad"
                                                                        name="bd01"
                                                                        onClick={(e) => drumPad(e)}>
                                                                        <audio src={bd01}> </audio>
                                                                </button>

                                                                <button className="drum-pad"
                                                                        name="chi1"
                                                                        onClick={(e) => drumPad(e)}>
                                                                        <audio src={chi1}> </audio>
                                                                </button>

                                                                <button className="drum-pad"
                                                                        name="clap1"
                                                                        onClick={(e) => drumPad(e)}>
                                                                        <audio src={clap1}> </audio>
                                                                </button>

                                                                <button className="drum-pad"
                                                                        name="cym01"
                                                                        onClick={(e) => drumPad(e)}>
                                                                        <audio src={cym01}> </audio>
                                                                </button>

                                                                <button className="drum-pad"
                                                                        name="rim1"
                                                                        onClick={(e) => drumPad(e)}>
                                                                        <audio src={rim1}> </audio>
                                                                </button>

                                                                <button className="drum-pad"
                                                                        name="sd01"
                                                                        onClick={(e) => drumPad(e)}>
                                                                        <audio src={sd01}> </audio>
                                                                </button>

                                                                <button className="drum-pad"
                                                                        name="tlo1"
                                                                        onClick={(e) => drumPad(e)}>
                                                                        <audio src={tlo1}> </audio>
                                                                </button>

                                                                <button className="drum-pad"
                                                                        name="cme1"
                                                                        onClick={(e) => drumPad(e)}>
                                                                        <audio src={cme1}> </audio>
                                                                </button>

                                                                <button className="drum-pad"
                                                                        name="hh01"
                                                                        onClick={(e) => drumPad(e)}>
                                                                        <audio src={hh01}> </audio>
                                                                </button>
                                                        </div>
                                                </div>

                                                <div className="drum-col-40">
                                                        <div className="drum-grid-right">
                                                                <div className="drum-flex" >

                                                                        <label className="drum-switch round" style={{ backgroundColor: "grey" }}>
                                                                                <input type="checkbox" />
                                                                                <span className="drum-slider"></span>
                                                                        </label>
                                                                </div>

                                                                <div className="drum-flex" >
                                                                        <h1 id="display" style={{ width: "80%", border: "solid  grey" }}>{display}</h1>
                                                                </div>
                                                                <div className="drum-flex" >

                                                                        <input className="Dslider" type="range" min="1" max="100" value="50"></input>
                                                                </div>

                                                                <div className="drum-flex" >

                                                                        <label className="drum-switch round" style={{ backgroundColor: "grey" }}>
                                                                                <input type="checkbox" />
                                                                                <span className="drum-slider"></span>
                                                                        </label>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>

                </div>










        )

}