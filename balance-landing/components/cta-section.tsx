"use client"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="download" className="py-32 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Start living with
          <br />
          intention today
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
          Download Balance for free and discover what it means to truly balance productivity with purposeful living.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="text-lg px-12 py-6 bg-foreground text-background hover:bg-foreground/90">
            Download for macOS
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 1v14M1 8h14" />
            </svg>
            <span>Free forever</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 1v14M1 8h14" />
            </svg>
            <span>No account required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 1v14M1 8h14" />
            </svg>
            <span>Privacy first</span>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground">Made with intention • macOS 12.0 or later</p>
        </div>
      </div>
    </section>
  )
}
