import React, { useState } from "react"
import  style from "./style/Poke.module.css"



export default function AddPoke(props) {

    const [newPoke, setNewPoke] = useState({
        name: '',
        id: '',
        types: []
    })


    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.id === "types") {
            setNewPoke(prev => ({ ...prev, types: [e.target.value] }))
        } else {
            setNewPoke(prev => ({
                ...prev,
                [e.target.id]: e.target.value,
            }))

        }

    }



    return (
        <div>

            {console.log(newPoke)}

            <form className={`${style.flex}`} >

                <div>
                    <label htmlFor="name" ></label>
                    <input type="text" id="name" placeholder="name" onChange={(e) => handleChange(e)} />
                </div>

                <div>
                    <label htmlFor="types" ></label>
                    <input type="text" placeholder="types" id="types" onChange={(e) => handleChange(e)} />
                </div>

                <div>
                    <label htmlFor="id" ></label>
                    <input type="text" id="id" placeholder="id" onChange={(e) => handleChange(e)} />
                </div>
                <button type="submit" onClick={(e) => props.handleSubmit(e, newPoke)}>Add</button>

            </form>


        </div>


    )
}