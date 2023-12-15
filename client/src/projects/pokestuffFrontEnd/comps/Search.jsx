import React from 'react'
import  style from "./style/Poke.module.css"

export default function Search(props) {

    return (

        <div id="Search">
            <h1>PokeDex FRONTEND ONLY</h1>
            <div id="Search"> 
                <form className={style.search}>

                    <input type="text" placeholder="Search Type" value={props.view} onChange={(e) => props.handleTypeChange(e)} />

                    <input type="text" placeholder="Search Name" value={props.name} onChange={(e) => props.handleNameChange(e)} />
                    <br />

                    {
                        props.display ? (
                            <button type="submit" onClick={(e) => props.handleSetDisplay(e)}>Cancel</button>
                        ) : (
                                <button type="submit" onClick={(e) => props.handleSetDisplay(e)}>Add Poke</button>
                            )
                    }

                </form>
            </div>
        </div>

    )
}





