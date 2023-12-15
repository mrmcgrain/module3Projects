import React, { useState, useEffect } from "react"
import styles from "../style/quoteStyle.css"
import QuoteDisplay from "./QuoteDisplay"
import Footer from "./Footer"
import data from "../data/quotes.json"

export default function QuoteDashBoard() {

    const [view, setView] = useState("")


    useEffect(() => {

        setView(data[rando])

    }, [])


    let rando = Math.floor(Math.random(data.length) * 5421)

    const handleNewQuote = (e) => {

        e.preventDefault()

        console.log("clicked")
        setView(data[rando])
    }


    return (
        <>
            {console.log(view)}
            <div id="quote-box" className="main-cont" style={{ heigth: "50vh", marginTop: "40px" }}>



                <div
                    className="flex inner-cont" style={{ marginTop: "40px" }}>


                    <QuoteDisplay view={view} />
                    <div className="footer">
                        <br />
                        <br />
                        <Footer handleNewQuote={handleNewQuote} />
                    </div>


                </div>


            </div>

        </>





    )

}