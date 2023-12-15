import React, { useState } from "react"
import Child from "./Child.jsx"
import style from "./style/Poke.module.css"
// import AddPoke from "./AddPoke"
import Header from "./Header"
// import Search from "./Search"
// import axios from 'axios'




export default function PokeStuff() {

    const [view, setView] = useState("")
    const [name, setName] = useState("")
    const [display, setDisplay] = useState(false)

    
    const [pokemon, setPokemon] = useState([
        { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
        { "id": 5, "name": "Charmeleon", "types": ["fire"] },
        { "id": 9, "name": "Blastoise", "types": ["water"] },
        { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
        { "id": 23, "name": "Ekans", "types": ["poison"] },
        { "id": 24, "name": "Arbok", "types": ["poison"] },
        { "id": 25, "name": "Pikachu", "types": ["electric"] },
        { "id": 37, "name": "Vulpix", "types": ["fire"] },
        { "id": 52, "name": "Meowth", "types": ["normal"] },
        { "id": 63, "name": "Abra", "types": ["psychic"] },
        { "id": 67, "name": "Machamp", "types": ["fighting"] },
        { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
        { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
        { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
        { "id": 98, "name": "Krabby", "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
        { "id": 133, "name": "Eevee", "types": ["normal"] },
        { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair", "types": ["dragon"] }
    ])




    // const { setPokemon } = props
    const handleSetDisplay = (e) => {
        e.preventDefault()
        if (display) {
            setDisplay(false)
        } else
            setDisplay(true)

    }

    const handleButtonClick = (e) => {
        // e.preventDefault()
        console.log("buttonclick", e.target.value)
        setView(e.target.value)
        setName("")
    }

    const handleTypeChange = (e) => {
        console.log("change")
        setView(e.target.value)
        setName("")
    }

    const handleNameChange = (e) => {
        console.log("name change")
        setName(e.target.value)
    }


    const handleSubmit = (e, newPoke) => {
        e.preventDefault()
        console.log('handeSubmit', newPoke)

        if (newPoke.name && newPoke.types.length && newPoke.id) {
                            setPokemon(prev => [...prev, newPoke])
                            setDisplay(false)
        
                        }




        //axios call for add pokmon
    //     axios({
    //         method: "POST",
    //         url: 'http://localhost:8080/api/create',
    //         data: { id: pokemon.id, name: pokemon.name, types: pokemon.types }
    //     })
    //         .then(res => {

    //             if (newPoke.name && newPoke.types.length && newPoke.id) {
    //                 setPokemon(prev => [...prev, newPoke])
    //                 setDisplay(false)

    //             }

    //         })
    //         .catch(err => console.log('create error', err))
    }





    return (
        <>
            {
                name  ? (

                    <div id="PokeStuff" >

                        <div className={`${style.container}`}>

                            <Header
                                handleSetDisplay={handleSetDisplay}
                                display={display}
                                handleSubmit={handleSubmit}
                                handleTypeChange={handleTypeChange}
                                handleNameChange={handleNameChange}
                                view={view}
                                name={name}
                                handleButtonClick={handleButtonClick} />

                            <div className={`${style.grid} ${style.flex}`}>


                                {pokemon.filter((item) => item.name.includes(name)).map((obj, i) => {

                                    return (
                                        <div >

                                            <Child key={i} name={obj.name} id={obj.id} types={obj.types} />

                                        </div >
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div >
                ) :
                    view ? (
                        <div id="PokeStuff_CardRender" className={`${style.container}`}>
                            <div>

                                <Header
                                    handleSubmit={handleSubmit}
                                    handleSetDisplay={handleSetDisplay}
                                    display={display}
                                    handleTypeChange={handleTypeChange}
                                    handleNameChange={handleNameChange}
                                    view={view}
                                    name={name}
                                    handleButtonClick={handleButtonClick} />

                                <div className={`${style.grid} ${style.flex}`}>

                                    {pokemon.filter((item) => item.types.includes(view)).map((obj, i) => {

                                        return (
                                            <div>

                                                <Child key={i} name={obj.name} id={obj.id} types={obj.types} />

                                            </div >
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        </div>
                    ) : (
                            <div id="PokeStuff_CardRender" className={`${style.container}`}>
                                <div>

                                    <Header
                                        handleSubmit={handleSubmit}
                                        handleSetDisplay={handleSetDisplay}
                                        display={display}
                                        handleTypeChange={handleTypeChange}
                                        handleNameChange={handleNameChange}
                                        view={view}
                                        name={name}
                                        handleButtonClick={handleButtonClick} />
                                </div>

                                <div className={`${style.grid} ${style.flex}`}>

                                    {pokemon.map((item) => {

                                        return (

                                            <Child name={item.name} id={item.id} types={item.types} />
                                        )

                                    })}

                                </div>
                            </div>
                        )
            }
        </>
    )
}

