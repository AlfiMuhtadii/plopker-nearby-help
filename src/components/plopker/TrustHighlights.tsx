import { ShieldCheck, MapPin, Wallet } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Worker Terverifikasi", desc: "Data pekerja dicek sebelum menerima pekerjaan." },
  { icon: MapPin, title: "Jarak Terdekat", desc: "Sistem mencarikan pekerja berdasarkan area dan radius kerja." },
  { icon: Wallet, title: "Harga Transparan", desc: "Estimasi harga terlihat sebelum pekerjaan dimulai." },
];

export const TrustHighlights = () => (
  <section className="container mx-auto py-16 md:py-20">
    <div className="grid md:grid-cols-3 gap-5">
      {items.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-card transition-shadow">
          <div className="h-12 w-12 rounded-xl bg-accent/20 grid place-items-center">
            <Icon className="h-6 w-6 text-foreground" />
          </div>
          <h3 className="mt-4 font-bold text-lg">{title}</h3>
          <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);
