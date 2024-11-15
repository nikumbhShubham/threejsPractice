import React from 'react'
import { Canvas } from '@react-three/fiber'
import Buildings from '../components/Buildings'
import CanvasLoader from '../components/CanvasLoader'
import { Suspense } from 'react'
import { Environment, Cloud } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index.js';
import Model1 from '../components/model1.jsx'
import Model2 from '../components/Model2.jsx'
import Model3 from '../components/Model3.jsx'
import Model4 from '../components/Model4.jsx'
import HeroCamera from '../components/HeroCamera.jsx'
import Excavator from '../components/Excavator.jsx'
import Resident from '../components/Resident.jsx'

const Hero = () => {


    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className=' min-h-screen w-full flex flex-col relative min-w-full'>
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10">
                <p className=' sm:text-3xl text-2xl  text-center font-semibold text-blue-200 font-montserrat'>Snapshot Your Way to Smarter Infrastructure</p>
                <p className='text-6xl font-bold text-center font-montserrat text-blue-200 '>Analyze and optimize construction progress seamlessly.</p>
                {/* <div className="flex justify-center mt-4">
                    <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-lg font-medium">
                        Get Started
                    </button>
                </div> */}
            </div>
            <div className='w-full h-full absolute inset-0'>

                <Canvas shadows className=' w-full h-full ' >
                    <Suspense fallback={<CanvasLoader />}>
                        <Environment preset="night" />
                       
                        <perspectiveCamera makeDefault position={[0, 1, 10]} />


                        <HeroCamera isMobile={isMobile}>
                            {/* <Buildings
                                scale={1.1}
                                position={[0.0, -1.9, 0.1]}
                                rotation={[0.4, 2.6, 0.0]}
                            /> */}
                            <Resident
                                scale={0.05} // Ensure the size fits the camera's view
                                position={[0, -2, 0]} // Place at the origin
                                rotation={[0, 0, 0]} // No initial rotation
                                castShadow
                                receiveShadow
                            />
                        </HeroCamera>




                        <group>
                            {/* <Target position={sizes.targetPosition} />
                             <Model1 position={[-10.5, -6.5, -4]} scale={0.2} rotation={[0, Math.PI / 2, 0]} />
                            <Model2 position={[-11.6, 1, -4]} scale={0.03} rotation={[0, Math.PI / 2, 0]} /> */}
                            {/* <Excavator position={[9, -3.7, -4]} scale={1.4} rotation={[0, Math.PI / 2, 0]} /> */}
                            {/* <Model4 position={[11.6, 2.2, -4]} scale={1.4} rotation={[0, Math.PI / 2, 0]} /> */}
                        </group>




                        <ambientLight intensity={0.3} />
                        <directionalLight position={[5, 10, 5]} intensity={1} />
                        <spotLight position={[-10, 10, 10]} angle={0.3} intensity={0.8} />
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