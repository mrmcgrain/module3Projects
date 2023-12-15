// Handles the main HTML markup of the page


import React, { useState } from "react"
// import style from "../style/calc.css"
// import style from "../style/calc.css"
import "../style/calc.css"
import calculate from "../Utilities/calculate.js"
// import Display from "../views/Display"
// import Views from "../components/Views"
// import handleEqualClick from "../Utilities/handleEqualClick"
// import handleNumberClick from "../Utilities/handleNumberClick"



export default function CalcDashBoard() {

    // const [ num1, setPrevNum ]= useState(null)
    // const [ num2, setCurNum ]= useState(null)

    // const { preNum, curNum, operator, opFlag, input, chain, negFlag} = useState()


    const [data, setData] = useState({
        preNum: "",
        curNum: "",
        operator: "", //hold first op
        operator2: "", //holds 2nd op
        opFlag: false, // if Op
        negFlag: false, // if Neg
        input: "input", //all characters
        output: "", // duh
        result: "", // equal
        total: "", //
        chain: "", //chained events
        decFlag: false, //if Dec
        testFlag: false

    })

    // console.log("Display Comp Render")


    const handleOperatorClick = (e) => {
        // console.log("handleOperatorClick", e.target.value, data)
        // e.preventDefault()



        // if (data.chain && data.curNum) {
        //     calculate(data.chain, data.op)
        // }

        // setData(prev => ({
        //     ...prev,
        //     operator: e.target.value,
        //     output: prev.output + e.target.value,


        // }))

    }

        // if (data.curNum && !data.preNum) {
        //     setData(prev => ({
        //         ...prev,
        //         preNum: prev.curNum,
        //         curNum: "",
        //         testFlag: true
        //     }))

        // } 
        //// LOGIC to do math on lsat operators and pre cur => chain
        // if (data.prevNum && data.curNum) {
        // if(data.total === "0"){
        // switch (data.operator) {

        //     case "+":
        //         console.log('FIRING HERE opClick, case +')
        //         setData(prev => ({
        //             ...prev,
        //             chain: parseFloat(data.preNum) + parseFloat(data.curNum),
        //             result: parseInt(data.preNum) + parseInt(data.curNum),

        //             // preNum: data.chain
        //         }))
        //         break;

        //     case "-":
        //         console.log('FIRING HERE opClick, case -')
        //         console.log(data.preNum + data.curNum)

        //         setData(prev => ({
        //             ...prev,
        //             chain: parseFloat(data.curNum) - parseFloat(data.preNum),
        //             preNum: data.chain,
        //             negFlag: true

        //         }))
        //         break;

        //     case "/":
        //         console.log('FIRING HERE opClick, case /')

        //         setData(prev => ({
        //             ...prev,
        //             chain: parseFloat(data.curNum) / parseFloat(data.preNum),
        //             preNum: data.chain

        //         }))
        //         break;

        //     case "*":
        //         console.log('FIRING HERE opClick, case *')

        //         setData(prev => ({
        //             ...prev,
        //             chain: parseFloat(data.preNum) * parseFloat(data.curNum),
        //             preNum: data.chain

        //         }))
        //         break;
        //     default:
        //         // return null

        // }
        //         }
        //     // }






        //     // console.log("newStae", num1, num2)
        //     // setData(prev => ({
        //     //     ...prev,
        //     //     output: prev.output + e.target.value
        //     // }))

        //     if (data.negFlag) {
        //         setData(prev => ({
        //             ...prev,
        //             curNum: `- ${prev.curNum}`
        //         }))
        //     }

        //     if (data.operator && e.target.value === "-") {
        //         setData(data.negFlag = true)
        //         setData(prev => ({
        //             ...prev,
        //             operator2: e.target.value,
        //             // output: prev.output + e.target.value,

        //         }))
        //     }

        //     else if

        //         (data.operator && e.target.value !== "-") {
        //         setData(prev => ({
        //             ...prev,
        //             operator: e.target.value,
        //             // output: prev.output + e.target.value,

        //         }))
        //     }

        //     if (data.operator && data.operator2) {
        //         setData(prev => ({
        //             ...prev,
        //             operator: e.target.value,
        //             // output: prev.output + e.target.value,

        //         }))
        //     }



        // }



        const handleEqualClick = (e) => {
            // e.preventDefault()
            { console.log("handleEqClick", e.target.value, data) }
            switch (data.operator) {

                case "+":
                    // console.log('FIRING HERE opClick, case +')
                    setData(prev => ({
                        ...prev,
                        opFlag: true,
                        result: parseFloat(data.preNum) + parseFloat(data.curNum),
                        output: prev.output + e.target.value,

                    }))
                    break;

                case "-":
                    setData(prev => ({
                        ...prev,
                        result: parseFloat(data.curNum) - parseFloat(data.preNum)
                    }))
                    break;

                case "/":
                    setData(prev => ({
                        ...prev,
                        result: parseFloat(data.curNum) / parseFloat(data.preNum)
                    }))
                    break;

                case "*":
                    setData(prev => ({
                        ...prev,
                        result: parseFloat(data.preNum) * parseFloat(data.curNum)
                    }))
                    break;
                default:
                    return null
            }


        }

        // const handleNumberClick = (e) => {
        //     console.log("handleNumberClick", e.target.value, "cur", data.curNum, "pre", data.preNum)
        //     e.preventDefault()

        //     // setData(prev => ({
        //     //     ...prev,
        //     //     preNum: prev.preNum + e.target.value,
        //     // }))

        //     setData(prev => ({
        //         ...prev,
        //         curNum: prev.curNum + e.target.value,
        //         output: prev.output + e.target.value,

        //         // preNum: prev.curNum + e.target.value
        //     }))

            //     if(data.curNum){

            //     setData(prev => ({
            //         ...prev,
            //         // curNum: prev.curNum + e.target.value
            //         preNum: prev.curNum + e.target.value
            //     }))
            // }
        // }


        // const handleClearClick = (e) => {
        //     console.log("handleClearClick", e.target.value, data)
        //     // e.preventDefault()

        //     setData(prev => ({
        //         ...prev,
        //         preNum: "",
        //         curNum: "",
        //         output: "",
        //         operator: "", // holds current operator
        //         result: "0", //on = holds value of math
        //         input: "", //holds every value clicked to display
        //         total: "0", //theroy of ....
        //         decFlag: false,
        //         negFlag: false,
        //         operator2: ""
        //     }))

        //     // setInput(prev => ({
        //     //     ...prev,fgsw
        //     //     input: ""
        //     // }))

        // }






        // const handleNegative = (e) => {
        //     console.log("handleNegative", e.target.value)

        //     e.preventDefault()
        //     setData(prev => ({
        //         ...prev,
        //         negFlag: true

        //     }))
        // }



        // const handleZeroClick = (e) => {
        //     console.log("handleZeroClick", e.target.value)

        //     e.preventDefault()
        // }
        // const handleDecimal = (e) => {
        //     console.log("handleDecimal", e.target.value)

        //     e.preventDefault()
        // }


        //  if (newPoke.name && newPoke.types.length && newPoke.id) {
        //     setPokemon(prev => [...prev, newPoke])
        //     setDisplay(false)

        // }





        return (


            <div id="MainContainer" className="calc-border">

                {console.log("datae", data)}



                <div id="container" className="calc-grid calc-border">

                    <div className="calc-display" id="display">
                        <p id="output">? {data.output} </p>
                        <p id="result"> {data.result}</p>
                    </div>

                    <div
                        className="calc-border calc-card calc-ac"
                        id="clear"
                        name="clear">
                        <button
                            onClick={(e) => handleClearClick(e)}
                            name="clear"
                            id="clear"
                            className="calc-btn"
                            value="AC"
                        >AC</button>

                    </div>



                    <div
                    // className="border card"
                    // id="add"
                    // name="+"
                    >
                        <button
                            onClick={(e) => handleOperatorClick(e)}
                            name="add"
                            id="add"
                            className="calc-btn"
                            value="+"
                        >+</button>

                    </div>

                    <div
                        className="calc-border calc-card"
                        id="one"
                        name="1">
                        <button
                            onClick={(e) => handleNumberClick(e)}
                            name="one"
                            id="one"
                            className="calc-btn"
                            value="1"
                        >1</button>



                    </div>

                    <div
                        className="calc-border calc-card"
                        id="two"
                        name="2">
                        <button
                            onClick={(e) => handleNumberClick(e)} value="2"
                            name="two"
                            id="two"
                            className="calc-btn" >2</button>

                    </div>

                    <div
                        className="calc-border calc-card"
                        id="three"
                        name="3">
                        <button value="3"
                            onClick={(e) => handleNumberClick(e)}
                            name="three"
                            id="three"
                            className="calc-btn" >3</button>

                    </div>

                    <div
                        className="calc-border calc-card"
                        // onClick={(e) => handleNumberClick(e) }
                        id="subtract"
                        name="-">
                        <button
                            onClick={(e) => handleOperatorClick(e)}
                            name="subtract"
                            id="subtract"
                            value="-"
                            className="calc-btn" >-</button>

                    </div>


                    <div
                        className="calc-border calc-card"
                        id="four"
                        name="4">
                        <button onClick={(e) => handleNumberClick(e)}
                            name="four"
                            id="four"
                            value="4"
                            className="calc-btn" >4</button>
                    </div>

                    <div
                        className="calc-border calc-card"
                        id="five"
                        name="5">
                        <button onClick={(e) => handleNumberClick(e)}
                            name="five"
                            id="five"
                            value="5"
                            className="calc-btn" >5</button>
                    </div>

                    <div
                        className="calc-border calc-card"
                        id="six"
                        name="6">
                        <button onClick={(e) => handleNumberClick(e)}
                            name="six"
                            id="six"
                            value="6"
                            className="calc-btn" >6</button>
                    </div>

                    <div
                        className="calc-border calc-card"
                        id="multiply"
                        name="*"
                        value="*">
                        <button onClick={(e) => handleOperatorClick(e)}
                            name="multiply"
                            id="multiply"
                            value="*"
                            className="calc-btn"
                        >*</button>
                    </div>

                    <div
                        className="calc-border calc-card"
                        id="seven"
                        name="7">
                        <button onClick={(e) => handleNumberClick(e)}
                            name="seven"
                            id="seven"
                            value="7"
                            className="calc-btn" >7</button>
                    </div>

                    <div
                        className="calc-border calc-card"
                        id="eight"
                        name="8">
                        <button onClick={(e) => handleNumberClick(e)}
                            name="eight"
                            id="eight"
                            value="8"
                            className="calc-btn" >8</button>
                    </div>

                    <div
                        className="calc-border calc-card"
                        id="nine"
                        name="9">
                        <button onClick={(e) => handleNumberClick(e)}
                            name="nine"
                            id="nine"
                            value="9"
                            className="calc-btn" >9</button>
                    </div>

                    <div
                        className="calc-border calc-card"
                        id="divide"
                        name="/">
                        <button onClick={(e) => handleOperatorClick(e)}
                            name="divide"
                            id="divide"
                            value="/"
                            className="calc-btn" >/</button>
                    </div>

                    <div
                        className="calc-border calc-card"
                        id="zero"
                        name="0">
                        <button onClick={(e) => handleZeroClick(e)}
                            name="zero"
                            id="zero"
                            value="0"
                            className="calc-btn" >0</button>
                    </div>


                    <div
                        className="calc-border calc-card"
                        id="decimal"
                        name=".">
                        <button onClick={(e) => handleDecimal(e)}
                            name="decimal"
                            value="."
                            id="decimal"
                            className="calc-btn" >.</button>
                    </div>

                    <div
                        // className="border card"
                        id="equals"
                    // name="="
                    >
                        <button
                            // onClick={(e) =>                        handleEqualClick(e, thisstate)}
                            // handleEqualClick(e, data.state)} 
                            // handleEqualClick(e, state)} 
                            onClick={(e) => handleEqualClick(e)}
                            name="equals" id="button"
                            value="="
                            className="calc-btn" >=</button>


                    </div>

                    <div id="outputs">
                        <div>                        <p>preNum: {data.preNum} </p>                    </div>

                        <div>                        <p>curNum: {data.curNum}</p>                    </div>

                    </div>

                    <div id="outputs">
                        <div>                        <p>op:{data.operator}</p>                    </div>
                        <div>                        <p>op2:{data.operator2}</p>                    </div>
                    </div>

                    <div id="output2">

                        <div>                        <p>result:{data.result}</p>                    </div>
                        <div>                        <p>chain:{data.chain}</p>                    </div>
                    </div>

                    <div id="outputs">
                        <div>                    <p>negF:{data.negFlag}</p>                    <p>opF:{data.opFlag}</p>                </div>
                    </div>




                </div>




            </div>



        )
    }
}












