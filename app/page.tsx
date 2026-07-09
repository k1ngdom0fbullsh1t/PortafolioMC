import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Chat } from "@/components/Chat";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Chat />
    </>
  );
}
