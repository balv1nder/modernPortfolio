import Grid from "@/components/Grid";
import { Hero } from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import "./globals.css";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-x-hidden flex-col overflow-y-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full ">
        <div className="max-lg:hidden">
          <FloatingNav navItems={navItems} />
        </div>
        <div>
          <Hero />
        </div>
        <div className="lg:mt-14 mt-20">
          <Grid />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
