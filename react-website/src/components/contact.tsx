import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  return (
    <section className="relative min-h-[calc(100svh-5rem)] py-12 md:py-16 flex items-center">
      <div className="container max-w-2xl mx-auto">
        {/* Header */}
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-sentient">
            Let&apos;s talk
          </h1>

          <div className="flex flex-row gap-auto">
            {/* Email Option */}
            <a
              href="mailto:hello@runglabs.com"
              className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-border/60  bg-card/20 backdrop-blur transition-colors group"
            >
              <span className="text-primary">@</span>
              <span className="font-mono text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                zreed@runglabs.com
              </span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8 backdrop-blur">
          <form className="space-y-5">
            <div className="grid gap-4">
              <div>
                <label
                  className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 block mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="bg-transparent"
                />
              </div>
              <div>
                <label
                  className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 block mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@company.com"
                  required
                  className="bg-transparent"
                />
              </div>
              <div>
                <label
                  className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 block mb-2"
                  htmlFor="email"
                >
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+1 (234) 567-8900"
                  required
                  className="bg-transparent"
                />
              </div>
              <div>
                <label
                  className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 block mb-2"
                  htmlFor="company"
                >
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Your company"
                  className="bg-transparent"
                />
              </div>
              <div>
                <label
                  className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 block mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your needs"
                  rows={4}
                  className="bg-transparent"
                />
              </div>
            </div>

            <Button type="submit" className="w-full">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
