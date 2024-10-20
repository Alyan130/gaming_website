import Image from "next/image";
import pic1 from "@/public/fire.jpeg";
import pic2 from "@/public/cta.jpeg";
import { SiYoutubegaming } from "react-icons/si";
export default function Cta(){
    return(
 <section className="py-6 md:py-24">
    <h1 className="text-[18px] text-gray-200 font-font1 font-bold mb-6 text-center md:text-[24px] md:text-left md:text-center">Get Your Favourite Games</h1>
    <div className="flex flex-row items-center justify-evenly p-3 md:justify-center md:gap-12">
       <div className="w-[210px] h-[300px] bg-cover bg-center z-10 md:w-[430px] md:h-[600px]" style={{backgroundImage:`url(${pic1.src})`}}></div>
       <div className="w-[200px] ml-5 md:w-[310px] text-left md:-mt-10">
        <h2 className="text-[14px] text-textcolor font-font1 font-bold mb-4 text-left md:text-[26px] md:leading-[38px] md:mb-7">Most Demanded <br/>Games Are Available </h2>
        <p className="text-[15px] text-textcolor font-font2 mb-3 text-left md:text-[26px] md:leading-[42px}">PLAY WITH YOUR FRIENDS AT <br /> ANYWHERE ANYTIME, ACCESS ALL <br /> AROUND THE GLOBE</p>
        <SiYoutubegaming className="text-[40px] text-textcolor ml-[55px] md:text-[70px] md:ml-20 md:mt-5"/>
       </div>
       </div>

       <div className="w-[280px] h-[170px] relative ml-16 bottom-7 md:w-[600px] md:h-[350px] md:ml-96 md:top-[-40px] md:rounded-sm">
  <div
    className="w-full h-full bg-cover bg-center opacity-35 md:opacity-30 blur-[1.3px] rounded-[5px]"
    style={{ backgroundImage: `url(${pic2.src})` }}
  ></div>

  <div className="absolute inset-0 flex items-center justify-center flex-col px-5 md:px-20 md:-mt-4 text-center">
    <h2 className="font-font1 text-textcolor font-bold text-[16px] mb-2 mt-3 md:text-[26px] md:mb-5">Nexus</h2>
    <h2 className="text-[16px] text-textcolor font-font2 mb-3 md:text-[27px] md:mb-8 md:text-center">BUY ALL GAMES AT 50% DISCOUNT,BUY NOW TO GET EARLY ACCESS GAMES</h2>
     <button className="w-[110px] p-1 ml-1 bg-green-500 rounded-[25px] text-[16px] font-font2 text-black font-bold md:w-[160px] md:p-2 md:text-[20px]">
        BUY NOW
     </button>
  </div>
</div>

 </section>
    );
}