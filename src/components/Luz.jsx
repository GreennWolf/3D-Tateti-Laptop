import React from "react";

export function Luz(){
    return <>
        <directionalLight position={[10,10,10]} color={'#ff'} intensity={1.3}/>
        <ambientLight color={'#fff'} intensity={0.5}/>
    </>
}