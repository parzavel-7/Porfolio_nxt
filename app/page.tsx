import { BoxGrid } from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Grid } from "lucide-react";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 display-flex justify-center items-center flex-col overflow-hidden mx-auto px-5 sm:px-10">
      <div>
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
        <BoxGrid />
      </div>
    </main>
  );
}
