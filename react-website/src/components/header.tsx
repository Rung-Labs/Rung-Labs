import { Link } from "react-router-dom";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  const navItems = [
    { label: "Features", href: "/features" },
    { label: "Solutions", href: "/solutions" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed z-50 pt-8 md:pt-14 top-0 left-0 w-full">
      <header className="flex items-center justify-between relative">
        <Link to="/" className="flex items-center ml-12">
          <img src="/logo.png" alt="Rung Labs Logo" className="w-32 h-32" />
          <span className="font-bold text-2xl">Rung Labs</span>
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-12">
          {navItems.map((item) => (
            <Link
              className="uppercase inline-block font-mono text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out"
              to={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className="uppercase mr-12 max-lg:hidden transition-all ease-out duration-150 font-mono font-medium px-4 py-2 rounded-lg border bg-card/20 backdrop-blur"
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
      </header>
    </div>
  );
};
