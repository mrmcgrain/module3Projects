import React, { createContext, useState, useContext } from "react"
import { useResolvedPath } from "react-router"

const MyContext = createContext()

export const useData = () => useContext(MyContext)


export function MyProvider({ children }) {


    // const [ test, setTest ] = useState("test")

    const [data, setData] = useState({
        preNum: "",
        curNum: "",
        operator: "", //hold first op
        operator2: "", //holds 2nd op
        opFlag: false, // if Op
        negFlag: false, // if Neg
        input: "", //all characters
        output: "", // duh
        result: "", // equal
        total: "", //
        chain: "", //chained events
        decFlag: false, //if Dec
        testFlag: false

    })



     function  calculate  (preNum, op, curNum, loc){

        console.log("CAlcutlate Hit")
        // const { data, setData } = useData()


        switch (op) {

            case "+":
                setData(prev => ({
                    ...prev,
                    loc: parseInt(preNum) + parseInt(curNum)

                }))
                break;

            case "-":
                setData(prev => ({
                    ...prev,
                    loc: parseInt(preNum) - parseInt(curNum)

                }))
                break;

            case "/":
                setData(prev => ({
                    ...prev,
                    loc: parseInt(preNum) / parseInt(curNum)

                }))
                break;

            case "*":
                setData(prev => ({
                    ...prev,
                    loc: parseInt(preNum) * parseInt(curNum)

                }))
                break;
        }
    }



    const handleClear = (e) => {

        console.log("context, clearhit")

        setData(prev => ({
            ...prev,
            preNum: "",
            curNum: "",
            operator: "", //hold first op
            opFlag: false, // if Op
            negFlag: false, // if Neg
            input: "", //all characters
            output: "", // duh
            result: "", // equal
            chain: "", //chained events

        }))
    }

    // Add state and handlers here



    return (

        <MyContext.Provider

            value={{
                setData,
                data

            }}
        >
            {children}


        </MyContext.Provider>


    )




}

