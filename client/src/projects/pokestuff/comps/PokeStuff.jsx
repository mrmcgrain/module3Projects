import React, { useState, useEffect } from "react"
import Child from "./Child.jsx"
import style from "./style/Poke.module.css"
// import AddPoke from "./AddPoke"
import Header from "./Header"
// import Search from "./Search"
import axios from 'axios'




export default function PokeStuff() {

    const [view, setView] = useState("")
    const [name, setName] = useState("")
    const [display, setDisplay] = useState(false)
    const [pokemon, setPokemon] = useState([])



    useEffect(() => {

        axios({
            method: "GET",
            url: 'http://localhost:8080/api/all'
        })
            .then(res => {
                console.log('res', res)
                setPokemon(res.data.results)

            })
            .catch(err => console.log('get error', err))
    }, []);



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

    const handleDelete = id => {
        console.log("handle Edit", id)
        // console.log("edit", pokemon.filter((poke) => poke._id !== res.data._id))
        console.log("edit", pokemon.find((item) => item._id === id))

        axios({
            method: "PUT",
            url: `http://localhost:8080/api/delete`,
            data: pokemon.find((item) => item._id === id)
        })
            .then(res => {
                console.log('res', res)
                setPokemon(prev => [...prev].filter((item) => item._id !== res.data._id))
            })

    }

    /////This is the Add Poke functionality

    const handleSubmit = (e, newPoke) => {
        e.preventDefault()
        console.log('handeSubmit', newPoke)
        // const headers = { 'Content-Type': 'application/json' };
        // const payload =  { id: pokemon.id, name: pokemon.name, types: pokemon.types }
        // axios.post("http://localhost:8080/api/create", payload, headers)
        //     .then(res => {

        //         if (newPoke.name && newPoke.types.length && newPoke.id) {
        //             setPokemon(prev => [...prev, newPoke])
        //             setDisplay(false)
        //             // newPoke.forEach((obj) => Pokemon.create(obj))

        //         }

        //     })
        //     .catch(err => console.log('create error', err))


        axios({
            method: 'POST',
            url: "http://localhost:8080/api/create",
            data: newPoke
        })
            .then(res => setPokemon(prev => [...prev, res.data]))
    }





    return (
        <>
            {console.log("pokemon", pokemon)}

            {
                name ? (
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

                                            {console.log("name return")}


                                            <Child
                                                handleDelete={handleDelete}
                                                key={i}
                                                name={obj.name}
                                                id={obj.id}
                                                types={obj.types}
                                                _id={obj._id} />

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

                                                {console.log("view return")}


                                                <Child
                                                    handleDelete={handleDelete}
                                                    key={i}
                                                    name={obj.name}
                                                    id={obj.id}
                                                    types={obj.types}
                                                    _id={obj._id} />

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

                                    {pokemon.map((obj, i) => {

                                        return (

                                            <div>

                                                {console.log("Last return")}

                                                <Child
                                                    handleDelete={handleDelete}
                                                    key={i}
                                                    name={obj.name}
                                                    id={obj.id}
                                                    types={obj.types}
                                                    _id={obj._id} />

                                            </div>
                                        )

                                    })}

                                </div>
                            </div>
                        )
            }
        </>
    )
}
