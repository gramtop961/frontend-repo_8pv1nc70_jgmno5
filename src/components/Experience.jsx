import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Item = ({ role, org, points, tag }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
  >
    <div className="mb-3 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-white">{role}</h3>
        <p className="text-sm text-white/70">{org}</p>
      </div>
      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">{tag}</span>
    </div>
    <ul className="ml-4 list-disc space-y-2 text-white/85">
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
    <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px 200px at 100% 0%, rgba(56,189,248,0.15), transparent 60%)' }} />
  </motion.div>
);

export default function Experience() {
  return (
    <section id="experience" className="relative w-full scroll-mt-20 bg-[#050508] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_60%)] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
            <Briefcase className="h-5 w-5 text-violet-300" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Experience</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Item
            role="AI Engineering Intern"
            org="Bajaj Finance Ltd"
            tag="2024"
            points={[
              'Built RLHF pipeline on quantized LLaMA‑3.2 8B: preference data curation, reward modeling, and PPO/GRPO fine‑tuning with TRL.',
              'Optimized inference with 4‑bit quantization and LoRA adapters; accelerated evaluation and telemetry via MLflow.',
              'Deployed Vision‑Language MetaTagger on AWS EC2 with autoscaling and monitoring for production metadata tagging.'
            ]}
          />
        </div>
      </div>
    </section>
  );
}
