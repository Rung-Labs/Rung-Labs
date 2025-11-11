import { Link } from "react-router-dom";
import { Pill } from "./pill";
import { Button } from "./ui/button";

export function Hero({
  setHovering,
}: {
  setHovering: (hovering: boolean) => void;
}) {
  return (
    <div className="flex flex-col h-[calc(100svh-6rem)] justify-center overflow-hidden">
      <div className="text-center relative z-10 px-4 max-md:overflow-y-auto max-md:max-h-full">
        <Pill className="mb-6">AI CALL HANDLING</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Never miss another call
          <br />
          <i className="font-light">or lead</i>
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[520px] mx-auto">
          Rung Labs builds niche automation products. Our first launch is an AI
          phone responder powered by Twilio and n8n—capturing every inbound
          call, qualifying leads, and routing updates to your team instantly.
        </p>

        <Link className="contents max-sm:hidden" to="/contact">
          <Button
            className="mt-14"
            style={{
              borderColor: "rgba(10, 87, 165)",
              boxShadow:
                "inset 0 0 54px 0px rgba(10, 87, 165, 0.5), 0 0 20px rgba(10, 87, 165, 0.6)",
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Book Demo]
          </Button>
        </Link>
        <Link className="contents sm:hidden" to="/contact">
          <Button
            size="sm"
            className="mt-14"
            style={{
              borderColor: "rgba(10, 87, 165)",
              boxShadow:
                "inset 0 0 54px 0px rgba(10, 87, 165, 0.5), 0 0 20px rgba(10, 87, 165, 0.6)",
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Book Demo]
          </Button>
        </Link>
      </div>
    </div>
  );
}
