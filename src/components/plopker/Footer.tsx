export const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto py-12 grid md:grid-cols-2 gap-8">
      <div>
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-xl bg-accent grid place-items-center font-bold text-accent-foreground">P</span>
          <span className="font-bold text-xl">Plopker</span>
        </div>
        <p className="mt-3 text-sm text-muted-foreground max-w-sm">
          Platform bantuan jasa lokal untuk kebutuhan harian.
        </p>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-2 md:justify-end text-sm">
        {["Tentang", "Layanan", "Keamanan", "Untuk Pekerja"].map(l => (
          <a key={l} href="#" className="text-muted-foreground hover:text-foreground transition-colors">{l}</a>
        ))}
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container mx-auto py-5 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} Plopker. All rights reserved.</span>
        <span>Dibuat untuk lingkungan Anda.</span>
      </div>
    </div>
  </footer>
);
