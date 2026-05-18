"use client";
import { Mail, Lock, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F3F4F1] flex items-center justify-center p-4 md:p-8 font-sans">
      {/* Main Split Container */}
      <div className="w-full max-w-5xl bg-white rounded-[2rem] shadow-sm border border-zinc-100 flex flex-col md:flex-row overflow-hidden min-h-[600px]">
        {/* Left Branding Panel */}
        <div className="md:w-5/12 bg-zinc-950 p-10 flex flex-col justify-between relative overflow-hidden shrink-0">
          {/* Faux Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A5C54] rounded-full blur-[120px] opacity-30 -translate-y-1/2 translate-x-1/3" />

          {/* Logo */}
          <div className="relative z-10 flex items-center gap-2">
            <span className="text-2xl font-bold text-white tracking-tight">
              Sealine
            </span>
          </div>

          {/* Branding Copy */}
          <div className="relative z-10 mt-12 md:mt-0">
            <h2 className="text-3xl font-serif text-white mb-4 tracking-tight leading-tight">
              AI-native recovery intelligence for modern financial institutions.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Deploy automated escalation workflows, extract intent from
              borrower transcripts, and manage high-risk portfolios at scale.
            </p>

            {/* Animated System Indicators */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)] animate-pulse" />
                <span className="text-xs font-medium text-zinc-300">
                  Core Systems Operational
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                <span className="text-xs font-medium text-zinc-300">
                  Voice Agents: Deployed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Login Panel */}
        <div className="flex-1 p-10 md:p-16 flex flex-col justify-center relative bg-white">
          <div className="max-w-md w-full mx-auto">
            <div className="mb-8 text-center md:text-left">
              <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-2">
                Welcome back
              </h1>
              <p className="text-sm text-zinc-500">
                Log in to access your operational dashboard.
              </p>
            </div>

            <div className="space-y-6">
              {/* Demo Credentials Notice */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-teal-50 border border-teal-100 text-[#1A5C54]">
                <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider mb-1">
                    Demo Mode Active
                  </span>
                  <span className="text-xs font-medium opacity-80 leading-relaxed">
                    Credentials have been pre-filled for your Pro Trial access.
                  </span>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider pl-1">
                    Work Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="email"
                      defaultValue="neeraj@sealine.app"
                      className="w-full bg-[#F9F9F8] border border-zinc-200 rounded-xl pl-11 pr-4 py-3.5 text-sm font-medium text-zinc-900 outline-none focus:bg-white focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between px-1">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-[10px] font-bold text-[#1A5C54] hover:underline"
                    >
                      Forgot?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="password"
                      defaultValue="••••••••••••"
                      className="w-full bg-[#F9F9F8] border border-zinc-200 rounded-xl pl-11 pr-4 py-3.5 text-sm font-medium text-zinc-900 outline-none focus:bg-white focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Link
                href="/dashboard"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 mt-2 bg-zinc-900 text-white rounded-xl text-sm font-semibold hover:bg-zinc-800 transition-all shadow-sm active:scale-[0.98]"
              >
                Sign in to Workspace <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-zinc-100"></div>
                <span className="shrink-0 px-4 text-xs font-medium text-zinc-400">
                  or continue with
                </span>
                <div className="flex-grow border-t border-zinc-100"></div>
              </div>

              {/* SSO Button */}
              <button className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-white border border-zinc-200 text-zinc-700 rounded-xl text-sm font-semibold hover:bg-zinc-50 hover:text-zinc-900 transition-colors shadow-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google SSO
              </button>
            </div>

            {/* Footer */}
            <div className="mt-10 text-center">
              <p className="text-[10px] font-medium text-zinc-400">
                Protected by Sealine Infrastructure.{" "}
                <br className="md:hidden" />
                <a
                  href="#"
                  className="hover:text-zinc-600 transition-colors underline underline-offset-2"
                >
                  Privacy Policy
                </a>{" "}
                &middot;{" "}
                <a
                  href="#"
                  className="hover:text-zinc-600 transition-colors underline underline-offset-2"
                >
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
