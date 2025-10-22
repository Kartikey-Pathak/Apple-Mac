import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
gsap.registerPlugin(useGSAP); 
gsap.registerPlugin(ScrollTrigger)

function Show(){
    const bodyref=useRef(null);
    const maskref=useRef(null);
    useGSAP(()=>{
        gsap.to(maskref.current,{
            opacity:1,
            delay:0.8,
            scale:1,
            duration:2,
            scrollTrigger:{
   
                    trigger:bodyref.current,
                    start:"top 10%",
                    end:" top 90%",
                    pin:true,
                scrub:1,
            }
        })
    },[])
    
    return(
        <section  className=" h-full flex items-center justify-center">
          <div ref={bodyref} className=" w-full h-screen flex items-center justify-center">
              <video src="/game.mp4" className='  h-[60%]  md:h-[80%] w-full object-cover' autoPlay playsInline loop muted></video>
                     </div>
                     <div className=' h-full w-full flex overflow-hidden   items-center absolute justify-center'>
                <img ref={maskref} src="/mask-logo.svg"className=' object-cover h-[80%] md:h-full w-full  mask-auto absolute scale-400   opacity-0 flex items-center justify-center  ' alt="" />
                </div>
                <br />
                
        </section>
    )
}
export default Show;