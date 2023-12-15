// handles the view field for total and input, result...etc

export default function views(props) {
    console.log("VIEWS component")
    console.log("props from VIEWS", props.state)


    // preNum={state.prevNum}
    // curNum={state.currentNum}
    // curOp={state.operator}
    // preOp={state.SecondOperator} // holds current operator
    // opFlag={state.operatorFlag} //: false,
    // chain={state.chain}
    // result={state.result}//on = holds value of math
    // input={state.input} //holds every value clicked to display
    // total={state.total} //theroy of ....
    // dec={state.decimal}
    // negFlag={state.negativeFlag}


    return (

        <div className="flex">


            <div className="border input row" id="output">input:
        {props.input}
            </div>
            <div className="border input row" id="output">
                preNum : {props.prevNum}   :||:   
                curNum : {props.currentNum} || 
                operator: {props.operator} || 
                SecOp : {props.SecondOperator} || 
                chain : {props.chain} || 
                total: {props.total} | 
                result {props.result}
                     {props.input}
            </div>


            <div className="border input row" placeholder="0" id="display">total:
        {props.total}
            </div>


        </div>



    )
}