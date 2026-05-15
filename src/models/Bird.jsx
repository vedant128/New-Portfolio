import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import birdScene from '../assets/3d/bird.glb'

const Bird = () => {
    const birdRef = useRef();
    const { scene, animations } = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
        // Start the bird's flapping animation
        actions['Take 001'].play();
    }, []);

    return (
        <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird
