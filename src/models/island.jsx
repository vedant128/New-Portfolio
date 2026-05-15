import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import islandScene from "../assets/3d/island.glb";

export function Island({
    isRotating,
    setIsRotating,
    setCurrentStage,
    currentFocusPoint,
    ...props
}) {
    const islandRef = useRef();
    // Get access to the Three.js renderer and viewport
    const { gl, viewport, camera } = useThree();
    const { nodes, materials } = useGLTF(islandScene);

    // This function is called on each frame update
    useFrame(() => {
        // Calculate the camera's rotation angle around the island
        // We use the camera's position relative to the island's position
        const dx = camera.position.x - props.position[0];
        const dz = camera.position.z - props.position[2];
        
        // Calculate the angle in radians
        let angle = Math.atan2(dx, dz);
        
        // Normalize the angle to [0, 2 * Math.PI]
        // Offset by the initial rotation if necessary
        const normalizedRotation = ((angle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

        // Set the current stage based on the camera's orientation
        // Note: These values might need adjustment since we switched from object rotation to camera rotation
        switch (true) {
            case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
                setCurrentStage(4);
                break;
            case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
                setCurrentStage(3);
                break;
            case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
                setCurrentStage(2);
                break;
            case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                setCurrentStage(1);
                break;
            default:
                setCurrentStage(null);
        }
    });


    return (
        <a.group ref={islandRef} {...props}>
            <mesh
                geometry={nodes.Groundplane_ExtraTexture_0.geometry}
                material={materials.ExtraTexture}
                position={[46.709, 9.028, 33.657]}
            />
            <mesh
                geometry={nodes.Stairs_MainTexture_0.geometry}
                material={materials.MainTexture}
            />
            <mesh
                geometry={nodes.Rocks_MainTexture_0.geometry}
                material={materials.MainTexture}
                position={[0, -2.142, 0]}
            />
            <mesh
                geometry={nodes.Oven_MainTexture_0.geometry}
                material={materials.MainTexture}
            />
            <mesh
                geometry={nodes.WingedSun_MainTexture_0.geometry}
                material={materials.MainTexture}
                position={[-189.694, 167.531, 24.655]}
                rotation={[1.389, 0, 0]}
                scale={0.329}
            />
            <mesh
                geometry={nodes.Ptah_MainTexture_0.geometry}
                material={materials.MainTexture}
                position={[-156.068, 31.22, -28.954]}
                scale={0.565}
            />
            <mesh
                geometry={nodes.House_MainTexture_0.geometry}
                material={materials.MainTexture}
            />
            <mesh
                geometry={nodes.Cats_ExtraTexture_0.geometry}
                material={materials.ExtraTexture}
            />
            <mesh
                geometry={nodes.Plants_ExtraTexture_0.geometry}
                material={materials.ExtraTexture}
            />
            <mesh
                geometry={nodes.CanopicPots_MainTexture_0.geometry}
                material={materials.MainTexture}
            />
            <mesh
                geometry={nodes.Carpets_MainTexture_0.geometry}
                material={materials.MainTexture}
            />
            <mesh
                geometry={nodes.Ladder_MainTexture_0.geometry}
                material={materials.MainTexture}
            />
            <mesh
                geometry={nodes.Jars_MainTexture_0.geometry}
                material={materials.MainTexture}
            />
            <mesh
                geometry={nodes.Extras_MainTexture_0.geometry}
                material={materials.MainTexture}
            />
            <mesh
                geometry={nodes.Racks_MainTexture_0.geometry}
                material={materials.MainTexture}
            />
            <mesh
                geometry={nodes.Props_MainTexture_0.geometry}
                material={materials.MainTexture}
            />
        </a.group>
    )

}

useGLTF.preload(islandScene)


export default Island