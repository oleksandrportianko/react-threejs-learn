import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

export default function YellowPlaster() {
  const [cursorPosition, setCursorPosition] = useState({ x: 480, y: 190 })
  const [trigger, setTrigger] = useState(false)
  const { scene } = useGLTF('/models/yellow-plaster-3d-model/yellow_plaster_4k.gltf')
  const yellowPlasterRef = useRef()

  console.log(cursorPosition)

  const handleMovePointer = (e) => {
    console.log('pointer move', e)
    setCursorPosition({ x: e.screenX, y: e.screenY })
    setTrigger(true)
    setTimeout(() => {
      setTrigger(false)
    }, 1000)
  }

  useFrame(() => {
    if(yellowPlasterRef.current && trigger) {
      // console.log('yellowPlasterRef.current', yellowPlasterRef.current)
      if (cursorPosition.x > 480) {
        yellowPlasterRef.current.rotation.x += 0.01;
      } else {
        yellowPlasterRef.current.rotation.x -= 0.01;
      }
      if (cursorPosition.y > 190) {
        yellowPlasterRef.current.rotation.y += 0.01;
      } else {
        yellowPlasterRef.current.rotation.y -= 0.01;
      }
    }
  });

  return (
    <mesh onPointerMove={handleMovePointer} ref={yellowPlasterRef} position={[-1, 0, 2]} rotation={[Math.PI / 2, 0, 0]}>
      <primitive object={scene} />
    </mesh>
  ) 
}