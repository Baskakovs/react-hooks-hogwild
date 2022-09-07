import React from "react";
import Tile from "./Tile"

function HogList({data}){
    console.log(data)
    return(
        data.map((hog)=>{
            return(<Tile hog={hog}/>
            )
        })
    )
}

export default HogList