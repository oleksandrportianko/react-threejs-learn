import React, { useMemo, useRef } from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useFrame, useLoader } from '@react-three/fiber'
import { useTexture } from '@react-three/drei';

export default function CarWheel() {
    const wheel = useRef()
    const obj = useLoader(OBJLoader, '/models/Car_Wheel/Car_Wheel.obj')
    const [normalDirectionTexture, baseColorTexture, heightTexture, metallicTexture, mixedAOTexture, roughnessTexture] = useTexture([
        "/models/Car_Wheel/Mat_Normal_DirectX.png",
        "/models/Car_Wheel/Mat_Base_Color.png",
        "/models/Car_Wheel/Mat_Height.png",
        "/models/Car_Wheel/Mat_Metallic.png",
        "/models/Car_Wheel/Mat_Mixed_AO.png",
        "/models/Car_Wheel/Mat_Roughness.png",
    ]);
    const geometry = useMemo(() => {
        let g;
        obj.traverse((c) => {
            if (c.type === "Mesh") {
                const _c = c;
                g = _c.geometry;
            }
        });
        return g;
    }, [obj]);

    console.log(wheel)

    const handlePointerMove = (e) => {
        console.log("placeElement", wheel)
        const x = e.clientX
        const y = e.clientY
        console.log(x / 100000)
        wheel.current.position.x += x / 10000
        wheel.current.position.y += y / 10000
        console.log('x', x)
        console.log('y', y)
    }

    return (
        <mesh onPointerOver={handlePointerMove} ref={wheel} geometry={geometry} scale={0.02}>
            <meshPhysicalMaterial map={normalDirectionTexture} />
            <meshPhysicalMaterial map={baseColorTexture} />
            <meshPhysicalMaterial map={heightTexture} />
            <meshPhysicalMaterial map={metallicTexture} />
            <meshPhysicalMaterial map={mixedAOTexture} />
            <meshPhysicalMaterial map={roughnessTexture} />
        </mesh>
    );
}