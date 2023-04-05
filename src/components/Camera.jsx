import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";

export function Camera({cameraRef}){

    return <PerspectiveCamera ref={cameraRef} makeDefault zoom={1} position={[0,6,25]} fov={65}/>
}