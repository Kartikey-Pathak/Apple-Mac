import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
gsap.registerPlugin(useGSAP); 
gsap.registerPlugin(ScrollTrigger)

function Text(){
    const ref=useRef(null);
     useGSAP(()=>{
        gsap.to(ref.current,{
            opacity:1,
            delay:0.8,
            scale:1,
            duration:1.2,
            scrollTrigger:{
   
                    trigger:ref.current,
                    start:"top 90%",
                    end: "top 40%",
                
                scrub:1,
            }
        })
    },[])
    return(
        <section className=" h-full w-full flex items-center justify-center mt-20">
            <div ref={ref} className=" opacity-0 scale-90 place-items-center justify-center flex-row w-full lg:w-[70%] h-full gap-10 grid grid-cols-1 lg:grid-cols-2 ">

            <div className=" h-full w-[90%] lg:w-[70%] flex items-start justify-center  flex-col">
            <h1 className=" font-bold text-white text-5xl">Rocket Chip</h1>
            <br />
            <h3 className=" font-medium text-gray-500">Introducing <span className=" text-white font-medium"><b>M4, the next generation of Apple silicon.</b></span> M4 powers</h3>
            <br />
            <h3 className=" font-medium text-gray-500">It drives Apple Intelligence on iPad Pro, so you can write, create, and accomplish more with ease. All in a design that's unbelievably thin, light, and powerful.</h3>
            <br />
            <h3 className=" font-medium text-gray-500">A brand-new display engine delivers breathtaking precision, color accuracy, and brightness. And a next-gen GPU with hardware-accelerated ray tracing brings console-level graphics to your fingertips.</h3>
            <br />
            <h3><span className=" text-blue-600 font-medium">Learn more about Apple Intelligence</span></h3>
           </div>
           <div className=" h-full w-[90%] lg:w-[60%] flex items-start justify-start  flex-col">
             <h3><span className=" text-gray-500 font-medium">Up to</span></h3>
            <h1 className=" font-semibold text-white text-5xl">4x faster</h1>
            <br />
           <h3><span className=" text-gray-500 font-medium">pro rendering performance then M2</span></h3>
            <br />
            <h3><span className=" text-gray-500 font-medium">Up to</span></h3>
            <h1 className=" font-semibold text-white text-5xl">1.5x faster</h1>
            <br />
           <h3><span className=" text-gray-500 font-medium">CPU performance than M2</span></h3>
            
           </div>
           </div>
        </section>
    )
}
export default Text;