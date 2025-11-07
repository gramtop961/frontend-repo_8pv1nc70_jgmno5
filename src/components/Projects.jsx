import React from 'react';
import { Cpu, LineChart, Boxes } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ icon: Icon, title, description, tags, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.04] p-6 shadow-xl backdrop-blur-md"
  >
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
        <Icon className="h-5 w-5 text-cyan-300" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="mb-4 text-sm text-white/80">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/75">{t}</span>
      ))}
    </div>
    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.2),transparent_60%)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
  </motion.a>
);

export default function Projects() {
  const items = [
    {
      icon: Cpu,
      title: 'Sparse Encoders with Sentence Transformers',
      description:
        'Hybrid sparse-dense retrieval with Qdrant + FastAPI; custom sparse adapters for semantic search and fast filtering.',
      tags: ['Sentence-Transformers', 'Qdrant', 'FastAPI', 'Sparse+Dense'],
      link: 'https://github.com/'
    },
    {
      icon: LineChart,
      title: 'News-Driven Sentiment & Stock Prediction (NSE/BSE)',
      description:
        'FinBERT + LightGBM + TFT ensemble producing calibrated probabilistic forecasts; event-driven alpha features.',
      tags: ['FinBERT', 'LightGBM', 'TFT', 'Time Series'],
      link: 'https://github.com/'
    },
    {
      icon: Boxes,
      title: 'MILP Solver',
      description:
        'Full simplex and branch-and-bound engine with visualization, sensitivity analysis, and Docker packaging.',
      tags: ['MILP', 'Optimization', 'Docker', 'Visualization'],
      link: 'https://github.com/'
    }
  ];

  return (
    <section id="projects" className="relative w-full scroll-mt-20 bg-[#07070a] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_60%)] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
            <Cpu className="h-5 w-5 text-cyan-300" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Projects</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
