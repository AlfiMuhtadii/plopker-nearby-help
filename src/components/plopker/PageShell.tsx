import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

export const PageShell = ({ children, eyebrow, title, subtitle }: { children: ReactNode; eyebrow: string; title: string; subtitle: string }) => (
  <div className="min-h-screen bg-background">
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-xl bg-accent grid place-items-center font-bold text-accent-foreground">P</span>
          <span className="font-bold text-xl tracking-tight">Plopker</span>
        </Link>
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> Kembali
        </Link>
      </nav>
    </header>
    <main className="container mx-auto py-10 md:py-16 max-w-2xl px-4">
      <div className="text-center mb-8">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider">{eyebrow}</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h1>
        <p className="mt-3 text-muted-foreground">{subtitle}</p>
      </div>
      {children}
    </main>
  </div>
);
