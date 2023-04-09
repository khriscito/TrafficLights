import React, {useState} from "react"
import "../../styles/styles.css";


const TrafficLight=() =>{

    const [color, setColor] = useState("red");
    const [purpleLight, setPurpleLight] = useState(false)


    const handleClick=(id) =>{
        
        setColor(id)
        let randomColor = document.getElementById(id)
        randomColor.classList.add("lightened")

    }
    
    let array=["red","yellow","green"]
    if (purpleLight==true) {
      array = [...array, "purple"];
    }
    const generateRandom=(array) => {
        return array[Math.floor(Math.random()*array.length)]}

const handlePurpleClick = () => {
if (purpleLight==(false)){
          setPurpleLight(true); }
    else setPurpleLight(false)
      }

return(

<div>

<div className="traffic-stick"></div>
<div className="traffic-body p-4">

<div className="traffic-container ">
<div onClick={()=>handleClick("red")}id="red"className={`traffic-red ${color === "red"&&"lightened"}`}>
</div>
</div>
<div onClick={()=>handleClick("yellow")} id="yellow" className={`traffic-yellow ${color === "yellow"&&"lightened"}`}></div>
<div onClick={()=>handleClick("green")}id="green" className={`traffic-green ${color === "green"&&"lightened"}`}></div>


{purpleLight && <div onClick={()=>handleClick("purple")}id="purple" className={`traffic-purple ${color === "purple"&&"lightened"}`}></div>}

</div>

<div class="d-grid gap-2 col-6 mx-auto">
<button onClick={() => handleClick(generateRandom(array))} class="btn btn-primary" type="button">Encender Luz aleatoria</button>
</div>
<div class="d-grid gap-2 col-6 mx-auto m-5"><button onClick={handlePurpleClick} class="btn btn-primary" type="button">Agregar color purpura</button>



</div>
</div>
)
};

export default TrafficLight