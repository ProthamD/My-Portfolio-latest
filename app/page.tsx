import Hero from "@/components/hero";
import Image from "next/image";


export default function Home() {
  return (
   <main className="relative bg-gray-800 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
    <div className="max-w-7xl w-full">
     <Hero />
     <h1>hello</h1>
    </div>
   </main>
  );
}
