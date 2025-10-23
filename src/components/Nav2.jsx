import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

function Nav2(){
    const navref=useRef(null);

     useGSAP(() => {
        gsap.to(navref.current, {
            opacity: 1,
            ease: "power1.inOut",
            duration: 1.5,
            scrollTrigger: {
                trigger: navref.current,
                start: "top -20%",
                end: "top -40%",
                scrub: true,
            }
        })
        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, [])


    return(
        <div ref={navref} className=" opacity-0 fixed backdrop-blur-3xl justify-between top-0 z-50 w-full flex-row flex h-12 bg-[#1D1D1F]/50 border-b-2 border-[#495057]">
            <h1 className=" text-xl ml-64 m-2 font-semibold text-white">
                MacBook Pro
            </h1>
            <div className=" h-full w-[60%] flex items-center justify-center gap-5 ">
                <span className=" underline text-white">Overview</span>
                <span className="text-gray-300 text-sm font-light">Tech Specs</span>
                <span className="text-gray-300 text-sm font-light">Compare</span>
                <span className="text-gray-300 text-sm font-light">Switch from PC to Mac</span>
                <br />
               <div className=' cursor-pointer hover:bg-[#0071E3]/70 transition-all text-center text-white rounded-4xl flex items-center justify-center h-6 w-16 bg-[#0071E3]'>
                <h1 className=' text-white font-semibold'>Buy</h1>
            </div>
            </div>
        </div>
    )
}
export default Nav2;