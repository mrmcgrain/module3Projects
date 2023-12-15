// import { useNavigate } from 'react-router-dom';
import twitter from "../image/twitter.png"

export default function Footer( {handleNewQuote} ){
// let nav = useNavigate()


    return (
<div className="footer flex2">
    {/* <p>Footer Display </p> */}


        <div>
            <button  style={{backgroundColor: "#2aaae0", width: 40, height: 40, color: "white", borderRadius: 50}} id="new-quote" onClick={(e) => handleNewQuote(e)}> new </button>
        </div>
        <div>
            <a  href="http://w3schools.com" target="_blank">
                <button 
                id="tweet-quote" 
                ></button>
                
                <img style={{width: 40}} src={twitter} />
                </a>
                
        </div>

        



</div>


    )
    
}