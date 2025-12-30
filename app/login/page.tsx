"use client"

import { useEffect, useState } from "react"
import { FloatingParticles } from "@/components/floating-particles"

export default function LoginPage() {
  const [mounted, setMounted] = useState(false)
  const [ripple, setRipple] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleGoogleLogin = () => {
    setRipple(true)
    setTimeout(() => {
      setRipple(false)
      window.location.href = "/about"
    }, 800)
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Base dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0000] to-[#1a0505]" />

      {/* VHS Noise overlay */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none z-50 animate-grain bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url%28%23noise%29%22%2F%3E%3C%2Fsvg%3E')]" />

      {/* Scanlines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-40 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)]" />

      {/* Fog layers with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 animate-fog-slow opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-950/20 to-transparent blur-3xl" />
        </div>
        <div className="absolute inset-0 animate-fog-mid opacity-20">
          <div className="absolute top-1/4 left-0 right-0 h-96 bg-gradient-to-r from-transparent via-red-900/30 to-transparent blur-[100px] transform -skew-y-2" />
        </div>
        <div className="absolute inset-0 animate-fog-fast opacity-25">
          <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-red-950/40 via-red-950/20 to-transparent blur-2xl" />
        </div>
        <div className="absolute inset-0 animate-fog-drift opacity-15">
          <div className="absolute top-1/2 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-red-900/30 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]" />
          <div className="absolute top-1/3 right-1/4 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-red-800/20 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px]" />
        </div>
      </div>

      {/* Floating particles */}
      {mounted && <FloatingParticles />}

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.9)_100%)] pointer-events-none z-30" />

      {/* Login Card */}
      <div className={`relative z-40 w-full max-w-md mx-4 sm:mx-6 ${mounted ? "animate-card-fade-in" : "opacity-0"}`}>
        {/* Card ambient glow */}
        <div className="absolute -inset-4 sm:-inset-8 bg-red-600/20 blur-[40px] sm:blur-[60px] rounded-3xl animate-pulse-slow" />
        <div className="absolute -inset-2 sm:-inset-4 bg-red-500/10 blur-[20px] sm:blur-[30px] rounded-2xl" />

        {/* Card */}
        <div className="relative rounded-2xl border-2 border-red-500/50 bg-black/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 animate-border-pulse overflow-hidden">
          {/* Inner glow ring */}
          <div className="absolute inset-[1px] rounded-2xl border border-red-600/20 pointer-events-none" />

          {/* Ripple effect container */}
          {ripple && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50 overflow-hidden rounded-2xl">
              <div className="animate-portal-ripple w-4 h-4 rounded-full bg-red-500/40 border-2 border-red-500" />
            </div>
          )}

          {/* Title with glitch effect */}
          <h1 className="relative text-center mb-4 sm:mb-6">
            <span
              className="absolute inset-0 animate-glitch-1 text-2xl sm:text-3xl md:text-4xl font-bold font-serif tracking-[0.1em] sm:tracking-[0.15em] text-red-500 opacity-70 blur-[1px]"
              aria-hidden="true"
            >
              ENTER THE PORTAL
            </span>
            <span
              className="absolute inset-0 animate-glitch-2 text-2xl sm:text-3xl md:text-4xl font-bold font-serif tracking-[0.1em] sm:tracking-[0.15em] text-cyan-500 opacity-50 blur-[1px]"
              aria-hidden="true"
            >
              ENTER THE PORTAL
            </span>
            <span className="relative block text-2xl sm:text-3xl md:text-4xl font-bold font-serif tracking-[0.1em] sm:tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-800 animate-flicker drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">
              ENTER THE PORTAL
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-center text-red-200/70 text-sm sm:text-base tracking-wide mb-4 sm:mb-6">
            Identify yourself to access Technotronz 2025.
          </p>

          <div className="relative mb-6 sm:mb-8 p-3 sm:p-4 rounded-lg border border-red-500/30 bg-red-950/20">
            <div className="absolute -inset-[1px] rounded-lg bg-red-500/10 blur-sm pointer-events-none" />
            <p className="relative text-center text-red-300/90 text-xs sm:text-sm leading-relaxed">
              PSG Tech students must log in using their official college email ID{" "}
              <span className="text-red-400 font-semibold">(@psgtech.ac.in)</span> to receive the PSG-only registration
              fee.
            </p>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="group relative w-full px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:animate-neon-shake"
          >
            {/* Button glow layers - full intensity as primary button */}
            <span className="absolute inset-0 rounded-lg bg-red-600/40 blur-lg group-hover:bg-red-500/60 transition-all duration-500 animate-pulse-slow" />
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-90" />
            <span className="absolute inset-[2px] rounded-md bg-gradient-to-b from-red-950 via-black to-red-950" />

            {/* Animated border */}
            <span className="absolute inset-0 rounded-lg border-2 border-red-500 group-hover:border-red-400 transition-colors duration-300 animate-border-pulse" />

            {/* Button content */}
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-red-100 group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_15px_rgba(220,38,38,0.9)]">
              {/* Google Icon */}
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Sign In With Google</span>
            </span>
          </button>

          <p
            className="text-center text-xs sm:text-sm mt-6 sm:mt-8 tracking-wide animate-pulse-slow"
            style={{
              color: "rgba(252, 165, 165, 0.7)",
              textShadow: "0 0 10px rgba(220, 38, 38, 0.4)",
            }}
          >
            After signing in with Google, you will be redirected to the About Technotronz page.
          </p>

          {/* Decorative bottom line */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3">
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-red-600/50" />
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-red-600/50" />
          </div>
        </div>
      </div>

      {/* Bottom fog gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 md:h-48 bg-gradient-to-t from-red-950/30 to-transparent pointer-events-none" />
    </main>
  )
}
