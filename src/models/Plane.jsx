import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import planeScene from '../assets/3d/plane.glb'

const Plane = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);

    // Play the animation based on the rotation state
    useEffect(() => {
        if (isRotating) {
            actions['Take 001'].play();
        } else {
            actions['Take 001'].stop();
        }
    }, [actions, isRotating]);


    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane
