import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)


function Next() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const boxref = useRef(null);

    useGSAP(() => {
          ScrollTrigger.matchMedia({
    // ✅ For large screens and up
    "(min-width: 1024px)": function () {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: boxref.current,
          start: "top 60%",
          end: "top 5%",
          scrub: true,
        
        },
      });

      tl.to(boxref.current, { opacity: 1, duration: 1 })
        .to(ref1.current, { x: -300, duration: 0.8, ease: "power1.inOut" })
        .to(ref2.current, { x: 400, y: -20, duration: 0.9, ease: "power1.inOut" })
        .to(ref3.current, { y: 70, x: 300, duration: 0.9, ease: "power1.inOut" })
        .to(ref4.current, { y: 150, x: 20, duration: 0.9, ease: "power1.inOut" });
    },

    // ✅ For mobile (less than lg)
    "(max-width: 1023px)": function () {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: boxref.current,
          start: "top 70%",
          end: "top 10%",
          scrub: true,
        },
      });

      tl.to(boxref.current, { opacity: 1, duration: 1 })
        .to(ref1.current, { x: -100, duration: 0.7, ease: "power1.inOut" })
        .to(ref2.current, { x: 160, y: -10, duration: 0.4, ease: "power1.inOut" })
        .to(ref3.current, { y: 40, x: 140, duration: 0.4, ease: "power1.inOut" })
        .to(ref4.current, { y: 140, x: 10, duration: 0.4, ease: "power1.inOut" });
    },
  });

  // Clean up when component unmounts
  return () => ScrollTrigger.killAll();
    }, [])

    return (
        <section className=" w-full flex items-center justify-center mt-40 flex-col">
            <div className=" w-[80%] lg:w-[60%] flex items-center justify-center text-center">
                <h1 className=" font-bold text-4xl lg:text-6xl text-white">
                    Next-level graphics performance.Game on.
                </h1>
            </div>
            <br />
            <div ref={boxref} className=" relative  mt-32 h-[20rem] lg:h-[40rem] w-full flex items-center overflow-hidden  justify-center mb-20">
                <img src="/laptop.jpg" className=" bg-cover h-[16rem] lg:h-[23rem]" alt="" />

                <img ref={ref1} src="/per1.png" className=" absolute h-[10rem] lg:h-[18rem] top-10 left-4 lg:top-20 lg:left-90 " alt="" />
                <img ref={ref2} src="/per2.png" className=" absolute h-[10rem] lg:h-[18rem] top-8 right-4 lg:top-10 lg:right-90 " alt="" />
                <img ref={ref3} src="/per3.png" className=" absolute h-[10rem] lg:h-[18rem]  bottom-1 right-1 lg:bottom-10 lg:right-100 " alt="" />
                <img ref={ref4} src="/per4.png" className=" absolute h-[10rem] lg:h-[18rem] bottom-7 left-12 lg:bottom-10 lg:left-40 " alt="" />


            </div>

            <div className=' h-[20rem] lg:h-[22rem] w-full flex items-center justify-center'>
                <div className=' w-[90%] lg:w-[40%] flex items-center justify-center text-center'>
                <h3 className=" lg:text-2xl font-medium text-gray-400">Run graphics-intensive workflows with a responsiveness that keeps up with your imagination. <span className=' text-white'>The M4 family of chips features a GPU with a second-generation hardware-accelerated ray tracing engine that renders images faster, so gaming feels more immersive and realistic than ever.</span> And Dynamic Caching optimizes fast on-chip memory to dramatically increase average GPU utilization — driving a huge performance boost for the most demanding pro apps and games.</h3>
</div>
            </div>


        </section>
    )
}
export default Next;