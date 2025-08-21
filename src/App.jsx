import React, { useMemo, useState } from "react";
import { Mail, MapPin, Github, Linkedin, ExternalLink, ArrowRight, Filter, Download, Moon, Sun } from "lucide-react";
import { DATA } from "./data";

const CATEGORIES = ["Semua","Web","AI","Data","Backend"];

export default function App(){
  const [dark,setDark]=useState(true);
  const [filter,setFilter]=useState("Semua");
  const filteredProjects = useMemo(()=> filter==="Semua"?DATA.projects:DATA.projects.filter(p=>p.tags.includes(filter)),[filter]);
  return (<div className={dark?"dark":""}>
    <div className="min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-50">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">{DATA.name}</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#projects" className="hover:opacity-80">Proyek</a>
            <a href="#skills" className="hover:opacity-80">Keahlian</a>
            <a href="#experience" className="hover:opacity-80">Pengalaman</a>
            <a href="#contact" className="hover:opacity-80">Kontak</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={()=>setDark(d=>!d)} className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800">
              {dark?<Sun size={16}/>:<Moon size={16}/>} {dark?"Terang":"Gelap"}
            </button>
            <a href={DATA.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800">
              <Github size={16}/> GitHub
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-[auto,1fr] gap-8 items-center">
          <img src={DATA.avatar} alt={DATA.name} className="h-28 w-28 md:h-32 md:w-32 rounded-2xl object-cover border border-zinc-200 dark:border-zinc-800 shadow-sm"/>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight">{DATA.role}</h1>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300 max-w-2xl">{DATA.summary}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1"><MapPin size={16}/> {DATA.location}</span>
              <a href={`mailto:${DATA.email}`} className="inline-flex items-center gap-1 rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800"><Mail size={16}/> {DATA.email}</a>
              {DATA.linkedin!=="#" && <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800"><Linkedin size={16}/> LinkedIn</a>}
            </div>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium shadow hover:opacity-90">
                Lihat Proyek <ArrowRight className="transition -translate-x-0 group-hover:translate-x-0.5" size={16}/>
              </a>
              <a href="#cv" className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 px-4 py-2 text-sm">
                <Download size={16}/> Unduh CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Proyek Terpilih</h2>
          <div className="flex items-center gap-2">
            <Filter size={18} className="opacity-60"/>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(c=> <button key={c} onClick={()=>setFilter(c)} className={`rounded-full border px-3 py-1 text-xs ${filter===c?"bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 border-zinc-900 dark:border-white":"border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}>{c}</button>)}
            </div>
          </div>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p,i)=> (
            <article key={i} className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 hover:shadow-sm transition">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold leading-snug">{p.title}</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{p.period} • {p.tech.join(" · ")}</p>
                </div>
                <span className="text-[10px] uppercase tracking-wide text-zinc-500">{p.tags.join(" ")}</span>
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{p.summary}</p>
              <div className="mt-3 flex gap-3 text-sm">
                <a href={p.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800">Demo <ExternalLink size={14}/></a>
                <a href={p.links.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800">Kode <Github size={14}/></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Keahlian</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {DATA.skills.map((s,idx)=> (
            <div key={idx} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
              <h3 className="font-medium">{s.group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map(it=> <span key={it} className="rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-xs">{it}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Pengalaman</h2>
        <div className="mt-5 space-y-4">
          {DATA.experience.map((e,i)=> (
            <div key={i} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
              <div className="flex flex-wrap items-center gap-2 justify-between">
                <div>
                  <h3 className="font-semibold leading-tight">{e.role}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">{e.company}</p>
                </div>
                  <span className="text-xs text-zinc-500">{e.period}</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                {e.points.map((pt,j)=> <li key={j}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
            <h2 className="text-xl font-semibold tracking-tight">Pendidikan</h2>
            <div className="mt-3 space-y-2 text-sm">
              {DATA.education.map((ed,i)=> (
                <div key={i}>
                  <div className="font-medium">{ed.degree}</div>
                  <div className="text-zinc-600 dark:text-zinc-300">{ed.school}</div>
                  {ed.period && <div className="text-xs text-zinc-500">{ed.period}</div>}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
            <h2 className="text-xl font-semibold tracking-tight">Sertifikasi</h2>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">Tambahkan sertifikasi yang relevan.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-8">
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Tertarik bekerja sama?</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Saya siap membantu membangun produk web yang cepat, rapi, dan mudah dirawat.</p>
          </div>
          <a href={`mailto:${DATA.email}`} className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium shadow hover:opacity-90">
            <Mail size={16}/> Hubungi Saya
          </a>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-500">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {DATA.name}. Dibangun dengan React & Tailwind.</p>
          <div className="flex items-center gap-3">
            <a href={DATA.github} target="_blank" rel="noreferrer" className="hover:underline inline-flex items-center gap-1"><Github size={14}/> GitHub</a>
            {DATA.linkedin!=="#" && <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="hover:underline inline-flex items-center gap-1"><Linkedin size={14}/> LinkedIn</a>}
          </div>
        </div>
      </footer>
    </div>
  </div>);
}
