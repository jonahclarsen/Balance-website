"use client"

import { useEffect, useRef, useState } from "react"

const purposes = [
  { name: "Deep Work", hours: 120, target: 40, color: "bg-chart-1" },
  { name: "Creative Projects", hours: 85, target: 30, color: "bg-chart-2" },
  { name: "Health & Fitness", hours: 45, target: 15, color: "bg-chart-3" },
  { name: "Learning", hours: 50, target: 15, color: "bg-chart-4" },
]

export function PurposesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="purposes" ref={sectionRef} className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-center text-balance">
            Define your life
            <br />
            purposes
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-20 max-w-2xl mx-auto text-balance leading-relaxed">
            Set your ideal time allocation across different areas of life. Balance keeps you accountable to living
            intentionally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`order-2 md:order-1 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">Set Your Targets</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Want to spend 50% of your time on work and 50% on art? Define your ideal balance and let Balance track
                  your progress.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-4">Lifetime Tracking</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  See your cumulative hours across all your life purposes. Understand where your life energy is actually
                  going.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-4">Stay Balanced</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Get gentle reminders when you're neglecting important areas. Balance helps you maintain the life you
                  want to live.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`order-1 md:order-2 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border">
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4">Your Life Purposes</h4>
                <div className="space-y-4">
                  {purposes.map((purpose, index) => {
                    const percentage = (purpose.hours / 300) * 100
                    const targetPercentage = purpose.target
                    const isBalanced = percentage >= targetPercentage - 5 && percentage <= targetPercentage + 5

                    return (
                      <div
                        key={purpose.name}
                        className="transition-all duration-500"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">{purpose.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">{purpose.hours}h</span>
                            <span className="text-xs text-muted-foreground">
                              ({percentage.toFixed(0)}% / {targetPercentage}%)
                            </span>
                            {isBalanced && <span className="text-xs text-green-600">✓</span>}
                          </div>
                        </div>
                        <div className="h-3 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full ${purpose.color} rounded-full transition-all duration-1000`}
                            style={{ width: isVisible ? `${percentage}%` : "0%" }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Tracked</span>
                  <span className="text-2xl font-bold">300 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
