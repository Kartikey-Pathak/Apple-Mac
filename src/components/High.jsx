import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)


function High() {
    const refbox1 = useRef(null);

     useGSAP(() => {
        gsap.to(refbox1.current, {
            opacity: 1,
            y: -120,
            ease: "power1.inOut",
            duration: 1.5,
            scrollTrigger: {
                trigger: refbox1.current,
                start: "top 80%",
                end: "top 10%",
              
                scrub: true,
            }
        })
        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, [])

    return (
        <section ref={refbox1} className=" opacity-0 w-full h-fit flex items-center justify-center flex-col">
            <div className=" flex items-center justify-center text-center w-[90%] lg:w-[45%] flex-col">
                <h1 className=" text-4xl lg:text-6xl text-white font-bold">There's never been a better time to upgrade.</h1>
                <br />

                <h2 className=" mt-10 text-xl lg:text-2xl text-white font-semibold">Here's whay you get with the new MacBook Pro.</h2>
            </div>
            <br />
            <div className="mt-10 flex flex-col gap-3 ">
                <div className=" w-full flex-col md:flex-row flex items-start justify-center gap-3">

                    <div className=" h-80 w-80 rounded-4xl flex items-center justify-end relative">
                        <img src="/high.png" className=" h-full w-full rounded-4xl object-cover" alt="" />
                        <img src="/laptop.png" className=" size-20 absolute bottom-40 left-5" alt="" />
                        <div className=" absolute flex items-center justify-center bottom-10 left-5 w-64">
                            <h1 className=" text-3xl text-white font-semibold">Fly through demanding tasks up to 9.8x faster.</h1>
                        </div>
                    </div>

                    <div className=" h-40 w-80 border-4 border-pink-500 rounded-4xl flex items-center bg-[#1C1C1E] justify-center relative">
                        <img src="/apple.png" className=" h-16 w-60 absolute right-3 rounded-4xl object-cover" alt="" />
                        <img src="ai.png" className=" absolute left-1 size-12 object-cover" alt="" />
                  
                        <div className=" absolute flex items-center justify-center top-3 -left-5 w-64">
                            <h1 className=" text-xl text-white font-semibold">Built for.</h1>
                        </div>
                    </div>

                </div>

                 <div className=" w-full flex-col md:flex-row flex items-start justify-center gap-3">

                    
                    <div className=" h-40 w-80  rounded-4xl flex items-center bg-[#1C1C1E] justify-center relative">
                        <img src="sun.png" className=" absolute left-10 size-16 object-cover" alt="" />
                  
                        <div className=" absolute flex items-center justify-center top-10 right-5 w-40">
                            <h1 className=" text-xl text-white font-semibold">A stunning Liquid Retina XDR display.</h1>
                        </div>
                    </div>


                    <div className=" h-80 w-80 rounded-4xl flex items-center bg-[#1C1C1E] justify-end relative md:bottom-40">
           
                        <img src="/battery.png" className=" size-20 absolute bottom-40 left-5" alt="" />
                        <div className=" absolute flex items-center justify-center bottom-10 left-5 w-64">
                            <h1 className=" text-3xl text-white font-semibold">Up to <span className=" text-green-700">14 more </span><span className=" text-green-600">hours</span> battery life. <span className=" text-gray-400">(Up to 24 hours total.)</span></h1>
                        </div>
                    </div>
                </div>


            </div>

        </section>
    )
}
export default High;