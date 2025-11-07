import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SkillsAchievements from './components/SkillsAchievements';
import { Home, User, Briefcase, Cpu, Wrench } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* Sticky neon nav */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-sm">
          <a href="#home" className="inline-flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-cyan-500 to-violet-500 text-black">∑</span>
            <span>Nitin Ekka</span>
          </a>
          <div className="hidden gap-6 md:flex">
            <a href="#about" className="inline-flex items-center gap-1.5 text-white/80 hover:text-white"><User className="h-4 w-4 text-teal-300"/>About</a>
            <a href="#experience" className="inline-flex items-center gap-1.5 text-white/80 hover:text-white"><Briefcase className="h-4 w-4 text-violet-300"/>Experience</a>
            <a href="#projects" className="inline-flex items-center gap-1.5 text-white/80 hover:text-white"><Cpu className="h-4 w-4 text-cyan-300"/>Projects</a>
            <a href="#skills" className="inline-flex items-center gap-1.5 text-white/80 hover:text-white"><Wrench className="h-4 w-4 text-teal-300"/>Skills</a>
          </div>
          <a href="#projects" className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-3 py-1.5 text-xs font-semibold text-black">Explore</a>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <SkillsAchievements />
      </main>

      <footer className="border-t border-white/10 bg-[#050508] py-8 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Nitin Ekka — Crafted with a cyber‑minimalist aesthetic.
      </footer>
    </div>
  );
}
