import Image from "next/image";
import pic1 from "@/public/AdobeStock_421247715_Preview_Editorial_Use_Only.jpeg";
import pic2 from "@/public/_e7e790be-a42f-485a-ae6d-1f599f11dbee.jpeg";
import pic3 from "@/public/last.jpeg";
import { MdStar } from "react-icons/md";

export default function Trending() {
  type Card = {
    bgimage: string;
    heading: string;
  };

  const games: Card[] = [
    { bgimage: pic1.src, heading: "RED DEAD REDEMPTION" },
    { bgimage: pic3.src, heading: "THE LAST OF US" },
    { bgimage: pic2.src, heading: "ASPHALT LEGENDS" },
  ];

  return (
    <section className="py-4 w-full md:py-16">
      <h1 className="text-[18px] text-gray-200 font-font1 font-bold mb-4 text-center md:text-[24px] md:text-left md:ml-11">
        Top Trending
      </h1>
      <div className="flex flex-col items-center justify-center gap-7 w-full md:flex-row md:gap-7">
        {games.map((e, index) => (
          <div
            key={index} // Added key prop
            className="p-3 bg-bgcolor shadow-custom"
          >
            <Image
              src={e.bgimage}
              alt={e.heading}
              width={350} // Set appropriate width
              height={280} // Set appropriate height
              className="w-[280px] h-[200px] mb-3 rounded-[5px] md:w-[350px] md:h-[280px] md:mb-5"
            />
            <h2 className="text-[18px] text-textcolor font-font2 ml-1 mb-2 md:text-[22px] md:mb-2">
              {e.heading}
            </h2>
            <div className="flex flex-row gap-2 mb-4 ml-1 md:mb-5">
              <MdStar className="text-yellow-500 text-[18px] md:text-[20px]" />
              <MdStar className="text-yellow-500 text-[18px] md:text-[20px]" />
              <MdStar className="text-yellow-500 text-[18px] md:text-[20px]" />
              <MdStar className="text-yellow-500 text-[18px] md:text-[20px]" />
            </div>
            <button className="w-[125px] p-1 ml-1 bg-green-500 rounded-[25px] font-font2 text-black font-bold md:w-[160px] md:p-2 md:text-[18px] mb-2">
              Check Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
