import React,{useEffect} from 'react'
import { Canvas } from '@react-three/fiber'
import Buildings from '../components/Buildings'
import CanvasLoader from '../components/CanvasLoader'
import { Html, useProgress } from '@react-three/drei';

import { Suspense } from 'react'
import { Environment, Cloud } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index.js';
import LoadingScreen from '../components/LoadingScreeen.jsx';
import HeroCamera from '../components/HeroCamera.jsx'
import Excavator from '../components/Excavator.jsx'
import Resident from '../components/Resident.jsx'

const Hero = ({ onLoad, isLoading }) => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className='min-h-screen w-full flex flex-col relative min-w-full'>
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10" 
                 style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s' }}>
                <p className='sm:text-3xl text-2xl text-center font-semibold text-blue-200 font-montserrat'>
                    Snapshot Your Way to Smarter Infrastructure
                </p>
                <p className='text-6xl font-bold text-center font-montserrat text-blue-200'>
                    Analyze and optimize construction progress seamlessly.
                </p>
                <div className="flex justify-center mt-4">
                    <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-lg font-medium">
                        Get Started
                    </button>
                </div>
            </div>
            <div className='w-full h-full absolute inset-0'>
                <Canvas shadows className='w-full h-full'>
                    <Suspense fallback={
                        <Html center>
                            <LoadingScreen progress={0} />
                        </Html>
                    }>
                        <HeroContent 
                            isMobile={isMobile} 
                            onLoaded={onLoad}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

// New component to handle 3D content
const HeroContent = ({ isMobile, onLoaded }) => {
    const { progress } = useProgress();
    
    useEffect(() => {
        if (progress === 100) {
            onLoaded();
        }
    }, [progress, onLoaded]);

    return (
        <>
            <Environment preset="night" />
            <perspectiveCamera makeDefault position={[0, 1, 10]} />
            <HeroCamera isMobile={isMobile}>
                <Resident
                    scale={0.05}
                    position={[0, -2, 0]}
                    rotation={[0, 0, 0]}
                    castShadow
                    receiveShadow
                />
            </HeroCamera>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 10, 5]} intensity={1} />
            <spotLight position={[-10, 10, 10]} angle={0.3} intensity={0.8} />
        </>
    );
};

export default Hero;

// const x = useControls('Buildings', {
//     positionX: {
//         value: 2.5,
//         min: -10,
//         max: 10,
//     },
//     positionY: {
//         value: 2.5,
//         min: -10,
//         max: 10,
//     },
//     positionZ: {
//         value: 2.5,
//         min: -10,
//         max: 10,
//     },
//     rotationX: {
//         value: 0,
//         min: -10,
//         max: 10,
//     },
//     rotationY: {
//         value: 0,
//         min: -10,
//         max: 10,
//     },
//     rotationZ: {
//         value: 0,
//         min: -10,
//         max: 10,
//     },
//     scale: {
//         value: 1,
//         min: 0.1,
//         max: 10,
//     }
// })