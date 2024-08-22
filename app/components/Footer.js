
import Img from "next/image"
import andrea from "@/public/images/andrea.png"
export default function Footer(){
    return(
        <>
        <div class="pt-20">
       <div class="bg-black w-[100%] h-[100%] border-2 flex justify-center text-white">
            <div class="mt-48 mr-16"><Img src={andrea} alt="andrea" class="w-28"/></div>
            <div class="text-6xl text-white mt-48">Reinventing mental health for <br/>a new generation
    <div class="flex">
              
            <div class="pt-36 flex space-x-28 ">
                <div class="flex-col">
                <div class="text-3xl font-bold flex">Products</div>
                <div class="text-lg pt-6">
                <div>For K12</div>
                <div>For higher Ed</div>
                <div>For Children</div>
                <div>For Parents</div>
                <div>For Enterprise</div>
                </div>
             </div>
          <div class="border-x-2"></div>


        <div class="flex-col">
            <div class="text-3xl font-bold">Company</div>
            <div class="text-lg pt-6">
            <div>About us <span class="font-light text-gray-400">(comimg soon)</span></div>
            <div>Carees <span class="font-light text-gray-400">(comimg soon)</span></div>
            <div> Press K12 <span class="font-light text-gray-400">(comimg soon)</span></div>
            <div>Blog <span class="font-light text-gray-400">(comimg soon)</span></div>
            </div>
         </div>

         <div class="border-x-2"></div>
         <div class="flex-col">
            <div class="text-3xl font-bold">Follow us</div>
            <div class="text-lg pt-6">
            <div>LinkedIn<span class="font-light text-gray-400">(comimg soon)</span></div>
            <div>Instagram<span class="font-light text-gray-400">(comimg soon)</span></div>
            <div> twitter K12 <span class="font-light text-gray-400">(comimg soon)</span></div>
            <div>Facebook <span class="font-light text-gray-400">(comimg soon)</span></div>
            </div>
         </div>
           </div>
    </div>
         <div class="pt-20">
         <div class="border-y-2"></div>
         </div>
    <div>

         <div class="text-xl pt-6">We respect your privacy</div>
    <div class="flex ">
         <div class="flex">
         <div class="pt-10 animate-y-"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-28 bg-orange-400 rounded-full">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
        </svg>
        </div>
         <div>
         <div class=" text-gray-400 text-xl ml-10 mt-6"><span class="text-orange-400 text-4xl font-bold">✓</span> CCPA Complance</div>
         <div class=" text-gray-400 text-xl ml-10 mt-4"><span class="text-orange-400 text-4xl">✓</span> Activily Monitering</div>
         <div class=" text-gray-400 text-xl ml-10 mt-4"><span class="text-orange-400 text-4xl">✓</span> Data Encryption</div>
         </div>

         </div>
         <div class="flex-col">

    <div class="ml-72 text-xl">
        <div>if you or someone you knew  </div>
    </div>
    <div class="flex space-x-16">
    <div class="text-lg ml-64 pt-10">Sucide Prevention Lifeline<br/>+100021216546541</div>
    <div class="text-lg  pt-10 ">text Line<br/>1564654Home</div>

    </div>
         </div>
    </div>

    </div>
                
              <div class="flex">
                <div class="pt-44 text-xl ml-10 pb-28">@2024 Alpha business solutions </div>
                <div class="pt-44 ml-96 text-xl">Terms<span class="ml-5">|</span></div>
                <div class="pt-44 ml-5  text-xl">Privacy<span class="ml-5">|</span></div>
                <div class="pt-44 ml-5 text-xl">Contact Us</div>
              </div>
                
      </div>
        </div>
      </div>
    
        </>
    )
}