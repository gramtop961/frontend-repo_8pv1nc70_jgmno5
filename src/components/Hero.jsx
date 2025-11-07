import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const glow = 'shadow-[0_0_120px_rgba(56,189,248,0.25)]';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient aura overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[48rem] w-[48rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute top-1/3 left-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.25),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <Rocket className="h-4 w-4 text-cyan-300" />
          <span className="text-xs font-medium tracking-wider text-cyan-200/90">AI Engineer • Quantitative Developer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-center text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
        >
          Nitin Ekka
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-3xl text-center text-base text-white/80 md:text-lg"
        >
          B.S. (Hons.) Mathematics and Computing, IIT Kharagpur (Batch of 2026). Passionate about large language models, reinforcement learning, vision-language systems, and algorithmic finance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className={`group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-[1.02] ${glow}`}
          >
            <Github className="h-4 w-4" /> View GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur-md transition-colors hover:border-cyan-400/40 hover:text-white"
          >
            <Linkedin className="h-4 w-4 text-cyan-300" /> Connect
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <a href="#about" className="group inline-flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-white/60">Scroll</span>
            <span className="h-8 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent group-hover:via-cyan-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
