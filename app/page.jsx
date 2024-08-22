// import Image from "next/image";
import Header from "@/app/components/Header"
import MentalHealthBanner from "@/app/components/MentalHealthBanner"
import BringPeaceBanner from "../app/components/BringPeaceBanner"
import Footer from "@/app/components/Footer"
import HealpointBanner from "@/app/components/HealpointBanner"
export default function Home() {
  return (
    <div class="bg-white w-[100%] h-[100%] overflow-hidden">
     <div >
      <div class="bg-custom-light">
      <Header/>
     <MentalHealthBanner/>
      </div>
     <BringPeaceBanner/>
     <HealpointBanner/>
     <Footer/>
      </div>
      
    </div>  );
}
