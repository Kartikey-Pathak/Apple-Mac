import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP); 
function Hero(){

    useEffect(()=>{
        gsap.to(".ani",{
            opacity:1,
            delay:0.8,
            duration:1,
            
        })
    },[])
    return(
        <section className=" w-full flex items-center justify-center h-full flex-col  mt-40">
            <div className=" lg:w-[80%] w-full h-full lg:h-[60%] flex items-center justify-center flex-col">
                <h1 className=" ani opacity-0 text-white text-4xl font-bold">MacBook Pro</h1>
                <img src="./title.png" className=" ani opacity-0 h-20 lg:h-32" alt="text" />
                <video src="./hero.mp4" className="  p-0 m-0 " autoPlay muted></video>
            </div>
            
            <div className=' cursor-pointer hover:bg-[#0071E3]/70 transition-all text-center text-white rounded-4xl flex items-center justify-center h-10 w-24 bg-[#0071E3]'>
                <h1 className=' text-white font-semibold'>Buy</h1>
            </div>
            <h1 className=' text-gray-300 font-medium p-10'>From $1599 or $113/mo for 12 months</h1>

        </section>
    )
}
export default  Hero;