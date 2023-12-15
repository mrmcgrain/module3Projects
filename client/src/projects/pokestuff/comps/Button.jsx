import style from "./style/Poke.module.css"


export default function Button(props) {

    return (

        <div className={`${style.flex}`}>

            <div className={style.btnFlex}>
                <button
                    className={style.btn}
                    value="" onClick={(e) => props.handleButtonClick(e)}>🌐</button>

                <button className={style.btn}
                    value="fire" onClick={(e) => props.handleButtonClick(e)}>🔥</button>

                <button className={style.btn}
                    value="poison" onClick={(e) => props.handleButtonClick(e)}>🤢</button>

                <button className={style.btn}
                    value="water"   onClick={(e) => props.handleButtonClick(e)}>💧</button>

                <button className={style.btn}
                    value="bug" onClick={(e) => props.handleButtonClick(e)}>🐛</button>

                <button className={style.btn}
                    value="flying" onClick={(e) => props.handleButtonClick(e)}>🦅</button>

                <button className={style.btn}
                    value="electric" onClick={(e) => props.handleButtonClick(e)}>⚡</button>

                <button className={style.btn}
                    value="psychic" onClick={(e) => props.handleButtonClick(e)}>👾</button>

                <button className={style.btn}
                    value="fighting" onClick={(e) => props.handleButtonClick(e)}>🦾</button>

                <button className={style.btn}
                    value="rock" onClick={(e) => props.handleButtonClick(e)}>🥔</button>

                <button className={style.btn}
                    value="ice" onClick={(e) => props.handleButtonClick(e)}>❄</button>

                <button className={style.btn}
                    value="dragon" onClick={(e) => props.handleButtonClick(e)}>🐲</button>
            </div>
        </div>
    )
}