import React from "react";
import { useGLTF , Html, } from "@react-three/drei";
import Page from "./Page";


export function Laptop({handleLaptopClick , setIsZoomed}) {
  const { nodes, materials } = useGLTF("./Recursos/Laptop.glb");
  return (
    <group dispose={null} onClick={handleLaptopClick}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.grey}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005_1.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007_1.geometry}
        material={materials.grey}
      />
      <mesh
        castShadow
        receiveShadow
        // geometry={nodes.Screen.geometry}
        // material={materials.Screen}
      >

        <Html onClick={()=>{
          handleLaptopClick()
        }} className="screen" occlude style={{width:'914px',height:'640px',overfloxY:'auto'}} transform position={[0.00062,12.851,-5.603]}>
            <Page setIsZoomed={setIsZoomed} handleLaptopClick={handleLaptopClick}/>
        </Html>

      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Teclas.geometry}
        material={materials.Keys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Touchpad.geometry}
        material={materials.Keys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TouchpadBtns.geometry}
        material={materials.Keys}
      />
    </group>
  );
}

useGLTF.preload("./Recursos/Laptop.glb");