// <div className="grid border">

// <div className="display" id="display">
//     <p> input</p>
// </div>

// <div
//     className="border card ac"
//     id="clear"
//     name="clear">
//     <button
//         onClick={(e) => handleClearClick(e)}
//         name="clear"
//         id="clear"
//         className="btn"
//         value="AC"
//     >AC</button>

// </div>



// <div
//     className="border card"
//     id="add"
//     name="+">
//     <button
//         onClick={(e) => handleOperatorClick(e)}
//         name="add"
//         id="add"
//         className="btn"
//         value="+"
//     >+</button>

// </div>

// <div
//     className="border card"
//     id="one"
//     name="1">
//     <button
//         onClick={(e) => handleNumberClick(e)}
//         name="one"
//         id="one"
//         className="btn"
//         value="1"
//     >1</button>



// </div>

// <div
//     className="border card"
//     id="two"
//     name="2">
//     <button
//         onClick={(e) => handleNumberClick(e)} value="2"
//         name="two"
//         id="two"
//         className="btn" >2</button>

// </div>

// <div
//     className="border card"
//     id="three"
//     name="3">
//     <button value="3"
//         onClick={(e) => handleNumberClick(e)}
//         name="three"
//         id="three"
//         className="btn" >3</button>

// </div>

// <div
//     className="border card"
//     // onClick={(e) => handleNumberClick(e) }
//     id="subtract"
//     name="-">
//     <button
//         onClick={(e) => handleOperatorClick(e)}
//         name="subtract"
//         id="subtract"
//         value="-"
//         className="btn" >-</button>

