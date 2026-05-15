import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
    POPUP

</div> */}

const Home = () => {

    const [isRotating, setIsRotating] = useState(false);

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = null;
        let rotation = [0, 4.7, 0];

        if (window.innerWidth < 768) {
            // Mobile (430 x 932)
            screenScale = [0.022, 0.022, 0.022];
            screenPosition = [0, -3, -10];
        } else if (window.innerWidth < 1200) {
            // Tablet
            screenScale = [0.045, 0.045, 0.045];
            screenPosition = [0, -5, -18];
        } else {
            // Desktop (2490 x 1216)
            screenScale = [0.12, 0.12, 0.12];
            screenPosition = [0, -10, -33];
        }

        return [screenScale, screenPosition, rotation];
    }


    const adjustPlaneForScreenSize = () => {
        let screenScale = null;
        let screenPosition = null;

        if (window.innerWidth < 768) {
            screenScale = [2, 2, 2];       // 1.5 → 2
            screenPosition = [0, 1.5, 0];
        } else {
            // Desktop
            screenScale = [1.5, 1.5, 1.5];       // 4 → 6
            screenPosition = [3, -1, -4];
        }

        return [screenScale, screenPosition];
    }


    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlaneForScreenSize();
    return (
        <section className='w-full h-screen relative '>

            <Canvas
                className={`w-full h-screen ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{
                    position: [0, 0, 5],   // 15 → 5, closer
                    fov: 75,               // 45 → 75, wider view
                    near: 0.1,
                    far: 1000
                }}
            >

                <Suspense fallback={<Loader />}>
                    {/* Hemisphere Light simulates the sky color and ground reflection */}
                    <hemisphereLight
                        skyColor="#b1e1ff"
                        groundColor="#000000"
                        intensity={1}
                    />

                    {/* Directional Light simulates sunlight from a specific angle */}
                    <directionalLight
                        position={[1, 1, 1]}
                        intensity={2}
                        castShadow
                    />

                    {/* Ambient Light provides soft overall lighting to the scene */}
                    <ambientLight intensity={0.5} />

                    {/* Point Light can be used to add a glow from a specific point, like a sun */}
                    <pointLight position={[10, 5, 10]} intensity={2} />

                    {/* Spot Light can be used to highlight a specific area with a cone of light */}
                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={2}
                    />


                    <Bird />
                    <Sky />

                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />

                    <Plane
                        scale={planeScale}
                        planePosition={planePosition}
                        isRotating={isRotating}
                        rotation={[0, 20, 0]}  // 0 → 20 on Y axis to face left
                    />
                </Suspense>

            </Canvas>
        </section>
    )
}

export default Home