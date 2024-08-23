
import Img from "next/image"
import doctorimg from "@/public/images/doctor-female.jpg"
import Andreagirlpic from "@/public/images/andrea-ai-hero.png"
import introimg from "@/public/images/intro.png"
import stressimg from "@/public/images/stress.png"

export default function MentalHealthBanner(){
    return(
        < > 
     <div class="w-[100%] h-[35%] flex p-16 ">
    <div>
        <div class="  flex justify-start ml-24">
            <span class=" flex w-[500px] h-14 rounded-3xl border-2 border-red-300 items-center justify-center text-2xl font-bold">Mental Health At 30's</span>
        </div>
        <div class="p-8 ml-24  ">
            <span class="text-8xl font-extrabold text-amber-700">Mental <br></br> health <span class="text-black text-8xl font-extrabold">is</span></span> <br></br>
            <span class="text-8xl font-extrabold">wealth</span>
            <div class="pt-10 flex">
            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 bg-white rounded-2xl  h-16 ">
             <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
            </svg>
          </div>
          <div class="pl-8 text-xl font-bold">To live your life to the fullest ,we're <br></br>continuing to find ways to prevent <br></br>mental health problems.</div>
            </div>      
        </div>
    </div>
    <div  class="pl-40 ">
        <Img class="w-[500px] h-[550px]" src={Andreagirlpic} alt="Andrea"   />
    </div>
</div>

    
  <div class="w-[100%] h-[35%] flex pt-10">
    <div class="flex">
            <div  class="pl-40 h-[600px] ">
                <Img  class="w-[500px] h-[550px] pb-36" src={introimg} alt="placeimg"  />
            </div>

            <div class="pl-44  ">
            <div >

               <span class="text-6xl font-extrabold text-black">How</span> 
               <span class="text-6xl font-extrabold text-amber-700">can we <br></br></span>
               <span class="text-6xl font-extrabold text-black" >help you?</span>
               <span class="float-right"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16 text-yellow-500 ml-3 pt-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
</svg>
</span>
        <div class="mt-10 text-xl font-bold">We work with world-class experts to create <br></br>wellbeing human centered tool and courses <br/>unity subtainable growth.</div>
        <div class="mt-10 text-xl font-bold">We take data-driven decisions around your <br></br> wellbeing strategy</div>
            </div>
            <button  class="bg-black text-white rounded-3xl w-32 h-10 mt-10 ml-24 text-xl font-bold">Get Help</button>
        

    

 </div>
    </div>
    </div> 


                        
    <div class="w-[100%] h-[35%] flex">
    <div class="flex">
            <div  class="pl-40 pb-5">
                <Img src={doctorimg} alt="doctorimg"  />
            </div>

            <div class="pl-44  ">
            <div >

               <span class="text-3xl font-extrabold text-black">We care for you,we</span> <br></br>
               <span class="text-3xl font-extrabold text-black" >write for you</span>
        <div class="mt-5 text-xl font-semibold">Mind care is a growing community working towards <br></br>changing the way individuals think & act about <br/>problems related to Mental Health managed by the <br/>current generation</div>
        <div class="border-2 border-black w-96 h-32 rounded-lg mt-5 p-2  bg-gray-100">
           <div class="flex">
           <div class="ml-5">
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
            </span>
           </div>
         <div class="font-semibold text-xl ml-2"> Affordable sessions</div><br/>
         </div>
            <div class="ml-6 mt-2">Mindcare clients who use their insurance save <br/> an average  of 77% on the cost of therapy</div>  
        </div>
        <div class="border-0 border-black w-96 h-10 rounded-lg mt-5 p-1 flex  bg-gray-100">
            <div class="ml-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </div>
            <div class="text-xl font-semibold ml-3">Simple search process</div>
        </div>

        <div class="border-0 border-black w-96 h-10 rounded-lg mt-5 p-1 flex bg-gray-100 ">
            <div class="ml-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
</svg>

        </div>
            <div class="text-xl font-semibold ml-3">High quality care</div>
        </div>
            </div>
            
        

    

 </div>
    </div>
    </div>
 
</>
    )
}