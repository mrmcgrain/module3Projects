import React, { useState } from 'react'
import "../style/markup.css"

const Markup = () => {


    const [input, setInput] = useState("")

    const handleInput = (e) => {
        setInput(e.target.value)
    }


    return (

        <div id='Markup'>


            <div className="flex-center flex-col markup-container">


                <p> Type Below to preview different text elements</p>

                <br />

                <div>
                    <input
                        onChange={(e) => handleInput(e)}
                    />

                </div>
                <div>


                    <br />

                    <div className="flex-col">

                        <div >
                            <p>This is a p tag:</p>
                        </div>

<div>                          <p> {input}</p>
                        </div>
                        
                    </div>
                    <br />

                    <div className="flex-col">

                        <div >
                            <h6>This is a h6 tag:</h6>
                        </div>

<div>                          <h6> {input}</h6>
                        </div>

                    </div>
                    <br />

                    <div className="flex-col">

                        <div >
                            <h5>This is a h5 tag:</h5>
                        </div>

<div>                          <h5> {input}</h5>
                        </div>

                    </div>
                    <br />

                    <div className="flex-col">

                        <div >
                            <h4>This is a h4 tag:</h4>
                        </div>

<div>                          <h4> {input}</h4>
                        </div>

                    </div>
                
                <br />
                    <div className="flex-col">

                        <div >
                            <h3>This is a h3 tag:</h3>
                        </div>

<div>                          <h3> {input}</h3>
                        </div>

                    </div>
                    <br />

                    <div className="flex-col">

                        <div >
                            <h2>This is a h2 tag:</h2>
                        </div>

<div>                          <h2> {input}</h2>
                        </div>

                    </div>
                    <br />

                    <div className="flex-col">

                        <div >
                            <h1>This is a h1 tag:</h1>
                        </div>

<div>                          <h1> {input}</h1>
                        </div>

                    </div>
                
           
                
                </div>
            </div>
        </div>
    )
};

export default Markup
