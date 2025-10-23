import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { exp } from 'three/tsl'
import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

function MacModel({ rotationRef }) {
    const { scene, cameras, nodes, materials } = useGLTF('./mac.glb')
    const meshref = useRef(null);


    // ✅ Clone the scene so it doesn’t affect the other component
    const clonedScene = useMemo(() => scene.clone(true), [scene])

     useFrame(() => {
    if (meshref.current) {
      meshref.current.rotation.y = rotationRef.current
    }
  })




    return (
        <>
            <primitive ref={meshref} object={clonedScene} position={[0, -1.7, 6]} />
        </>
    )


}

function See() {
    const txt1 = useRef(null);
    const txt2 = useRef(null);
    const txt3 = useRef(null);
    const txt4 = useRef(null);
    
    const sec=useRef(null);

     const containerRef = useRef(null);
  const rotationRef = useRef({ current: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.to(rotationRef.current, {
      current: Math.PI * 2,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 20%",
        end: "top -100%",
        scrub: true,
        pin: true,
      }
    });

     gsap.to(sec.current, {
      opacity:1,
      duration:1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "top -10%",
        scrub: true,
      }
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

    return (
        <section ref={sec} className=" opacity-0 h-fit w-full flex mt-60 lg:mt-44 flex-col relative">
            <div className=" w-full flex items-center justify-center text-center">
                <h1 className=" text-4xl lg:text-6xl text-white font-bold">See it in a new light.</h1>
            </div>
            <br />
            <div className=' absolute -z-10 w-full flex mt-72 flex-col'>

                <div ref={txt1} className='  w-[14rem] flex items-center justify-center m-5 lg:m-10'>
                    <h1 className=' font-semibold text-[1rem] text-gray-500'>
                        <span><img src="/ai.svg" alt="" /></span>
                        <span className=' text-white'>Summarize AI.</span>
                        Turn long articles,reports, or notes into clear,bite-
                        sized summaries in seconds.
                    </h1>
                </div>

                <div ref={txt2} className=' w-[14rem] flex items-center justify-center m-5 lg:m-10 right-0 top-[24rem] absolute'>
                    <h1 className=' font-semibold text-[1rem] text-gray-500'>
                        <span><img src="/air.svg" alt="" /></span>
                        <span className=' text-white'>AirDrop.</span>
                        Wirelessly share photos,large files, and more
                        between your iPhone,your Mac,& other devices.
                    </h1>
                </div>

                <div ref={txt3} className='w-[14rem] flex items-center justify-center m-5 lg:ml-10  mt-[30rem]'>
                    <h1 className=' font-semibold text-[1rem] text-gray-500'>
                        <span><img src="/write.svg" alt="" /></span>
                        <span className=' text-white'>Writing Tool.</span>
                        Write smarter and faster,whether it's blogs,essays,or
                        captions,AI helps polish your words.
                    </h1>
                </div>

                <div ref={txt4} className='w-[14rem] flex items-center justify-center m-5 lg:m-10 right-0 top-[55rem] lg:top-[60rem] absolute'>
                    <h1 className=' font-semibold text-[1rem] text-gray-500'>
                        <span><img src="/pen.svg" alt="" /></span>
                        <span className=' text-white'>Image AI.</span>
                        Generate or edit images with ease.
                        Just type what you imagine,and let AI bring it to life.
                    </h1>
                </div>

                <div className='lg:h-[30rem] h-[20rem] '>

                </div>


            </div>
            <div className=' flex items-center justify-center h-fit'>

                <div ref={containerRef}  className=' mt-20 h-[18rem] w-[90%] md:h-[35rem] md:w-[80%] flex items-center justify-center'>
                    <Canvas dpr={[1, 1.2]} gl={{ powerPreference: "high-performance", antialias: true }} className=' flex items-center h-full w-full justify-center' camera={{ position: [0, 30, 50], fov: 40 }}>
                        <ambientLight intensity={3} />
                        {/* <directionalLight position={[2, -2, 6]} intensity={20} /> */}
                        <pointLight position={[-18.4, -0.97, 14.125]} intensity={50} />
                        <pointLight position={[0.843872, 6.9712, 10.281]} intensity={50} />
                        <pointLight position={[18.078, 1.0055, 16.72]} intensity={50} />
                        <pointLight position={[-0.2435, 23.175, 10.281]} intensity={50} />
                        <MacModel rotationRef={rotationRef.current} />
                        {/* <directionalLight position={[2, 5, -10]} intensity={20} /> */}
                    
                    </Canvas>
                </div>
            </div>

    <div className=' h-[180vh] lg:h-[150vh]'>

    </div>
        </section>
    )
}
export default See;