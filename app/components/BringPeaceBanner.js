import Img from "next/image"
import placesmall from "@/public/images/200x200 placesmall.png"
import placebig from "@/public/images/500x600.png"
import quoteimg from "@/public/images/quote-sign-icon-quotation-mark-vector.jpg"
import stressimg from "@/public/images/stress.png"
import moodswingimg from "@/public/images/moodswing.png"
import depressionimg from "@/public/images/depression.png"
import anxietyimg from "@/public/images/anxiety.png"

export default function BringPeaceBanner(){
    return(
        <>
        <div class="pt-10 w-[100%] h-[100"> 
        <div class="flex-col justify-center items-center w-[100%] h-[50%]">
           <div  class="bg-gray-100 text-black font-bold rounded-3xl w-52 h-10 border-2 p-2 ml-[600px] border-amber-800">PEACEFUL BEGINNING</div>
            <div class="text-5xl font-extrabold ml-[500px] mt-5">Bring your inner<span class="text-amber-800 ml-4">peace</span> </div>
         </div>
         <div class="flex justify-center items-center pt-7 space-x-16">
                <div>
                  <div class="ml-5"><Img src={anxietyimg} alt="placeimg"/></div>
                  <div class="text-3xl pt-5 ml-20 font-bold">Anxiety</div>
    
                  <div class="ml-10 mt-3 text-lg font-semibold">Happy tunes generate more </div>
                    <div class="ml-20 text-lg font-semibold">peaceful solutions</div>
                </div>


                <div>
                  <div class="ml-5"><Img src={stressimg} alt="placeimg"/></div>
                  <div class="text-3xl pt-5 font-bold ml-20">Stress</div>
                  <div class="ml-2 mt-3 text-lg font-semibold">Feel utterly less stressed in just</div>
                    <div class="ml-20 text-lg font-semibold">first 10 days</div>
                </div>


                <div>
                  <div class="ml-5"><Img src={moodswingimg} class="rounded-full" alt="placeimg"/></div>
                  <div class="text-3xl pt-5 font-bold ml-20">Moodswing</div>
                  <div class="ml-10 mt-3 text-lg font-semibold ">Do it for yourself,and everyone</div>
                    <div class="ml-20 text-lg font-semibold">you really love</div>
                </div>

                <div>
                  <div class="ml-5"><Img src={depressionimg} alt="placeimg"/></div>
                  <div class="text-3xl pt-5 font-bold ml-20">depression</div>
                  <div class="ml-5 mt-3 text-lg font-semibold">Put your mind to bed,wake up </div>
                    <div class="ml-20 text-lg font-semibold">fully refreshed</div>
                </div>
         </div>
        </div>




          <div class=" w-[100%] h-[50%] pt-14 ">

          <div class="border-b-gray-100 border-2 w-[1350px] h-[600px] rounded-3xl ml-40 flex">
             <div><Img src={placebig} class="rounded-3xl" alt="placebig"/></div>
            
        <div class="flex-col">
             <div class="text-6xl font-bold pt-10 ml-28">"Felt a<span class="text-amber-800 ml-5 underline ">connection </span><br/> <span class="pl-56 pt-6">to my self"</span></div>   
            <div>
                <div class="flex justify-center mt-10   "><Img src={quoteimg} class="w-14 rounded-3xl " alt="quoteimage "/></div>
            </div>
            <div class="text-xl font-bold ml-40 pt-6"><span class="text-7xl">❝</span>The phychology awareness initiative gives<br/> me maximum flexibility and discover my own <br/>secret hidden confidence</div>
            <div class="text-xl font-bold ml-40 pt-6">They may be used as a guide on our own <br/> psychology awareness program<br/> <span class="text-7xl ml-72">❞</span></div>
        </div>    
          </div>
            




          </div>


        </>
    )
}