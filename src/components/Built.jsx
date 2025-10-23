import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

function Built() {
    const refbox = useRef(null);

    useGSAP(() => {
        gsap.to(refbox.current, {
            opacity: 1,
            y: -90,
            ease: "power1.inOut",
            duration: 1.5,
            scrollTrigger: {
                trigger: refbox.current,
                start: "top 80%",
                end: "top 10%",
                scrub: true,
            }
        })
        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, [])

    return (
        <section ref={refbox} className=" opacity-0 w-full flex items-center justify-center mt-32 flex-col">
            <div className="flex flex-col gap-4 w-[70%] items-start  justify-center lg:m-20 lg:w-[60%]">
                <h1 className=" text-2xl text-white font-semibold">AI</h1>
                <h1 className=" text-5xl lg:text-7xl text-white font-semibold">Built for AI. <br />From the silicon up.</h1>
                <br />
                <h1 className=" lg:text-2xl text-[#86868B] font-bold">Apple silicon, and every major subsystem that powers it, is designed for AI — creating a platform that comprehensively unites hardware, software and ecosystem. So you can <span className=" text-white">run demanding on-device AI workloads with incredible power efficiency.</span> Always knowing that security and privacy are designed in, not just bolted on.</h1>
            </div>

            <div className=" flex items-center justify-center w-full lg:w-[90%] mt-10 flex-col lg:flex-row gap-5">
                <div className=" bg-[#1D1D1F] h-[40rem] lg:h-[50rem] w-[90vw] lg:w-[40vw] rounded-4xl flex items-start flex-col gap-8">
                    <h1 className=" lg:text-xl text-[#86868B] font-bold m-10"> <span className=" text-white">AI apps on Mac. Born to run.</span> Mac is optimised to handle the world's most advanced AI apps. Run image generation apps like DiffusionBee, LLM apps like Msty Studio and LM Studio and video enhancement apps like Topaz Video.</h1>
                    <div className="  w-72 lg:w-[85%] overflow-hidden  h-full">
                        <img src="/aif1.jpg" className=" h-full w-full object-cover" alt="" />

                    </div>
                </div>

                <div className=" bg-[#1D1D1F] h-[40rem] lg:h-[50rem] w-[90vw] lg:w-[40vw] rounded-4xl flex items-start flex-col gap-8">
                    <h1 className=" lg:text-xl text-[#86868B] font-bold m-10"> <span className=" text-white">AI tools in apps. Mac makes magic.</span> Transform vocals with AI plug-ins like MicDrop for Logic Pro. And make complex image modifications in seconds with Generative Fill in Adobe Photoshop.</h1>
                    <div className="  w-full flex  justify-end  h-full">
                        <div className=" h-full w-72 lg:w-[85%] overflow-hidden">
                            <img src="/aif2.jpg" className=" h-full w-full object-cover" alt="" />
                        </div>

                    </div>
                </div>

            </div>


        </section>
    )
}
export default Built;