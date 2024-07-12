import Image from "next/image";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import MyTimeline from "@/components/MyTimeline";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      
      <div className="max-w-7xl w-full">
        <h1>Hello Portfolio</h1>
        <FloatingNav navItems={[
          { name: "Home", link: "/" },
          { name: "Experience", link: "#experience" },
          { name: "Skills", link: "#skills" },
          { name: "Projects", link: "#projects" },
          { name: "Contacts", link: "#contact" },
        ]}/>
        <Hero/>  
        <MyTimeline/> 
        <Skills/>
        <Projects/>
        <Contacts/>
        <Footer/>
      </div>
    </main>
  );
}
