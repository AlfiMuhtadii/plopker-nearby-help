import { BadgeCheck, Star, HandCoins, ClipboardCheck } from "lucide-react";

const points = [
  { icon: BadgeCheck, title: "Verifikasi identitas pekerja", desc: "Setiap pekerja melalui pengecekan data sebelum menerima pekerjaan." },
  { icon: Star, title: "Rating dan riwayat pekerjaan", desc: "Reputasi terbangun dari pengalaman customer sebelumnya." },
  { icon: HandCoins, title: "Persetujuan harga di awal", desc: "Tidak ada biaya tersembunyi. Anda setuju dulu sebelum pekerjaan dimulai." },
  { icon: ClipboardCheck, title: "Check-in & check-out", desc: "Setiap pekerjaan tercatat waktu mulai dan selesainya." },
];

export const Safety = () => (
  <section id="keamanan" className="bg-card border-y border-border">
    <div className="container mx-auto py-16 md:py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-trust uppercase tracking-wider">Keamanan</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">Aman untuk customer, adil untuk pekerja.</h2>
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-5">
        {points.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex gap-4 p-6 rounded-2xl border border-border bg-background/60">
            <div className="h-11 w-11 rounded-xl bg-trust/15 grid place-items-center shrink-0">
              <Icon className="h-5 w-5 text-trust" />
            </div>
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