// </div>


// <div
//     className="border card"
//     id="four"
//     name="4">
//     <button onClick={(e) => handleNumberClick(e)}
//         name="four"
//         id="four"
//         value="4"
//         className="btn" >4</button>
// </div>

// <div
//     className="border card"
//     id="five"
//     name="5">
//     <button onClick={(e) => handleNumberClick(e)}
//         name="five"
//         id="five"
//         value="5"
//         className="btn" >5</button>
// </div>

// <div
//     className="border card"
//     id="six"
//     name="6">
//     <button onClick={(e) => handleNumberClick(e)}
//         name="six"
//         id="six"
//         value="6"
//         className="btn" >6</button>
// </div>

// <div
//     className="border card"
//     id="multiply"
//     name="*"
//     value="*">
//     <button onClick={(e) => handleOperatorClick(e)}
//         name="button"
//         id="button"
//         value="*"
//         className="btn"
//     >*</button>
// </div>

// <div
//     className="border card"
//     id="seven"
//     name="7">
//     <button onClick={(e) => handleNumberClick(e)}
//         name="seven"
//         id="seven"
//         value="7"
//         className="btn" >7</button>
// </div>

// <div
//     className="border card"
//     id="eight"
//     name="8">
//     <button onClick={(e) => handleNumberClick(e)}
//         name="eight"
//         id="eight"
//         value="8"
//         className="btn" >8</button>
// </div>

