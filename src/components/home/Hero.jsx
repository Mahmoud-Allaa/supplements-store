import Image from "next/image";
import img from '@/assets/supplements.png'

export default function Hero() {
    return (
        <header className="home-hero-img bg-[#D9D9D9] w-full flex flex-col lg:flex-row justify-center gap-10 p-[24px] md:p-[70px] items-center">
            <div className="hidden lg:block w-[50%] rounded h-[300px] flex items-center justify-center" />
            {/* <Image src={img} alt='supplements' className="w-[90%]" /> */}

            <div className="flex flex-col gap-5 lg:w-[50%] items-center lg:items-start">
                <h3 className="drop-shadow bg-[#993737] text-[white] w-[fit-content] px-3 py-1 rounded skew-x-[-10deg]">Let's</h3>
                <h1 className="drop-shadow text-center lg:text-left text-white text-[32px] md:text-[64px] md:leading-[4.5rem]">POWER <br /> YOUR <span className="text-[#993737]">WORKOUT</span></h1>
                <button className="bg-white border-0 rounded text-[#993737] px-4 py-2 w-[fit-content] font-[500] hover:drop-shadow-md hover:bg-[#993737] hover:text-white">Shop Now</button>
            </div>
        </header>
    )
}
