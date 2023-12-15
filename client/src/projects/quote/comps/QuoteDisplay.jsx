

export default function QuoteDisplay( {view} ){




    return (

        
<div id="text"  style={{marginTop: "100px"}}>
    {/* <p>Quotte Display </p> */}
    <h1>

    "{view.quoteText}
    "

    </h1>
    <br />
    <p id="author" className="author"> 
    -{view.quoteAuthor}

    </p>

</div>


    )
    
}