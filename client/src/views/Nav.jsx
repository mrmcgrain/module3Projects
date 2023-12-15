import React from 'react'
import { Link } from "react-router-dom"

export default function Nav() {





return (

<div>
    <div id="headerNavBar">


<div>
   <Link to="/Drum" >Drum</Link>

</div>

<div>
   <Link to="/Poke" >Poke Fullstack</Link>

</div>
<div>
   <Link to="/PokeFront" >Poke FrontEnd</Link>

</div>


<div>

   <Link to="/CalcDashBoard" >CalcDashBoard</Link>
</div>

<div>

   <Link to="/CalcDashBoardCopy" >CalcDashBoardCopy</Link>
</div> 

<div>
   <Link to="/Markup" >Markup</Link>
</div>


<div>

   <Link to="/ProductList" >ProductList</Link>
</div>

<div>

   <Link to="/QuoteDashBoard" >Quote Generator</Link>
</div>

<div>
   <Link to="/PomodoroDash" >Pomodoro Clock</Link>
</div>

    </div>
 
    

</div>





)






}