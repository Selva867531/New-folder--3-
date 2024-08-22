import Image from "next/image";
import healimg from "../../public/images/150X80 place.png"
export default function HealpointBanner() {
  return (
    <>
      <div className="pt-10 w-screen bg-white">
        <div className="ml-28">
          <div className="text-black font-serif font-bold text-4xl mt-10  flex">
            The latest from{" "}
            <span className="text-amber-700 ml-4">Healpoint</span>
            <div className="ml-[650px] flex mt-6">
              <botton className="underline text-sm pr-2 flex cursor-pointer">
                Read All Blog
              </botton>
            </div>
            <div className=" mt-4 cursor-pointer">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 26 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-10 h-10 mt-[0px]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-7 ml-32 mt-5 ">
          <div className="bg-amber-100 w-[400px] h-[265px] rounded-3xl">
            <div className="ml-8 mt-6 font-semibold">
              24 May 2023
              <br />
              <div className="font-extrabold text-2xl mt-2">
                Overcoming trauma and <br /> helplessness
              </div>
              <div className="flex">
                <div className="w-44">
                  {/* <div className="font-extrabold text-xl mt-5 flex gap-4"> */}
                    {/* 42{" "} */}
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                      />
                    </svg> */}
                  {/* </div> */}
                  <div className="pt-2 ml-16 w-52  text-center border bg-white text-black h-10 mt-9 rounded-full">
                    <button>
                      Read More{" "}
                      <span className="text-red-200 pl-2 font-bold">+</span>
                    </button>
                  </div>
                </div>
                {/* <div className="mt-8 ml-8">
                  <Image src={healimg} alt="OvercomingImg" />
                </div> */}
              </div>
            </div>
          </div>
          <div className="bg-green-300 w-[400px] h-[265px] rounded-3xl">
            <div className="ml-8 mt-6 font-semibold">
              18 April 2023
              <br />
              <div className="font-extrabold text-2xl mt-2">
                How Pets helps us in good <br />
                mental health
              </div>
              <div className="flex">
                <div className="w-44">
              {/* <div className="font-extrabold text-xl mt-5 flex gap-4">
                67{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
              </div> */}
              <div className="pt-2 ml-16 w-52 text-center border bg-white text-black h-10 mt-9 rounded-full">
                    <button>
                      Read More{" "}
                      <span className="text-red-200 pl-2 font-bold">+</span>
                    </button>
                  </div>
              </div>
              {/* <div className="mt-8 ml-8">
                <Image src={healimg} alt="OvercomingImg" />
              </div> */}
              </div>
            </div>
          </div>
          <div className="bg-amber-300 w-[400px] h-[265px] rounded-3xl">
            <div className="ml-8 mt-6 font-semibold">
              08 March 2023
              <br />
              <div className="font-extrabold text-2xl mt-2">
                Anger management and <br /> self love treatement
              </div>
              <div className="flex">
              <div className="w-44">
              {/* <div className="font-extrabold text-xl mt-5 flex gap-4">
                38{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
              </div> */}
              <div className="pt-2 ml-16 w-52 text-center border bg-white text-black h-10 mt-9 rounded-full">
                    <button>
                      Read More{" "}
                      <span className="text-red-200 pl-2 font-bold">+</span>
                    </button>
                  </div>
              </div>
              <div className="mt-8 ml-8">
                {/* <Image src={healimg} alt="OvercomingImg" /> */}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
