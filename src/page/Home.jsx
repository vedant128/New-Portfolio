import React, { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';
import Music from '../assets/music.mp3'
import { soundoff, soundon } from '../assets/icons';

const Home = () => {

    const audioRef = useRef(null);

    // Music ON by default
    const [isPlayingMusic, setIsPlayingMusic] = useState(true);

    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);

    // AUDIO SETUP
    useEffect(() => {

        audioRef.current = new Audio(Music);

        audioRef.current.volume = 0.4;
        audioRef.current.loop = true;

        // Try autoplay
        const playMusic = async () => {
            try {
                await audioRef.current.play();
                setIsPlayingMusic(true);
            } catch (error) {

                console.log('Autoplay blocked');

                // Play after first interaction
                const enableAudio = async () => {
                    try {
                        await audioRef.current.play();
                        setIsPlayingMusic(true);
                    } catch (err) {
                        console.log(err);
                    }

                    window.removeEventListener('click', enableAudio);
                    window.removeEventListener('touchstart', enableAudio);
                };

                window.addEventListener('click', enableAudio);
                window.addEventListener('touchstart', enableAudio);
            }
        };

        playMusic();

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };

    }, []);

    // Toggle music
    useEffect(() => {

        if (!audioRef.current) return;

        if (isPlayingMusic) {
            audioRef.current.play().catch(() => { });
        } else {
            audioRef.current.pause();
        }

    }, [isPlayingMusic]);

    const adjustIslandForScreenSize = () => {

        let screenScale = null;
        let screenPosition = null;
        let rotation = [0, 4.7, 0];

        if (window.innerWidth < 768) {

            // Mobile
            screenScale = [0.022, 0.022, 0.022];
            screenPosition = [0, -3, -10];

        } else if (window.innerWidth < 1200) {

            // Tablet
            screenScale = [0.045, 0.045, 0.045];
            screenPosition = [0, -5, -18];

        } else {

            // Desktop
            screenScale = [0.12, 0.12, 0.12];
            screenPosition = [0, -10, -33];
        }

        return [screenScale, screenPosition, rotation];
    }

    const adjustPlaneForScreenSize = () => {

        let screenScale = null;
        let screenPosition = null;

        if (window.innerWidth < 768) {

            screenScale = [0.8, 0.8, 0.8];
            screenPosition = [0, 1.5, 0];

        } else {

            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [3, -1, -4];
        }

        return [screenScale, screenPosition];
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

    const [planeScale, planePosition] = adjustPlaneForScreenSize();

    return (
        <section className='w-full h-screen relative'>

            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>

            <Canvas
                className={`w-full h-screen ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{
                    position: [0, 0, 5],
                    fov: 75,
                    near: 0.1,
                    far: 1000
                }}
            >

                <Suspense fallback={<Loader />}>

                    {/* Lights */}
                    <hemisphereLight
                        skyColor="#b1e1ff"
                        groundColor="#000000"
                        intensity={1}
                    />

                    <directionalLight
                        position={[1, 1, 1]}
                        intensity={2}
                        castShadow
                    />

                    <ambientLight intensity={0.5} />

                    <pointLight
                        position={[10, 5, 10]}
                        intensity={2}
                    />

                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={2}
                    />

                    {/* Models */}
                    <Bird />

                    <Sky
                        isRotating={isRotating}
                    />

                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />

                    <Plane
                        scale={planeScale}
                        planePosition={planePosition}
                        isRotating={isRotating}
                        rotation={[0, 20, 0]}
                    />

                </Suspense>

            </Canvas>

            {/* Music Button */}
            <div className='absolute bottom-6 left-6'>

                <button
                    onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                    className='w-12 h-12 rounded-full flex items-center justify-center cursor-pointer
                    bg-white/10 backdrop-blur-md border border-white/20
                    shadow-lg hover:bg-white/20 hover:scale-110
                    transition-all duration-300 ease-in-out'
                >

                    <img
                        src={isPlayingMusic ? soundon : soundoff}
                        alt='sound'
                        className='w-6 h-6 object-contain'
                    />

                </button>

            </div>

        </section>
    )
}

export default Home