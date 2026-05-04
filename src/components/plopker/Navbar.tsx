import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const links = [
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Layanan", href: "#layanan" },
  { label: "Keamanan", href: "#keamanan" },
  { label: "Untuk Pekerja", href: "#pekerja" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-xl bg-accent grid place-items-center font-bold text-accent-foreground">P</span>
          <span className="font-bold text-xl tracking-tight">Plopker</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </div>
        <div className="hidden md:block">
          <Button variant="accent" size="lg" onClick={() => navigate("/request")}>Cari Bantuan</Button>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="container mx-auto py-4 flex flex-col gap-4">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium">{l.label}</a>
            ))}
            <Button variant="accent" className="w-full" onClick={() => { setOpen(false); navigate("/request"); }}>Cari Bantuan</Button>
          </div>
        </div>
      )}
    </header>
  );
};
