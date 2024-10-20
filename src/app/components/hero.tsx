import pic from "@/public/AdobeStock_579622366_Preview.jpeg";
export default function Hero() {
    return (
        <>
            <div className="relative  w-full h-[430px] shape bg-no-repaeat bg-center bg-cover px-3 md:h-[540px]" style={{ backgroundImage: `url(${pic.src})` }}>
                <div className="absolute inset-0 bg-black/65"></div>
                <div className="  relative z-10 w-full text-center py-[108px] md:text-left md:ml-6 md:py-[140px]">
                    <h1 className="text-[21px] md:text-[32px] text-focus-in font-font1 text-textcolor font-bold text-textcolor mb-5 md:mb-6">Welcome to Nexus Gaming</h1>
                    <h1 className="text-[25px] md:text-[36px] md:leading-[52px] tilt-in-left-1 font-font1 text-textcolor font-bold text-textcolor leading-[40px]">Get All Your Favourite Games With <br/>50% Discount</h1>
                    <button className="w-[160px] p-2 font-font2 text-[20px] text-black font-bold bg-green-500 mt-7 md:mt-9 md:w-[180px] md:text-[24px]">Check Now</button>
                </div>
            </div>
        </>
    );
}