import { Link } from "react-router-dom"
import { Button } from "./ui/button"

export function CTA() {
  return (
    <section id="cta" className="relative py-16 md:py-20 bg-background border-t border-border">
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl font-sentient mb-6 max-w-2xl mx-auto">Ready to automate every missed call?</h2>
        <p className="font-mono text-foreground/60 mb-12 max-w-[520px] mx-auto text-balance">
          Launch an AI phone responder that greets callers, collects intent, and hands off warm leads with full
          transcripts and alerts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button className="w-full sm:w-auto">[Book a walkthrough]</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="w-full sm:w-auto bg-transparent">
              [See integration guide]
            </Button>
          </Link>
        </div>

        <p className="font-mono text-xs text-foreground/40 mt-12">Twilio-native. Deployable in under two weeks.</p>
      </div>
    </section>
  )
}

