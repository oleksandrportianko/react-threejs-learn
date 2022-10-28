import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'

import YellowPlaster from '../yellow-plaster/yellow-plaster.component'

const CanvasComponent = () => {
    const [rotatePlaster, setRoratePlaster] = useState(2)

    const changeRotatePlaster = () => {
        setRoratePlaster(rotatePlaster + 1)
    }

    return (
        <Canvas style={{backgroundColor: 'white', minHeight: '100vh'}}>
            <pointLight position={[12, 10, 10]} />
            <mesh onClick={changeRotatePlaster} position={[-1, 0, 2]} rotation={[Math.PI / 2, 0, 0]}>
                <YellowPlaster />
            </mesh>
        </Canvas>
    )
}

export default CanvasComponent