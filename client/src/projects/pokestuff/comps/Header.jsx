import React from "react"
import Button from "./Button"
import AddPoke from "./AddPoke"
import Search from "./Search"
import style from "./style/Poke.module.css"


export default function Header(props) {

    const { handleSetDisplay, handleButtonClick, handleNameChange, handleTypeChange } = props

    return (

        <div id="Header" className={`${style.hcard} ${style.flex}`}>
            
            <div>

                <Search
                    handleSetDisplay={handleSetDisplay}
                    handleTypeChange={handleTypeChange}
                    handleNameChange={handleNameChange}
                    display={props.display}
                    view={props.view}
                    name={props.name} />

                {props.display
                    ?

                    <AddPoke 
                    handleSetDisplay={props.handleSetDisplay}
                    handleSubmit={props.handleSubmit} />

                    : <Button
                        // handleTypeChange={handleTypeChange}
                        // handleNameChange={handleNameChange}
                        name={props.name}
                        view={props.view}
                        handleButtonClick={handleButtonClick} />}


            </div>
        </div>




    )





}