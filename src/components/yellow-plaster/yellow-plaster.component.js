import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function YellowPlaster(props) {
  const { scene, nodes, materials } = useGLTF('/models/yellow-plaster-3d-model/yellow_plaster_4k.gltf')

  console.log(nodes)
  console.log(scene)
  console.log(materials)


  return (
    <primitive object={scene} />
  ) 
}