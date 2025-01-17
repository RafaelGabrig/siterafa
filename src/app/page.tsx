import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Expertise } from "../components/Expertise";
import { Work } from "../components/Work";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Expertise />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