// <div
//     className="border card"
//     id="nine"
//     name="9">
//     <button onClick={(e) => handleNumberClick(e)}
//         name="nine"
//         id="nine"
//         value="9"
//         className="btn" >9</button>
// </div>

// <div
//     className="border card"
//     id="divide"
//     name="/">
//     <button onClick={(e) => handleOperatorClick(e)}
//         name="divide"
//         id="divide"
//         value="/"
//         className="btn" >/</button>
// </div>

// <div
//     className="border card"
//     id="zero"
//     name="0">
//     <button onClick={(e) => handleZeroClick(e)}
//         name="zero"
//         id="zero"
//         value="0"
//         className="btn" >0</button>
// </div>


// <div
//     className="border card"
//     id="decimal"
//     name=".">
//     <button onClick={(e) => handleDecimal(e)}
//         name="decimal"
//         value="."
//         id="button"
//         className="btn" >.</button>
// </div>

// <div
//     className="border card"
//  onClick={(e) => handleEqualClick(e)}
//  id="equals"
//  name="">
//  =
// >
// </div>

// <div
//     className="border card"
//     id="equals"
//     name="=">
//     <button 
//     // onClick={(e) =>                        handleEqualClick(e, thisstate)}
//         // handleEqualClick(e, data.state)} 
//         // handleEqualClick(e, state)} 

//         name="button" id="button"
//         value="="
//         className="btn" >=</button>


// </div>