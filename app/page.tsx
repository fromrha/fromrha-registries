import { Terminal, Box, ShieldCheck, Cpu, Github } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090D16] text-[#E2E8F0] font-sans antialiased relative overflow-hidden flex flex-col justify-between selection:bg-indigo-500/30 selection:text-white">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="border-b border-white/5 backdrop-blur-md bg-[#090D16]/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Box className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-lg tracking-tight bg-gradient-to-r from-white via-[#F1F5F9] to-[#94A3B8] bg-clip-text text-transparent">
              fromrha-ui
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/fromrha/fromrha-registries"
              target="_blank"
              rel="noreferrer"
              className="text-[#94A3B8] hover:text-white transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 flex-grow flex flex-col justify-center relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Copy & Call to Actions */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-xs font-medium tracking-wide backdrop-blur-sm animate-pulse">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Active Registry Template Ready
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] text-white">
              Sleek Components. <br />
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                On Demand.
              </span>
            </h1>
            
            <p className="text-lg text-[#94A3B8] max-w-xl leading-relaxed">
              A private shadcn-ui component registry built for high performance and premium design. Direct integration via CLI for rapid prototyping.
            </p>

            <div className="space-y-4 max-w-lg">
              <label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block">
                Install components directly:
              </label>
              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-md relative group">
                <Terminal className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                <code className="text-sm font-mono text-indigo-200 break-all select-all flex-grow">
                  npx shadcn add https://fromrha-registries.vercel.app/r/[component]
                </code>
              </div>
            </div>
          </div>

          {/* Right Column - Status Deck */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm space-y-4 hover:border-indigo-500/30 transition-all duration-300 group">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Registry Engine</h3>
                <p className="text-xs text-[#94A3B8] mt-1">Next.js 15, React 19, Tailwind CSS v4</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm space-y-4 hover:border-blue-500/30 transition-all duration-300 group">
              <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Deployment Ready</h3>
                <p className="text-xs text-[#94A3B8] mt-1">Fully configured for Vercel, secure & fast</p>
              </div>
            </div>

            <div className="sm:col-span-2 p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 group min-h-[140px]">
              <div>
                <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block">Registry Info</span>
                <span className="text-2xl font-bold text-white mt-2 block font-mono">fromrha-ui</span>
              </div>
              <div className="flex items-center justify-between text-xs text-[#94A3B8] mt-4 border-t border-white/5 pt-3">
                <span>Components: 0 total</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 bg-[#090D16]/35 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© 2026 fromrha-ui. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://vercel.app" className="hover:text-[#94A3B8] transition-colors">Deployment</a>
            <a href="https://ui.shadcn.com" className="hover:text-[#94A3B8] transition-colors">Shadcn Docs</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
