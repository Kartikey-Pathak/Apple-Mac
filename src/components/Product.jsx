import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { exp } from 'three/tsl'

function MacScene() {
    const { scene, cameras, nodes, materials } = useGLTF('./mac.glb')

    return (
        <>
            <primitive object={scene} position={[0, -0.7, 0]} />
        </>
    )
}

function Product() {

    return (
        <section className=" h-screen">
            <h1 className=" m-5 text-white font-bold text-4xl">Take A Look.</h1>
            <br />
            <Canvas className=' mt-20' camera={{ position: [0, 70, 5], fov: 30 }}>
                {/* <ambientLight intensity={3} /> */}
                {/* <directionalLight position={[2, -2, 6]} intensity={20} /> */}
                <pointLight position={[-18.4, -0.97, 14.125]} intensity={200} />
                <pointLight position={[0.843872, 6.9712, 10.281]} intensity={200} />
                <pointLight position={[18.078, 1.0055, 16.72]} intensity={200} />
                <pointLight position={[-0.2435, 23.175, 10.281]} intensity={200} />
                <MacScene/>
                {/* <directionalLight position={[2, 5, -10]} intensity={20} /> */}
                <OrbitControls enableZoom={false} />
            </Canvas>

        </section>
    )
}
export default Product