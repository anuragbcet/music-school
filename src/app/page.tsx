import Featuredcourses from "@/components/Featuredcourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { InfiniteMoving } from "@/components/InfiniteMoving";
import Instructors from "@/components/Instructors";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white/[0.95] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Featuredcourses/>
      <InfiniteMoving/>
      <UpcomingWebinar/>
      <Instructors/>
      <Footer/>
      
    </main>
  );
}
