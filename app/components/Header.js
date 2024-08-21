export default function Header(){


    return(
        <div class="flex justify-center">
           <div class=" w-[90%] h-16 bg-white flex rounded-b-xl">
            <h1 class="p-5 pl-40 text-xl font-extrabold">Andrea</h1>
        <div class="flex justify-center items-center space-x-14 font-bold ml-80">
            <span>Home</span>
            <span>About</span>
            <span>Contact Us</span>
            <span class="text-3xl font-extralight ml-20 pb-3">|</span>
            <select>
                <option>EN</option>
            </select>
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
        </span>
        <button  class="bg-black text-white rounded-3xl w-32 h-10">Get Help?</button>
        </div>
           </div>
         </div>
    )
}