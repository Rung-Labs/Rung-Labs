import { Card } from "./ui/card";

export function Features() {
  const features = [
    {
      title: "Instant Call Capture",
      description:
        "Twilio-powered calls answer instantly, greet customers, and keep them engaged — even if you're on another job or closed for the day.",
    },
    {
      title: "Lead Qualification Built for Contractors",
      description:
        "We collect caller name, job type, and urgency, and send it to your phone or email — so you're only talking to serious leads.",
    },
    {
      title: "Smart Routing & Follow-up",
      description:
        "Missed a call? Our system texts the customer immediately, logs their request, and lets you reply or auto-send your booking link.",
    },
    {
      title: "Call Tracking & Lead Insights",
      description:
        "See exactly who called, what they needed, and how fast you followed up — all in a dashboard built for local trades.",
    },
  ];

  const stats = [
    { stat: "30s", label: "Average time-to-response" },
    { stat: "+62%", label: "Qualified leads captured" },
    { stat: "95%", label: "Caller satisfaction scores" },
    { stat: "24/7", label: "Automated coverage" },
  ];

  return (
    <section className="relative min-h-[calc(100svh-5rem)] py-12 md:py-16 flex items-center">
      <div className="container">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-6 text-center">
            <h2 className="text-4xl md:text-5xl font-sentient">
              AI voice automation for niche teams
            </h2>
            <p className="font-mono text-sm md:text-base text-foreground/60 max-w-2xl mx-auto">
              Our first product turns missed calls into qualified conversations,
              stitching together Twilio telephony and n8n automations tailored
              to your use case.
            </p>
          </div>

          {/* Features */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="h-full p-6 md:p-8 border border-border bg-card/20 backdrop-blur"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="font-mono text-xs md:text-sm text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-card/40 p-6 bg-card/20 backdrop-blur text-center"
              >
                <div className="text-2xl md:text-3xl font-sentient text-primary mb-2">
                  {item.stat}
                </div>
                <p className="font-mono text-[11px] md:text-xs text-foreground/60">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
