import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import HeroSection from '@/components/home/hero-section';
import ProjectsSection from '@/components/home/projects-section';
import SkillsSection from '@/components/home/skills-section';
import ContactSection from '@/components/home/contact-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
