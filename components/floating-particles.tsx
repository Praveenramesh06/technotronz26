"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const isMobile = window.innerWidth < 640
    const particleCount = isMobile ? 20 : 40
    const newParticles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: isMobile ? Math.random() * 3 + 1 : Math.random() * 4 + 1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-red-500 animate-float-up"
          style={{
            left: `${particle.x}%`,
            bottom: `-${particle.size}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            boxShadow: `0 0 ${particle.size * 2}px rgba(220, 38, 38, 0.6), 0 0 ${particle.size * 4}px rgba(220, 38, 38, 0.3)`,
          }}
        />
      ))}
    </div>
  )
}
