// Handles the main HTML markup of the page

import React, { useState, useContext, useEffect } from "react"

import "../style/calc.css"


export default function CalcDashBoard() {



    const [data, setData] = useState({
        preNum: "",
        curNum: "",
        operator: "", //hold first op
        // operator2: "", //holds 2nd op
        zeroFlag: false,
        opFlag: false, // if Op
        negFlag: false, // if Neg
        input: "", //all characters
        output: 0, // duh
        result: 0, // equal
        total: "", //
        chain: "", //chained events
        decFlag: false, //if Dec

    })


    useEffect(() => {

        setData(prev => ({
            ...prev,
            result: data.chain,
            output: data.input
        }))


    }, [data.input])


    const handleNumberClick = (e) => {
        console.log("handleNumberClick")

        setData(prev => ({
            ...prev,
            opFlag: false,
    

        }))

        if (data.negFlag) {
            setData(prev => ({
                ...prev,
                curNum: "-" + e.target.value,
                negFlag: false,
                input: prev.input + "-" + e.target.value

            }))

        } else {
            setData(prev => ({
                ...prev,
                curNum: prev.curNum + e.target.value,
                input: prev.input + e.target.value
            }))
        }

    }



    const calculate = (preNum, op, curNum) => {
      
        switch (op) {

            case "+":
                setData(prev => ({
                    ...prev,
                    chain: parseFloat(preNum) + parseFloat(curNum),
                    preNum: data.curNum,
                    curNum: "",
                    result: parseFloat(preNum) + parseFloat(curNum)
                }))


                break;

            case "-":
                setData(prev => ({
                    ...prev,
                    chain: parseFloat(preNum) - parseFloat(curNum),
                    preNum: data.curNum,
                    curNum: "",
                    result: parseFloat(preNum) - parseFloat(curNum)

                }))
                break;

            case "/":
                setData(prev => ({
                    ...prev,
                    chain: parseFloat(preNum) / parseFloat(curNum),
                    preNum: data.curNum,
                    curNum: "",
                    result: parseFloat(preNum) / parseFloat(curNum)


                }))
                break;

            case "*":
                setData(prev => ({
                    ...prev,
                    chain: parseFloat(preNum) * parseFloat(curNum),
                    preNum: data.curNum,
                    curNum: "",
                    result: parseFloat(preNum) * parseFloat(curNum)


                }))
                break;
        }
    }


    const handleOperatorClick = (e) => {

        console.log("handleOperatorClick", data.preNum, data.curNum)
        if (!data.opFlag) {
            console.log("fuck")
            setData(prev => ({
                ...prev,
                input: prev.input + e.target.value
            }))

        } else if (data.opFlag && e.target.value !== "-") {

            console.log("you")

            if (!Number.isNaN(data.input[data.input.length - 1])) {


                let test = data.input.split("")
                test[data.input.length - 1] = e.target.value


                setData(prev => ({
                    ...prev,
                    input: test.join("")
                }))

            } else {
                console.log("pleae")
            }
        }
        

        if (data.chain && data.curNum) {

            console.log("op-chain && curNum")

            calculate(data.chain, data.operator, data.curNum, data.chain)

            setData(prev => ({
                ...prev,
            }))

        } else

            if (data.preNum && data.curNum) {
                console.log("op-data.preNum && data.curNum")

                calculate(data.preNum, data.operator, data.curNum, data.chain)

                setData(prev => ({
                    ...prev,
                    preNum: data.curNum,
                    curNum: "",
                }))

            } else

                if (!data.opFlag && data.curNum) {

                    console.log("op-data.opFlag && data.curNu")

                    setData(prev => ({
                        ...prev,
                        preNum: data.curNum,
                        curNum: "",
                        operator: e.target.value,
                        opFlag: true,

                    }))

                }

        if (data.opFlag && e.target.value === "-") {

            console.log("op-opF - neg")

            setData(prev => ({
                ...prev,
                negFlag: true,

            }))


        } else {

            console.log("op-Else")

            setData(prev => ({
                ...prev,
                operator: e.target.value,
                opFlag: true,
                negFlag: false,
            }))
        }

        setData(prev => ({
            ...prev,
       
            decFlag: false
        }))

    }

    // 3 + 5 * 6 - 2 / 4 should produce 32.5 or 11.5

    const handleClearClick = (e) => {

        setData(prev => ({
            ...prev,
            preNum: "",
            curNum: "",
            operator: "", //hold first op
            opFlag: false, // if Op
            negFlag: false, // if Neg
            input: "", //all characters
            output: 0,// duh
            result: 0, // equal
            chain: "", //chained events

        }))

    }

    const handleZeroClick = (e) => {
        console.log("zero click", data.input)

        if (!data.curNum) {
            setData(prev => ({
                ...prev,
                curNum: e.target.value,
                input: e.target.value
            }))
        } else if (data.curNum.length > 1) {
            setData(prev => ({
                ...prev,
                curNum: prev.curNum + e.target.value,
                input: prev.input + e.target.value
            }))
        }

    }

    // 3 + 5 * 6 - 2 / 4 should produce 32.5 or 11.5


    const handleDecimal = (e) => {
        console.log("dec hit")
        if (!data.decFlag) {
            setData(prev => ({
                ...prev,
                curNum: prev.curNum + ".",
                decFlag: true,
                input: prev.input + "."
            }))
        }

    }


    const handleEqualClick = (e) => {

        if (data.chain && data.curNum) {

            calculate(data.chain, data.operator, data.curNum, data.result)





        } else if (data.curNum && data.preNum) {

            calculate(data.preNum, data.operator, data.curNum, data.result)

        }
    }

    return (


        <div id="MainContainer" className="calc-border">

            {console.log("input", data.input, data)}


            <div id="container" className="calc-grid calc-border">

                <div className="calc-display" id="display1" >

                    {data.result ? <p id="res">{data.result}</p> : <p id="display">{0}</p>}

                    {data.output ? <p id="display">{data.output}</p> : <p id="display">0</p>}


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
                    id="equals"
                >
                    <button
              
                        onClick={(e) => handleEqualClick(e)}
                        name="equals" id="button"
                        value="="
                        className="calc-btn" >=</button>


                </div>

                <div id="outputs">

                    <div><p>preNum: {data.preNum} </p></div>

                    <div><p>curNum: {data.curNum}</p></div>

                </div>

                <div id="outputs">

                    <div><p>op:{data.operator}</p></div>
                    <div><p>op2:{data.operator2}</p></div>

                </div>

                <div id="output2">

                    <div> <p>result:{data.result}</p></div>
                    <div><p>chain:{data.chain}</p></div>

                </div>

                <div id="outputs">

                    <div><p>negF:{data.negFlag}</p></div>
                    <div><p>opF:{data.opFlag}</p></div>

                </div>
                <div id="outputs">
                    <p>input: {data.input}</p>
                    <p>output: {data.output}</p>
                </div>

            </div>

        </div>

    )
}







