import React from "react";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import FeatureCard from "../components/dashboard/FeatureCard";
import TemplateCard from "../components/dashboard/TemplateCard";

export default function Dashboard() {
  const userName = (typeof window !== 'undefined' && localStorage.getItem('portafyUserName')) || 'Portafy User';

  const featureCards = [
    {
      title: "Upload PDF",
      description: "Upload PDF to Start",
      imageUrl: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop",
      cta: "Upload PDF",
    },
    {
      title: "Templates",
      description: "Browse Templates",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      cta: "Browse",
    },
    {
      title: "Manual Form",
      description: "Fill Details Manually",
      imageUrl: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?q=80&w=1200&auto=format&fit=crop",
      cta: "Open Form",
    },
  ];

  const templates = [
    {
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop",
      title: "Minimal Portfolio",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
      title: "Classic Resume",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      title: "Modern Showcase",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1200&auto=format&fit=crop",
      title: "Creative Grid",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3F6FF] dark:bg-[#0b0f1a] bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center bg-fixed">
      <div className="backdrop-blur-[2px] bg-white/70 dark:bg-black/40">
      <DashboardNavbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero */}
        <section className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-white transition-colors">Welcome back, {userName}!</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300 transition-colors">Let’s create your portfolio website today 🚀</p>
          <button className="mt-6 px-6 py-3 rounded-xl bg-[#6C63FF] text-white hover:bg-[#5a52e6] shadow-md">Create My Portfolio</button>
        </section>

        {/* Features */}
        <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-stretch">
          {featureCards.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </section>

        {/* Templates */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#111827] dark:text-white">Templates Preview</h2>
            <a className="text-[#6C63FF] hover:underline" href="#">View all</a>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {templates.map((t, idx) => (
              <TemplateCard key={idx} {...t} />
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-12 bg-[#111827] text-gray-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-extrabold text-white">Portafy</div>
            <p className="mt-3 text-sm text-gray-400">Build a beautiful portfolio from your resume in minutes.</p>
          </div>
          <div>
            <div className="text-sm font-semibold text-white mb-2">Company</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Docs</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white mb-2">Resources</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Templates</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>
          <div className="flex sm:justify-end items-start">
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-white/10 hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M8 19c7.732 0 11.956-6.41 11.956-11.956 0-.182 0-.364-.013-.545A8.544 8.544 0 0022 4.309a8.19 8.19 0 01-2.357.646 4.117 4.117 0 001.805-2.27 8.224 8.224 0 01-2.607.996 4.107 4.107 0 00-6.993 3.747A11.65 11.65 0 013.149 3.15a4.106 4.106 0 001.27 5.479A4.073 4.073 0 012.8 8.2v.052a4.106 4.106 0 003.293 4.027 4.1 4.1 0 01-1.852.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.408 11.616 11.616 0 008.29 20.5"/></svg>
              </a>
              <a href="#" aria-label="GitHub" className="p-2 rounded-lg bg-white/10 hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.016c0 4.43 2.865 8.19 6.839 9.51.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.37-1.34-3.37-1.34-.455-1.158-1.11-1.468-1.11-1.468-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.114-4.555-4.957 0-1.094.39-1.988 1.03-2.689-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 7.07c.85.004 1.705.115 2.504.336 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.701 1.028 1.595 1.028 2.69 0 3.852-2.337 4.701-4.565 4.95.36.31.68.92.68 1.852 0 1.337-.012 2.416-.012 2.744 0 .268.18.58.688.481A10.02 10.02 0 0022 12.016C22 6.484 17.523 2 12 2z" clipRule="evenodd"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/10 hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.761 0 5-2.238 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.336-.027-3.055-1.861-3.055-1.863 0-2.149 1.454-2.149 2.956v5.703h-3v-10h2.879v1.367h.041c.401-.758 1.378-1.559 2.836-1.559 3.035 0 3.595 2.002 3.595 4.605v5.587z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs text-gray-400">© {new Date().getFullYear()} Portafy. All rights reserved.</div>
        </div>
      </footer>
      </div>
    </div>
  );
}


