import HeroSection from "./components/sections/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/sections/AboutSection";
import ProjectSection from "./components/sections/ProjectSection";
import EmailSection from "./components/sections/EmailSection";
import AchievementsSection from "./components/sections/AchievementsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#2f2f2f]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
