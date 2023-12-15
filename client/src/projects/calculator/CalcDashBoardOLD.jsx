import React, { useState } from "react"
// import CSS from "./calculator/style/calc.css"
// import style from "../style/calc.css"
// import Display from "./components/Display.jsx"
// import Views from "./components/Views.jsx"
// import handleEqualClick from "./Utilities/handleEqualClick";




export default function DashBoard() {


    // const [state, setState] = useState({
    //     prevNum: "",
    //     currentNum: "",
    //     operator: "", // holds current operator
    //     operator2: "", // holds current operator
    //     operatorFlag: false,
    //     chain: "0",
    //     result: "0", //on = holds value of math
    //     input: "", //holds every value clicked to display
    //     total: "0", //theroy of ....
    //     decimal: false,
    //     negativeFlag: false,
    // })

    const [state, setState] = useState({
        preNum: "",
        curNum: "",
        operater: "", //hold first op
        operator2: "", //holds 2nd op
        opFlag: false, // if Op
        negFlag: false, // if Neg
        input: "", //all characters
        ouytput: "", // duh
        result: "", // equal
        total: "", //
        chain: "", //chained events
        decFlag: false //if Dec




    })


    const handleNumberClick = (e) => {
        console.log("handleNumberClick")

        setState(prev => ({
            ...prev,
            prevNum: state.prevNum + e.target.value,
            input: prev.input + e.target.value,
            operatorFlag: false,
        }))


    }



    /////////////// HANDLE OPERATOR
    const handleOperatorClick = (e) => {
        console.log("handleOpertorClick")
        e.preventDefault()


        // if (data.prevNum && data.curNum) {
      

        // switch (data.operator) {

        //     case "+":
        //         console.log('FIRING HERE opClick, case +')
        //         setData(prev => ({
        //             ...prev,
        //             chain: parseFloat(data.previousNum) + parseFloat(data.currentNum),
        //             preNum: data.chain
        //         }))
        //         break;

        //     case "-":
        //         setData(prev => ({
        //             ...prev,
        //             chain: parseFloat(data.currentNum) - parseFloat(data.previousNum),
        //             preNum: data.chain

        //         }))
        //         break;

        //     case "/":
        //         setData(prev => ({
        //             ...prev,
        //             chain: parseFloat(data.currentNum) / parseFloat(data.previousNum),
        //             preNum: data.chain

        //         }))
        //         break;

        //     case "*":
        //         setData(prev => ({
        //             ...prev,
        //             chain: parseFloat(data.previousNum) * parseFloat(data.currentNum),
        //             preNum: data.chain

        //         }))
        //         break;
        //     default:
        //         return null

      
        // }


        // if (data.prevNum) {

        //     //ON OP click, transfer PreNum To Current Num

        //     console.log("handleOperatorC -- if preNum")
        //     setdata(prev => ({
        //         ...prev,
        //         currentNum: data.prevNum,
        //         prevNum: ""

        //     }))
        // }


        if (state.operatorFlag && state.operator) {
            console.log(" if ( operatorFlag && operator) - line 40")
            setState(prev => ({

                ...prev,
                secondOperator: state.operator,
                operator: e.target.value,
                input: prev.input + e.target.value,

                // input: prev.input + e.target.attributes.name.value

            }))

        } else if (state.operatorFlag) {   //Doubels

            console.log("else if (operatorFlag) :52:")

            if (e.target.value === "*" ||
                e.target.value === "+" ||
                e.target.value === "/"
                // e.target.value === "-"
            ) {
                console.log("if Flag, and operator  :59:")

                setState(prev => ({
                    ...prev,
                    operator: e.target.value,
                    //or input.len -1
                    input: prev.input + e.target.value,

                }))
            }

        } else if (state.operatorFlag && e.target.value === "-") {

            //Negative Num handling
            console.log("else if ( operatorFlag && e.target.value === " - "")

            setState(prev => ({
                ...prev,
                prevNum: "-",
                input: prev.input + e.target.value,



            }))

        } else {

            console.log("HandleOperator - else :82:")
            console.log("e.target.v", e.target.value)
            setState(prev => ({
                ...prev,
                operator: e.target.value,
                input: prev.input + e.target.value,


            }))
        }

        /////////////////END OPERATOR ////////////////////

    }

    const handleClearClick = (e) => {
        console.log("handleClearClick")

    }


    const handleDecimal = (e) => {
        console.log("handleDecimal")

    }


    const handleZeroClick = (e) => {
        console.log("handleZeroClick")

    }


    // <handleEqualClick
    //     prevNum={data.prevNum}
    //     astate={state}


    // />


    // const handleEqualClick = (e, p) => {
    //     console.log(e)
    //     console.log(p)
    //     console.log("handleEqualClick")

    // }


    console.log("DASHBD state", state)
    return (


        <div id="main">

            {/* <handleEqualClick
                state={state}
            /> */}


            <Views
                input={state.input}
                total={state.total}
                state={state}


                prevNum={state.prevNum}
                currentNum={state.currentNum}
                operator={state.operator}
                SecondOperator={state.SecondOperator} // holds current operator
                operatorFlag={state.operatorFlag} //: false,
                chain={state.chain}
                result={state.result}//on = holds value of math
                input={state.input} //holds every value clicked to display
                total={state.total} //theroy of ....
                dec={state.decimal}
                dec={state.decimal}
                negativeFlag={state.negativeFlag}



            />

            <Display
                handleEqualClick={handleEqualClick}
                handleNumberClick={handleNumberClick}
                handleOperatorClick={handleOperatorClick}
                handleDecimal={handleDecimal}
                handleClearClick={handleClearClick}
                handleZeroClick={handleZeroClick}
                thisstate={state}
            />


        </div>


    );
};