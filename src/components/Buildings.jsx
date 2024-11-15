/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: smooth998 (https://sketchfab.com/smooth998)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-city-buildings-e0209ac5bb684d2d85e5ade96c92d2ff
Title: Low-poly City Buildings
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Buildings=(props)=>{
  const { nodes, materials } = useGLTF('/models/buildings.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material}
        position={[0.595, 0, -0.034]}
        scale={[0.9, 0.834, 0.9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.material}
        position={[0.154, 0.002, -0.305]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.ground}
        position={[0.199, 0.001, -0.116]}
        rotation={[0, 0.489, 0]}
        scale={2.381}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.material}
        position={[-0.374, 0.001, 0.023]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.material}
        position={[1.16, 0.002, -0.744]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.material}
        position={[-0.489, 0.341, 0.654]}
        scale={1.496}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.material}
        position={[0.134, 0.003, 0.222]}
        scale={0.726}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.material}
        position={[1.425, -0.003, -1.081]}
        scale={2.346}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.material}
        position={[-0.457, 0, 1.043]}
        scale={[0.575, 0.55, 0.575]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials.material}
        position={[1.077, 0, -0.255]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials.material}
        position={[0.36, 0.287, -1.218]}
        scale={1.463}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials.material}
        position={[0.822, 0.001, 0.855]}
        scale={[0.057, 0.103, 0.057]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials.material}
        position={[-1.363, -0.002, 0.466]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials.material}
        position={[0.62, -0.002, 0.619]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials.material}
        position={[-1.822, 0.005, 0.719]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.471, 1.849, 1.471]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials.material}
        position={[1.541, 0, 0.286]}
        scale={[0.575, 0.55, 0.575]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_36.geometry}
        material={materials.material}
        position={[-0.554, -0.001, 1.354]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.263}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials.material}
        position={[-0.148, 0, 1.054]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.112}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_40.geometry}
        material={materials.material}
        position={[0.285, 0, 0.854]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.096}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_42.geometry}
        material={materials.material}
        position={[-1.012, -0.128, 1.023]}
        scale={[0.9, 0.834, 0.9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44.geometry}
        material={materials.material}
        position={[0.388, -0.517, 0.886]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_46.geometry}
        material={materials.material}
        position={[1.147, -0.001, 0.801]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={1.263}
      />
    </group>
  )
}
useGLTF.preload('/models/buildings.glb')
export default Buildings;

