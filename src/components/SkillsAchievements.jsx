import React from 'react';
import { Wrench, Award, BadgeCheck, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Pill = ({ children }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">{children}</span>
);

export default function SkillsAchievements() {
  const skills = [
    'Python', 'PyTorch', 'Transformers', 'TRL', 'MLflow', 'Qdrant', 'Docker', 'FastAPI', 'AWS', 'Financial ML', 'Optimisation'
  ];

  const achievements = [
    'National Finalist – Prod-o-mania (IIT Bombay)',
    'National Finalist – Predictioneer (AZeotropy × IIT Bombay)',
    'National Space Hackathon (IIT Delhi)'
  ];

  const certs = ['Summer Analytics & Time Series Analysis – IIT Guwahati'];

  const beyond = [
    'Chess (peak rating 1784)',
    'Basketball bronze',
    'District weightlifting U-65 kg',
    'Rangoli bronze hall event'
  ];

  return (
    <section id="skills" className="relative w-full scroll-mt-20 bg-[#050508] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.18),transparent_60%)] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
              <Wrench className="h-5 w-5 text-teal-300" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Skills & Tools</h2>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-violet-300" />
              <h3 className="text-lg font-semibold">Achievements</h3>
            </div>
            <ul className="ml-4 list-disc space-y-2 text-white/80">
              {achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="mb-4 flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-cyan-300" />
              <h3 className="text-lg font-semibold">Certifications</h3>
            </div>
            <ul className="ml-4 list-disc space-y-2 text-white/80">
              {certs.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <div className="mb-4 flex items-center gap-2">
            <Gamepad2 className="h-5 w-5 text-rose-300" />
            <h3 className="text-lg font-semibold">Beyond Academics</h3>
          </div>
          <ul className="ml-4 list-disc space-y-2 text-white/80">
            {beyond.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
