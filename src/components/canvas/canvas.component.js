import React from 'react'
import { Canvas } from '@react-three/fiber'

import YellowPlaster from '../yellow-plaster/yellow-plaster.component'

const CanvasComponent = () => {
    return (
        <Canvas style={{backgroundColor: 'white', minHeight: '100vh'}}>
            <pointLight position={[12, 10, 10]} />
            <YellowPlaster />
        </Canvas>
    )
}

export default CanvasComponent