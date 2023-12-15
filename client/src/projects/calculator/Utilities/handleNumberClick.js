const handleNumberClick = (e, props) => {
    // console.log("handleNumberClick", e.target.value, "cur", data.curNum, "pre", data.preNum)
    e.preventDefault()

    props.setData(prev => ({
        ...prev,
        curNum: prev.curNum + e.target.value
        // preNum: prev.curNum + e.target.value
    }))

    //     if(data.curNum){

    //     setData(prev => ({
    //         ...prev,
    //         // curNum: prev.curNum + e.target.value
    //         preNum: prev.curNum + e.target.value
    //     }))
    // }
}