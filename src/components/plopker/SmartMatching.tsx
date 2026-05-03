import { MapPin, Users } from "lucide-react";

export const SmartMatching = () => (
  <section className="container mx-auto py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
    <div>
      <p className="text-sm font-semibold text-accent uppercase tracking-wider">Smart Matching</p>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">Tidak perlu cari satu-satu. Sistem bantu mencocokkan.</h2>
      <p className="mt-4 text-muted-foreground text-lg">
        Customer cukup menjelaskan pekerjaan, lalu Plopker mencarikan pekerja yang sesuai
        berdasarkan lokasi, kategori jasa, radius kerja, rating, dan ketersediaan.
      </p>
    </div>
    <div className="relative">
      <div className="bg-card rounded-3xl border border-border shadow-card p-6">
        <div className="text-xs text-muted-foreground">Job Request</div>
        <div className="mt-2 font-semibold text-lg">Potong rumput + bersih halaman</div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-border p-4 bg-background/60">
            <div className="flex items-center gap-2 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5" /> Radius</div>
            <div className="mt-1 font-bold text-xl">2 km</div>
          </div>
          <div className="rounded-2xl border border-border p-4 bg-background/60">
            <div className="flex items-center gap-2 text-xs text-muted-foreground"><Users className="h-3.5 w-3.5" /> Matched</div>
            <div className="mt-1 font-bold text-xl">5 pekerja</div>
          </div>
        </div>
        <div className="mt-5 relative h-44 rounded-2xl bg-gradient-to-br from-secondary to-background border border-border overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-70" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-4 w-4 rounded-full bg-accent ring-4 ring-accent/30" />
          </div>
          {[
            { x: "20%", y: "30%" }, { x: "70%", y: "25%" }, { x: "30%", y: "70%" },
            { x: "75%", y: "65%" }, { x: "55%", y: "80%" },
          ].map((p, i) => (
            <div key={i} className="absolute h-3 w-3 rounded-full bg-trust ring-4 ring-trust/20" style={{ left: p.x, top: p.y }} />
          ))}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full border border-dashed border-foreground/20" />
        </div>
      </div>
    </div>
  </section>
);
