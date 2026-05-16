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
    const [isPlayingMusic, setIsPlayingMusic] = useState(true);
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const [showHint, setShowHint] = useState(true);

    // Hide hint after first interaction
    useEffect(() => {
        const hide = () => setShowHint(false);
        window.addEventListener('mousedown', hide);
        window.addEventListener('touchstart', hide);
        const timer = setTimeout(() => setShowHint(false), 6000);
        return () => {
            window.removeEventListener('mousedown', hide);
            window.removeEventListener('touchstart', hide);
            clearTimeout(timer);
        };
    }, []);

    // AUDIO SETUP
    useEffect(() => {
        audioRef.current = new Audio(Music);
        audioRef.current.volume = 0.4;
        audioRef.current.loop = true;

        const playMusic = async () => {
            try {
                await audioRef.current.play();
                setIsPlayingMusic(true);
            } catch (error) {
                console.log('Autoplay blocked');
                const enableAudio = async () => {
                    try {
                        await audioRef.current.play();
                        setIsPlayingMusic(true);
                    } catch (err) { console.log(err); }
                    window.removeEventListener('click', enableAudio);
                    window.removeEventListener('touchstart', enableAudio);
                };
                window.addEventListener('click', enableAudio);
                window.addEventListener('touchstart', enableAudio);
            }
        };
        playMusic();

        return () => {
            if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
        };
    }, []);

    useEffect(() => {
        if (!audioRef.current) return;
        if (isPlayingMusic) { audioRef.current.play().catch(() => { }); }
        else { audioRef.current.pause(); }
    }, [isPlayingMusic]);

    const adjustIslandForScreenSize = () => {
        let screenScale, screenPosition;
        const rotation = [0, 4.7, 0];
        if (window.innerWidth < 768) {
            screenScale = [0.022, 0.022, 0.022];
            screenPosition = [0, -3, -10];
        } else if (window.innerWidth < 1200) {
            screenScale = [0.045, 0.045, 0.045];
            screenPosition = [0, -5, -18];
        } else {
            screenScale = [0.12, 0.12, 0.12];
            screenPosition = [0, -10, -33];
        }
        return [screenScale, screenPosition, rotation];
    };

    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition;
        if (window.innerWidth < 768) {
            screenScale = [0.8, 0.8, 0.8];
            screenPosition = [0, 1.5, 0];
        } else {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [3, -1, -4];
        }
        return [screenScale, screenPosition];
    };

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlaneForScreenSize();

    return (
        <section className='w-full h-screen relative'>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600&display=swap');

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeOut {
                    from { opacity: 1; }
                    to { opacity: 0; pointer-events: none; }
                }
                @keyframes scrollDot {
                    0%   { transform: translateX(-50%) translateY(0); opacity: 1; }
                    80%  { transform: translateX(-50%) translateY(14px); opacity: 0; }
                    100% { transform: translateX(-50%) translateY(0); opacity: 0; }
                }
                @keyframes dragPulse {
                    0%, 100% { transform: translateX(0); opacity: 0.4; }
                    25%       { transform: translateX(-10px); opacity: 1; }
                    75%       { transform: translateX(10px); opacity: 1; }
                }
                @keyframes arrowBounce {
                    0%, 100% { transform: translateX(0); }
                    50%       { transform: translateX(6px); }
                }
                @keyframes pulse-ring {
                    0%   { transform: scale(1);   opacity: 0.5; }
                    100% { transform: scale(1.6); opacity: 0; }
                }

                .hint-wrap {
                    animation: fadeIn 1s 0.8s ease both;
                    transition: opacity 0.6s ease;
                    font-family: 'Sora', system-ui, sans-serif;
                }
                .hint-wrap.hide {
                    animation: fadeOut 0.6s ease forwards;
                }

                .scroll-mouse {
                    width: 28px; height: 44px;
                    border: 2px solid rgba(56,189,248,0.6);
                    border-radius: 14px;
                    position: relative;
                    margin: 0 auto 10px;
                }
                .scroll-dot {
                    width: 4px; height: 8px;
                    background: #38bdf8;
                    border-radius: 2px;
                    position: absolute;
                    top: 6px; left: 50%;
                    transform: translateX(-50%);
                    animation: scrollDot 1.6s ease-in-out infinite;
                }

                .drag-arrows span {
                    display: inline-block;
                    font-size: 1rem;
                    animation: dragPulse 1.8s ease-in-out infinite;
                }
                .drag-arrows span:first-child { animation-delay: 0s; }
                .drag-arrows span:last-child  { animation-delay: 0.2s; }
            `}</style>

            {/* HomeInfo overlay */}
            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>

            {/* Scroll / Drag hint */}
            <div
                className={`hint-wrap${!showHint ? ' hide' : ''}`}
                style={{
                    position: 'absolute',
                    bottom: '36px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    pointerEvents: 'none',
                    userSelect: 'none',
                }}
            >
                {/* Drag hint */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'rgba(6,13,31,0.6)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(56,189,248,0.15)',
                    borderRadius: '100px',
                    padding: '10px 22px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                }}>
                    {/* Animated grab icon */}
                    <div style={{ position: 'relative', width: '28px', height: '28px', flexShrink: 0 }}>
                        <div style={{
                            position: 'absolute', inset: 0,
                            borderRadius: '50%',
                            border: '1.5px solid rgba(56,189,248,0.5)',
                            animation: 'pulse-ring 1.6s ease-out infinite',
                        }} />
                        <div style={{
                            position: 'absolute', inset: '4px',
                            borderRadius: '50%',
                            background: 'rgba(56,189,248,0.15)',
                            border: '1.5px solid rgba(56,189,248,0.4)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '10px',
                        }}>
                            ✦
                        </div>
                    </div>

                    <div className='drag-arrows' style={{ display: 'flex', gap: '4px', color: 'rgba(56,189,248,0.7)' }}>
                        <span>←</span>
                        <span>→</span>
                    </div>

                    <span style={{
                        color: 'rgba(186,230,253,0.7)',
                        fontSize: '0.78rem',
                        fontWeight: '500',
                        letterSpacing: '0.06em',
                        whiteSpace: 'nowrap',
                    }}>
                        Drag to explore
                    </span>
                </div>

                {/* Stage dots */}
                <div style={{
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                    marginTop: '4px',
                }}>
                    {[1, 2, 3, 4].map((s) => (
                        <div key={s} style={{
                            width: currentStage === s ? '22px' : '7px',
                            height: '7px',
                            borderRadius: '4px',
                            background: currentStage === s
                                ? 'linear-gradient(90deg, #38bdf8, #818cf8)'
                                : 'rgba(255,255,255,0.2)',
                            transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                            boxShadow: currentStage === s ? '0 0 10px rgba(56,189,248,0.5)' : 'none',
                        }} />
                    ))}
                </div>
            </div>

            <Canvas
                className={`w-full h-screen ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
                    <directionalLight position={[1, 1, 1]} intensity={2} castShadow />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 5, 10]} intensity={2} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />

                    <Bird />
                    <Sky isRotating={isRotating} />
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
                    <img src={isPlayingMusic ? soundon : soundoff} alt='sound' className='w-6 h-6 object-contain' />
                </button>
            </div>

        </section>
    );
};

export default Home;