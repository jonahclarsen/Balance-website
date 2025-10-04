"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create animated gradient orbs
    const orbs = [
      { x: 0.2, y: 0.3, radius: 300, color1: "rgba(59, 130, 246, 0.3)", color2: "rgba(59, 130, 246, 0)" },
      { x: 0.8, y: 0.4, radius: 350, color1: "rgba(251, 146, 60, 0.3)", color2: "rgba(251, 146, 60, 0)" },
      { x: 0.5, y: 0.7, radius: 280, color1: "rgba(99, 102, 241, 0.2)", color2: "rgba(99, 102, 241, 0)" },
    ]

    let animationFrame: number
    let time = 0

    const animate = () => {
      time += 0.005
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      orbs.forEach((orb, index) => {
        const offsetX = Math.sin(time + index) * 50
        const offsetY = Math.cos(time + index * 0.7) * 50
        const x = orb.x * canvas.width + offsetX
        const y = orb.y * canvas.height + offsetY

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, orb.radius)
        gradient.addColorStop(0, orb.color1)
        gradient.addColorStop(1, orb.color2)

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ filter: "blur(80px)" }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border">
          <span className="text-sm text-muted-foreground">Now available for macOS</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-balance leading-[0.95] tracking-tight">
          The only timer
          <br />
          that tracks your
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">purpose</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
          Balance combines the Pomodoro technique with life purpose tracking. Work with intention, maintain balance, and
          achieve your ideal life allocation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-lg px-8 py-6 bg-foreground text-background hover:bg-foreground/90">
            Download for macOS
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
            Watch Demo
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">Free • macOS 12.0 or later • 8MB</p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted-foreground"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
