import { Card } from "./ui/card";

const solutions = [
  {
    title: "Missed Call Recovery for Contractors",
    description: "Turn missed calls into booked jobs automatically.",
    highlights: [
      "Answers missed calls instantly with a branded text",
      "Collects caller name, job type, and urgency",
      "Sends details to your phone or email within seconds",
    ],
  },
  {
    title: "Appointment Scheduling Without the Back-and-Forth",
    description: "Give customers a faster way to book without phone tag.",
    highlights: [
      "Booking links sent automatically via SMS",
      "Fully customizable scheduling windows",
      "Integrated reminders to reduce no-shows",
    ],
  },
  {
    title: "Automation You Actually Understand",
    description: "No bloat. No tech headaches. Just leads in your inbox.",
    highlights: [
      "Built with contractors in mind, not tech people",
      "Runs 24/7 with zero maintenance on your end",
      "No apps to install or dashboards to learn",
    ],
  },
  {
    title: "Simple Lead Intelligence",
    description:
      "See who called, when, and what they wanted — without the headache.",
    highlights: [
      "Summarized lead alerts via text or email",
      "Lead history sent daily or weekly",
      "Optional link to a lightweight client portal",
    ],
  },
];

export function Solutions() {
  return (
    <section className="relative min-h-[calc(100svh-5rem)] py-12 md:py-16 flex items-center">
      <div className="container space-y-10">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-sentient">
            Purpose-built for non-technical industries
          </h2>
          <p className="font-mono text-sm md:text-base text-foreground/60 max-w-2xl mx-auto">
            Our AI phone responder becomes the always-on teammate filling your
            lead funnel.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {solutions.map((solution) => (
            <Card
              key={solution.title}
              className="h-full p-6 md:p-8 border border-border bg-card/20 backdrop-blur"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                {solution.title}
              </h3>
              <p className="font-mono text-xs md:text-sm text-foreground/70 leading-relaxed">
                {solution.description}
              </p>

              <ul className="mt-5 space-y-2">
                {solution.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 font-mono text-[11px] md:text-xs text-foreground/60"
                  >
                    <span
                      className="mt-[5px] inline-block h-2 w-2 rounded-full bg-primary"
                      aria-hidden
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
