import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Store form reference before async operation
    const form = e.currentTarget;
    const formData = new FormData(form);

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    formData.append("access_key", accessKey);

    // Configure email settings
    formData.append(
      "subject",
      "New Contact Form Submission from Rung Labs Website"
    );
    formData.append("from_name", "Rung Labs Website");

    // Add multiple recipients (your and co-founder's emails)
    // Replace with your actual email addresses
    formData.append("email", "nmcgourthy@runglabs.com");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        form.reset(); // Use stored form reference

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative h-[calc(100svh-6rem)] flex items-center overflow-hidden max-md:overflow-y-auto">
      <div className="container max-w-2xl mx-auto py-8 md:py-0">
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
          <form className="space-y-5" onSubmit={handleSubmit}>
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

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="font-mono text-sm text-primary">
                  ✓ Message sent successfully! We'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                <p className="font-mono text-sm text-red-400">
                  ✗ Failed to send message. Please try again or email us
                  directly.
                </p>
              </div>
            )}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
