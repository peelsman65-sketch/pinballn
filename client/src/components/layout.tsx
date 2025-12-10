import { Link, useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import pinballNeon from "@assets/generated_images/neon_sign_saying_pinball.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/hire", label: "Hire Machines" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/20 py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-primary group-hover:shadow-[0_0_15px_theme('colors.primary')] transition-all">
                <img src={pinballNeon} alt="PinballN Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary group-hover:text-glow transition-all">
                PINBALLN
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary ${
                    location === link.href ? "text-primary text-glow" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold uppercase tracking-widest shadow-[0_0_15px_theme('colors.primary')] hover:shadow-[0_0_25px_theme('colors.primary')] transition-all border-none">
                <Zap className="w-4 h-4 mr-2 fill-current" />
                Book Now
              </Button>
            </Link>
          </nav>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-primary">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-card border-l border-primary/20">
              <div className="flex flex-col gap-8 mt-10">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      className={`text-2xl font-display font-bold uppercase ${
                        location === link.href ? "text-primary text-glow" : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </a>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-primary/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                   <Zap className="w-4 h-4 text-white fill-white" />
                </div>
                <span className="text-xl font-display font-bold text-white">PINBALLN</span>
              </div>
              <p className="text-muted-foreground max-w-md">
                Melbourne's premier pinball machine hire service. We bring the arcade to your home, office, or event space.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/hire"><a className="text-muted-foreground hover:text-primary transition-colors">Party Hire</a></Link></li>
                <li><Link href="/hire"><a className="text-muted-foreground hover:text-primary transition-colors">Corporate Events</a></Link></li>
                <li><Link href="/hire"><a className="text-muted-foreground hover:text-primary transition-colors">Long Term Hire</a></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Melbourne, Victoria</li>
                <li>info@pinballn.com.au</li>
                <li>0400 123 456</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Pinballn. All rights reserved.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 rounded bg-white/5 hover:bg-primary/20 transition-colors flex items-center justify-center cursor-pointer text-white">
                Fb
              </div>
              <div className="w-8 h-8 rounded bg-white/5 hover:bg-primary/20 transition-colors flex items-center justify-center cursor-pointer text-white">
                In
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
