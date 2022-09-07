import React, {useState} from "react";

function Tile({hog}){
    console.log(hog)
    const [hide, setHidden] = useState(true)
    function displayDetails(){
        setHidden(!hide)
    }
    const hidden = hide ? "none" : ""
    return(
        <div className="ui eight wide column" onClick={displayDetails}>
            <img src={hog.image} alt={hog.name} />
            <h1>{hog.name}</h1>
            <div style={{display: hidden}}>
                <p>Speciality: {hog.speciality}</p>
                <p>Weight: {hog.weight}</p>
                <p>Greased: {hog.greased ? "✅" : "❌"}</p>
                <p>Highest Medal Achieved: {hog.hi}</p>
            </div>
        </div>
    )
}

export default Tile