import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { exp } from 'three/tsl'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP); 
gsap.registerPlugin(ScrollTrigger) 

function MacScene() {
    const { scene, cameras, nodes, materials } = useGLTF('./mac.glb')

    

    return (
        <>
            <primitive object={scene} position={[0, -5.7, 6]} />
        </>
    )
}

function Product() {
    const txtref=useRef(null);
    const modref=useRef(null);
    useGSAP(()=>{
        gsap.to(txtref.current,{
            opacity:1,
            delay:0.8,
            duration:1,
            scrollTrigger:{
                 scroller:"body",
                    trigger:txtref.current,
                    start:"top 80%",
                    end:"top 30%",
         
                scrub:true,
            }
        })
        gsap.to(modref.current,{
            opacity:1,
            delay:0.8,
            duration:1,
            scrollTrigger:{
                 scroller:"body",
                    trigger:modref.current,
                    start:"top 60%",
                    end:"top 5%",
            
                scrub:true,
            }
        })
         return () => {
    ScrollTrigger.getAll().forEach(t => t.kill());
    // optionally dispose three resources if you created any manually
  }
},[])
    return (
        <section className=" h-screen">
            <h1 id='txt' ref={txtref} className=" opacity-0 m-5 text-white font-bold text-4xl lg:text-6xl">Take A Look.</h1>
            <br />
            <div className=' flex items-center justify-center flex-col'>
            <div ref={modref} className=' opacity-0 h-[25rem] w-[90%] md:h-[30rem] md:w-[80%] flex items-center justify-center'>
            <Canvas dpr={[1, 1.2]} gl={{ powerPreference: "high-performance", antialias: true }} className=' flex items-center h-full w-full justify-center'  camera={{ position: [0, 80, 5], fov: 30 }}>
                <ambientLight intensity={3} /> 
                {/* <directionalLight position={[2, -2, 6]} intensity={20} /> */}
                <pointLight position={[-18.4, -0.97, 14.125]} intensity={50} />
                <pointLight position={[0.843872, 6.9712, 10.281]} intensity={50} />
                <pointLight position={[18.078, 1.0055, 16.72]} intensity={50} />
                <pointLight position={[-0.2435, 23.175, 10.281]} intensity={50} />
                <MacScene/>
                {/* <directionalLight position={[2, 5, -10]} intensity={20} /> */}
                <OrbitControls enableZoom={false} />
            </Canvas>
</div>
<h1 className=' text-white font-medium text-sm'>MacBook Pro 16* in Silver</h1>
</div>
        </section>
    )
}
export default Product