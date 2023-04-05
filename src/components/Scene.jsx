import { Canvas } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Laptop } from "./Laptop";
import { OrbitControls } from "@react-three/drei";
import { Luz } from "./Luz";
import * as THREE from "three";
import { Camera } from "./Camera";
import { gsap } from "gsap";

export function Scene() {
  const cameraRef = useRef();
  const orbitRef = useRef()
  const [isZoomed, setIsZoomed] = useState(false);

  function handleLaptopClick() {
    const targetZoom = isZoomed ? 1 : 2;
    const targetHeight = isZoomed ? 6 : 12; // Ajusta estos valores según tus necesidades
    const targetOrbitY = isZoomed ? 6 : 12; // Ajusta estos valores según tus necesidades
  
    gsap.to(cameraRef.current, {
      zoom: targetZoom,
      duration: 1,
      onUpdate: () => {
        cameraRef.current.updateProjectionMatrix();
      },
    });
  
    gsap.to(cameraRef.current.position, {
      x:0,
      y: targetHeight,
      z:25,
      duration: 1,
    });
  
    gsap.to(orbitRef.current.target, {
      y: targetOrbitY,
      duration: 1,
      onUpdate: () => {
        orbitRef.current.update();
      },
    });

    orbitRef.current.enabled = isZoomed
  
    setIsZoomed(false);
  }


  return (
    <div className="Contenedor" style={{ width: "100%", height: "100vh" }}>
      <Canvas
        gl={{
          outputEncoding: THREE.sRGBEncoding,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 3.4,
        }}
      >
        {/* Logica */}
        <Camera cameraRef={cameraRef} />
        <OrbitControls ref={orbitRef} target={[0, 6, 1]} />
        <Luz />
        {/* Objetos en escena */}
        <Laptop setIsZoomed={setIsZoomed} handleLaptopClick={handleLaptopClick} />
      </Canvas>
    </div>
  );
}
