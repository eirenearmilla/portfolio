"use client";

import Link from "next/link";
import { ArrowUpRight, BarChart3, Bell, FolderKanban, LogOut, Mail, Plus, Settings, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";

const projects = [
  { name: "Lumen editorial", type: "Web design / development", status: "Published", color: "#3D5A47" },
  { name: "Field notes", type: "Brand identity / UX", status: "In review", color: "#B5482A" },
  { name: "Northstar studio", type: "Portfolio platform", status: "Draft", color: "#8c765b" },
];

export default function AdminPage() {
  const router = useRouter();

  function signOut() {
    window.localStorage.removeItem("ae-admin-session");
    router.replace("/login");
  }

  return (
    <main className="min-h-screen bg-[#F7EDE2] text-[#2B2118]">
      <header className="border-b border-[#2B2118]/15 bg-[#efe0d1] px-6 py-5 md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="font-mono text-sm font-semibold tracking-tight"><span className="text-[#B5482A]">&lt;</span> Eirene Grace <span className="text-[#B5482A]">/&gt;</span></Link>
          <div className="flex items-center gap-4"><button aria-label="Notifications" className="text-[#2B2118]/60 hover:text-[#B5482A]"><Bell size={18} /></button><span className="hidden h-6 w-px bg-[#2B2118]/15 sm:block" /><button onClick={signOut} className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-[#2B2118]/65 hover:text-[#B5482A]"><LogOut size={16} /> Sign out</button></div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl md:grid-cols-[220px_1fr]">
        <aside className="hidden border-r border-[#2B2118]/15 px-5 py-10 md:block"><p className="mb-7 px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#2B2118]/45">Workspace</p><nav className="space-y-1"><a className="flex items-center gap-3 bg-[#2B2118] px-3 py-3 font-mono text-xs uppercase tracking-[0.08em] text-[#F7EDE2]" href="#overview"><BarChart3 size={16} /> Overview</a><a className="flex items-center gap-3 px-3 py-3 font-mono text-xs uppercase tracking-[0.08em] text-[#2B2118]/60 hover:bg-[#2B2118]/5" href="#projects"><FolderKanban size={16} /> Projects</a><a className="flex items-center gap-3 px-3 py-3 font-mono text-xs uppercase tracking-[0.08em] text-[#2B2118]/60 hover:bg-[#2B2118]/5" href="#messages"><Mail size={16} /> Messages</a></nav><div className="mt-12 border-t border-[#2B2118]/10 pt-5"><a className="flex items-center gap-3 px-3 py-3 font-mono text-xs uppercase tracking-[0.08em] text-[#2B2118]/60 hover:bg-[#2B2118]/5" href="#profile"><Settings size={16} /> Settings</a></div></aside>

        <section id="overview" className="px-6 py-10 md:px-12 md:py-14">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[#B5482A]">Wednesday, 19 August 2026</p><h1 className="text-4xl font-bold tracking-tight md:text-5xl">Good morning, Eirene.</h1><p className="mt-3 font-serif text-lg text-[#2B2118]/60">Here is the shape of your portfolio today.</p></div><button className="flex w-fit items-center gap-2 bg-[#B5482A] px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[#F7EDE2] hover:bg-[#96391f]"><Plus size={16} /> New project</button></div>

          <div className="grid gap-4 sm:grid-cols-3"><Stat icon={<FolderKanban size={18} />} label="Total projects" value="12" detail="+2 this month" /><Stat icon={<BarChart3 size={18} />} label="Portfolio visits" value="2,481" detail="+18.4% this week" /><Stat icon={<Mail size={18} />} label="Unread messages" value="04" detail="2 need a reply" /></div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <section id="projects" className="border-t-2 border-[#2B2118] pt-5"><div className="mb-5 flex items-center justify-between"><h2 className="text-xl font-bold">Recent projects</h2><a href="#projects" className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.08em] text-[#B5482A]">View all <ArrowUpRight size={14} /></a></div><div className="divide-y divide-[#2B2118]/10">{projects.map((project) => <div key={project.name} className="flex items-center gap-4 py-4"><div className="h-12 w-12 shrink-0" style={{ backgroundColor: project.color }} /><div className="min-w-0 flex-1"><h3 className="font-semibold">{project.name}</h3><p className="font-mono text-xs text-[#2B2118]/50">{project.type}</p></div><span className="hidden bg-[#2B2118]/5 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.06em] text-[#2B2118]/60 sm:block">{project.status}</span><button aria-label={`Edit ${project.name}`} className="text-[#2B2118]/40 hover:text-[#B5482A]"><Settings size={16} /></button></div>)}</div></section>
            <section id="messages" className="border-t-2 border-[#2B2118] pt-5"><div className="mb-5 flex items-center justify-between"><h2 className="text-xl font-bold">Message inbox</h2><span className="font-mono text-xs text-[#B5482A]">04 unread</span></div><div className="space-y-4"><Message name="Maya Chen" subject="Website collaboration" time="09:42" /><Message name="Jon Bell" subject="Re: Lumen editorial" time="Yesterday" /><Message name="Ari Santos" subject="A quick question" time="Mon" /></div></section>
          </div>

          <section id="profile" className="mt-12 flex flex-col justify-between gap-5 border-t border-[#2B2118]/15 pt-6 sm:flex-row sm:items-center"><div className="flex items-center gap-4"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3D5A47] text-[#F7EDE2]"><UserRound size={20} /></div><div><p className="font-semibold">Eirene Grace Armilla</p><p className="font-mono text-xs text-[#2B2118]/50">Administrator · Last active just now</p></div></div><button className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-[#B5482A] hover:text-[#96391f]"><Settings size={15} /> Account settings</button></section>
        </section>
      </div>
    </main>
  );
}

function Stat({ icon, label, value, detail }: { icon: React.ReactNode; label: string; value: string; detail: string }) {
  return <div className="border border-[#2B2118]/15 bg-[#efe0d1] p-5"><div className="mb-5 flex items-center justify-between text-[#B5482A]"><span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#2B2118]/55">{label}</span>{icon}</div><p className="text-3xl font-bold">{value}</p><p className="mt-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[#3D5A47]">{detail}</p></div>;
}

function Message({ name, subject, time }: { name: string; subject: string; time: string }) {
  return <div className="flex items-start gap-3"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#B5482A]" /><div className="min-w-0 flex-1"><div className="flex justify-between gap-3"><p className="truncate font-semibold">{name}</p><span className="font-mono text-[10px] text-[#2B2118]/45">{time}</span></div><p className="truncate font-serif text-sm text-[#2B2118]/60">{subject}</p></div></div>;
}
