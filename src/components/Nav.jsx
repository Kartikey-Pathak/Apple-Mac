import { useEffect, useState } from "react";

function Nav() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);

        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [])
    return (
        <div className=" flex justify-evenly items-center ">
            {
                width > 840 ?
                    <div className=" flex items-center justify-between mt-3 w-[90%] lg:w-[70%]">

                        <svg className=" ml-5 "
                            width="14"
                            height="18"
                            viewBox="0 0 14 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.5545 6.1362C13.4548 6.2172 11.6936 7.2558 11.6936 9.5652C11.6936 12.2364 13.9346 13.1814 14.0017 13.2048C13.9914 13.2624 13.6457 14.499 12.8201 15.759C12.084 16.8678 11.3152 17.9748 10.1457 17.9748C8.97617 17.9748 8.67518 17.2638 7.32506 17.2638C6.00934 17.2638 5.54152 17.9982 4.47174 17.9982C3.40197 17.9982 2.65553 16.9722 1.7973 15.7122C0.803194 14.2326 0 11.934 0 9.7524C0 6.2532 2.17396 4.3974 4.31351 4.3974C5.45037 4.3974 6.39803 5.1786 7.11179 5.1786C7.79115 5.1786 8.85061 4.3506 10.144 4.3506C10.6342 4.3506 12.3953 4.3974 13.5545 6.1362ZM9.52997 2.8692C10.0649 2.205 10.4432 1.2834 10.4432 0.3618C10.4432 0.234 10.4329 0.1044 10.4106 0C9.54029 0.0342 8.50491 0.6066 7.88059 1.3644C7.39042 1.9476 6.93292 2.8692 6.93292 3.8034C6.93292 3.9438 6.95528 4.0842 6.9656 4.1292C7.02064 4.14 7.11007 4.1526 7.19951 4.1526C7.98034 4.1526 8.96241 3.6054 9.52997 2.8692Z"
                                fill="white"
                                fillOpacity="0.8"
                            />
                        </svg>
                        <h1 className=" cursor-pointer hover:text-white transition-all text-[#E8E8ED] text-sm font-extralight">Store</h1>
                        <h1 className="cursor-pointer hover:text-white transition-all text-[#E8E8ED] text-sm font-extralight">Mac</h1>
                        <h1 className="cursor-pointer hover:text-white transition-all text-[#E8E8ED] text-sm font-extralight">iPad</h1>
                        <h1 className="cursor-pointer hover:text-white transition-all text-[#E8E8ED] text-sm font-extralight">iPhone</h1>
                        <h1 className="cursor-pointer hover:text-white transition-all text-[#E8E8ED] text-sm font-extralight">watch</h1>
                        <h1 className="cursor-pointer hover:text-white transition-all text-[#E8E8ED] text-sm font-extralight" >AirPods</h1>
                        <h1 className="cursor-pointer hover:text-white transition-all text-[#E8E8ED] text-sm font-extralight">TV & Home</h1>
                        <h1 className="cursor-pointer hover:text-white transition-all text-[#E8E8ED] text-sm font-extralight" >Entertainment</h1>
                        <h1 className="cursor-pointer hover:text-white transition-all text-[#E8E8ED] text-sm font-extralight">Accesories</h1>
                        <h1 className="cursor-pointer hover:text-white transition-all text-[#E8E8ED] text-sm font-extralight">Support</h1>
                        <i className="fa-solid text-[#E8E8ED] text-sm font-extralight fa-magnifying-glass"></i>
                        <i class="fa-solid fa-bag-shopping text-[#E8E8ED] text-sm font-extralight"></i>
                    </div>
                    :
                    <div className=" flex justify-evenly items-center w-full">
                        <div className=" flex justify-between w-full items-center  mt-3">
                            <svg className=" ml-3"
                                width="14"
                                height="18"
                                viewBox="0 0 14 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.5545 6.1362C13.4548 6.2172 11.6936 7.2558 11.6936 9.5652C11.6936 12.2364 13.9346 13.1814 14.0017 13.2048C13.9914 13.2624 13.6457 14.499 12.8201 15.759C12.084 16.8678 11.3152 17.9748 10.1457 17.9748C8.97617 17.9748 8.67518 17.2638 7.32506 17.2638C6.00934 17.2638 5.54152 17.9982 4.47174 17.9982C3.40197 17.9982 2.65553 16.9722 1.7973 15.7122C0.803194 14.2326 0 11.934 0 9.7524C0 6.2532 2.17396 4.3974 4.31351 4.3974C5.45037 4.3974 6.39803 5.1786 7.11179 5.1786C7.79115 5.1786 8.85061 4.3506 10.144 4.3506C10.6342 4.3506 12.3953 4.3974 13.5545 6.1362ZM9.52997 2.8692C10.0649 2.205 10.4432 1.2834 10.4432 0.3618C10.4432 0.234 10.4329 0.1044 10.4106 0C9.54029 0.0342 8.50491 0.6066 7.88059 1.3644C7.39042 1.9476 6.93292 2.8692 6.93292 3.8034C6.93292 3.9438 6.95528 4.0842 6.9656 4.1292C7.02064 4.14 7.11007 4.1526 7.19951 4.1526C7.98034 4.1526 8.96241 3.6054 9.52997 2.8692Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                />
                            </svg>
                            <span className="mr-3 flex items-center justify-center gap-5">
                                
                            <i className="fa-solid text-[#E8E8ED] text-[1rem] font-extralight fa-magnifying-glass"></i>
                            <i class="fa-solid fa-bag-shopping text-[#E8E8ED] text-[1rem] font-extralight"></i>
                            <i class="fa-solid fa-bars text-[#E8E8ED] text-[1rem]"></i>
                            </span>

                        </div>
                    </div>
            }
        </div>
    )
}
export default Nav;