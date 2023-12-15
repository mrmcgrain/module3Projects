// import react from "react"
import style from "./style/Poke.module.css"


function Child(props) {

    // console.log("props", props)



    return (

        <div key={props.key} className={style.flex}>

            <div className={`${style.card}`}>

                <div>

                    <p className={style.fontBig}> {props.name} </p>

                    <p className={`${style.fontMed} ${style.flex}`}>{props.types.join(' - ')}</p>

                    <p className={`${style.fontMed} ${style.flex}`}>{props.id}</p>

                    <button className={`${style.del}`} onClick={() => props.handleDelete(props._id)}>X</button>

                </div>

            </div>

        </div>
    )
}

export default Child