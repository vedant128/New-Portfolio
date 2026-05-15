import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

import skyScene from '../assets/3d/sky.glb'

const Sky = () => {
    const sky = useGLTF(skyScene);

    return (
        <mesh>
            {/* Use the primitive tag to render the 3D model */}
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky
