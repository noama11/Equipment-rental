import { Suspense, useRef, useState } from 'react'
// Need to install three  for react 3 fiber be able to use it- " npm install --legacy-peer-deps three   "
import { Canvas, useFrame } from '@react-three/fiber' //Canvas used for creating and managing a 3D canvas or scene in a React 
import { Points, Preload, PointMaterial, Sphere } from '@react-three/drei' // helps for draw on Canvas. 
// useGLTF allow us import #D models
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
    const ref = useRef();
    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 })

    // this hook (3 fiber) makes the stars moving frame by frame (delta- the change)
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;

    })
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props} >
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

const StarsCanvas = () => {
    return (
        <div className='w-full h-auto absolute inset-0 z-[-1]'>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}

export default StarsCanvas