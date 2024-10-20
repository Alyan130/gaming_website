import pic1 from "@/public/gta.jpeg";
import pic2 from "@/public/mk1.jpeg";
import pic3 from "@/public/mk2.jpeg";

export default function Featured(){
 type cards={
 bgimage:any,
 text1:String,
 text2:String,
 }

   const features:cards[]=[
      {bgimage:pic1.src, text1:"GTA V" ,text2:"Best Exploring Game"},
      {bgimage:pic2.src, text1:"MK1" ,text2:"Best Fighting Game"},
      {bgimage:pic3.src, text1:"God Of War" ,text2:"Best Adventure Game"},
   ]
return(
 <section className="w-full py-16 md:py-24">
    <h1 className="text-[18px] text-gray-200 font-font1 font-bold mb-6 text-center md:text-[24px] md:text-left md:ml-11">Featured Games</h1>
     <div className="w-full flex flex-row items-center justify-around gap-2 ml-2 px-2 md:justify-center md:gap-7">
      {features.map((e)=>
        <div className="relative w-[150px] h-[160px] bg-center bg-cover group md:w-[350px] md:h-[250px]" style={{backgroundImage:`url(${e.bgimage})`}}
        >
        <div className="w-[100%] h-[100%] absolute top-0 left-0 bg-bgcolor flex items-center justify-center py-20 flex-col text-center  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h2 className="font-font1 text-[12px] font-bold mb-1 text-textcolor md:text-[20px]">{e.text1}</h2>
          <p className="ml-1 font-font2 text-textcolor text-[14px] leading-4 md:text-[25px] md:mt-2">{e.text2}</p>
        </div>
         </div>
      )};
      </div>
 </section>
);
}