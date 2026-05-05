import { Quote, Star } from "lucide-react";

const items = [
  {
    name: "Rina A.",
    role: "Ibu rumah tangga, Bandung",
    text: "Pesan potong rumput pagi, jam 10 sudah selesai. Pekerjanya sopan, harga sesuai estimasi awal.",
    rating: 5,
  },
  {
    name: "Daniel H.",
    role: "Karyawan, Jakarta Selatan",
    text: "Cuci mobil di rumah jadi gampang. Tinggal pilih waktu, tidak perlu antri di salon mobil.",
    rating: 5,
  },
  {
    name: "Sari W.",
    role: "Freelancer, Surabaya",
    text: "Saya suka karena harganya jelas di awal. Tidak ada drama tambahan biaya setelah kerja selesai.",
    rating: 5,
  },
];

export const Testimonials = () => (
  <section className="container mx-auto py-16 md:py-20">
    <div className="max-w-2xl">
      <p className="text-sm font-semibold text-accent uppercase tracking-wider">Testimoni</p>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold">Cerita dari pengguna pertama Plopker.</h2>
      <p className="mt-3 text-muted-foreground">Pengalaman nyata dari customer di sekitar Anda.</p>
    </div>
    <div className="mt-10 grid md:grid-cols-3 gap-5">
      {items.map((t) => (
        <div
          key={t.name}
          className="relative bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-card transition-shadow"
        >
          <Quote className="absolute -top-3 -left-3 h-8 w-8 text-accent bg-background rounded-full p-1.5 border border-border" />
          <div className="flex items-center gap-1">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
          <p className="mt-4 text-sm text-foreground/85 leading-relaxed">“{t.text}”</p>
          <div className="mt-5 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-trust grid place-items-center font-bold text-foreground/90">
              {t.name[0]}
            </div>
            <div>
              <div className="text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
