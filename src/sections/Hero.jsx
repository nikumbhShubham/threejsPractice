import React from 'react'
import { Canvas } from '@react-three/fiber'
import Buildings from '../components/Buildings'
import CanvasLoader from '../components/CanvasLoader'
import { Suspense } from 'react'

import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index.js';
import Model1 from '../components/model1.jsx'
import Model2 from '../components/Model2.jsx'
import Model3 from '../components/Model3.jsx'
import Model4 from '../components/Model4.jsx'
import HeroCamera from '../components/HeroCamera.jsx'

const Hero = () => {
    

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className=' min-h-screen border-2 border-blue-500 w-full flex flex-col relative min-w-full'>
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className=' sm:text-3xl text-2xl font-medium text-center text-white font-generalsans '>Hello there, We are Infrasnap <span className=' waving-hand '>🏗️</span></p>
                <p className='text-5xl font-semibold text-center text-gray_gradient'>See the Progress, Without the Site Visit</p>
            </div>
            <div className='w-full h-full absolute inset-0'>

                <Canvas className=' w-full h-full '>
                    <Suspense fallback={<CanvasLoader />}>

                        <perspectiveCamera makeDefault position={[0, 0, 20]} />

                        <HeroCamera isMobile={isMobile}>
                            <Buildings
                                scale={1.1}
                                position={[0.0, -1.9, 0.1]}
                                rotation={[0.4, 2.6, 0.0]}
                            />
                        </HeroCamera>



                        <group>
                            {/* <Target position={sizes.targetPosition} /> */}
                            <Model1 position={[-10.5, -6.5, -4]} scale={0.2} rotation={[0, Math.PI / 2, 0]} />
                            <Model2 position={[-11.6, 1, -4]} scale={0.03} rotation={[0, Math.PI / 2, 0]} />
                            <Model3 position={[9, -3.7, -4]} scale={1.4} rotation={[0, Math.PI / 2, 0]} />
                            <Model4 position={[11.6, 2.2, -4]} scale={1.4} rotation={[0, Math.PI / 2, 0]} />
                        </group>



                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>

        </section>
    )
}

export default Hero

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