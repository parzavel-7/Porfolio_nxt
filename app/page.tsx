import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 display-flex justify-center items-center flex-col overflow-hidden mx-auto px-5 sm:px-10">
      <div>
        <Hero />
      </div>
    </main>
  );
}
  