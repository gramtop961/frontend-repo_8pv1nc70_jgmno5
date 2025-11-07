import React from 'react';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full scroll-mt-20 bg-[#07070a] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.15),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
            <User className="h-5 w-5 text-teal-300" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">About Me</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <p className="text-white/90">
              Curiosity-driven builder exploring the edges of AI systems and quantitative research. I enjoy designing scalable training/evaluation pipelines and productionizing ML for real users.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <p className="text-white/80">
              B.S. (Hons.) in Mathematics and Computing at IIT Kharagpur (Batch of 2026) — blending rigorous math, systems thinking, and modern ML to ship reliable AI.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
