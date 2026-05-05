import { Clock, Star, MapPin, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Clock, value: "≤ 30 mnt", label: "Rata-rata waktu pencocokan" },
  { icon: Star, value: "4.8 / 5", label: "Rating rata-rata pekerja" },
  { icon: MapPin, value: "1–5 km", label: "Radius pencarian lokal" },
  { icon: ShieldCheck, value: "100%", label: "Harga disetujui di awal" },
];

export const StatsBar = () => (
  <section className="container mx-auto px-4">
    <div className="bg-foreground text-background rounded-3xl px-6 py-8 md:px-10 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-card relative overflow-hidden">
      <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-trust/20 blur-3xl" />
      {stats.map(({ icon: Icon, value, label }) => (
        <div key={label} className="relative flex items-start gap-3">
          <div className="h-10 w-10 rounded-xl bg-background/10 grid place-items-center shrink-0">
            <Icon className="h-5 w-5 text-accent" />
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-extrabold tracking-tight">{value}</div>
            <div className="text-xs md:text-sm text-background/70 mt-0.5">{label}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
