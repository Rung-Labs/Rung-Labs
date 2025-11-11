import { Link } from "react-router-dom";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  const navItems = [
    { label: "Features", href: "/features" },
    { label: "Solutions", href: "/solutions" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed z-50 top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-border/20">
      <header className="flex items-center justify-between px-6 md:px-12 h-24">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Rung Labs Logo" className="w-16 h-16" />
          <span className="font-bold text-xl hidden sm:inline">Rung Labs</span>
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-12">
          {navItems.map((item) => (
            <Link
              className="uppercase inline-block font-mono text-base font-medium text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out"
              to={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            className="uppercase max-lg:hidden transition-all ease-out duration-150 font-mono font-medium px-5 py-2.5 rounded-lg border bg-card/20 backdrop-blur text-base"
            style={{
              color: "#ffffff",
              borderColor: "rgba(10, 87, 165)",
              boxShadow:
                "inset 0 0 20px 0px rgba(10, 87, 165, 0.3), 0 0 15px rgba(10, 87, 165, 0.4)",
            }}
            to="/contact"
          >
            Book Demo
          </Link>
          <MobileMenu />
        </div>
      </header>
    </div>
  );
};
