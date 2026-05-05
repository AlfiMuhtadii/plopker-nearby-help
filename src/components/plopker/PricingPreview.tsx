import { Scissors, Car, Leaf, Package, Sprout, Brush } from "lucide-react";

const rows = [
  { icon: Scissors, name: "Potong rumput", area: "Halaman kecil (≤50 m²)", price: "Rp50–80rb" },
  { icon: Leaf, name: "Bersih halaman", area: "Sapu daun & sampah taman", price: "Rp40–70rb" },
  { icon: Car, name: "Cuci mobil", area: "Cuci di rumah", price: "Rp45–75rb" },
  { icon: Sprout, name: "Siram tanaman", area: "Per kunjungan", price: "Rp25–40rb" },
  { icon: Package, name: "Angkut barang ringan", area: "Radius < 3 km", price: "Rp50–100rb" },
  { icon: Brush, name: "Bersih teras / paving", area: "Per area", price: "Rp60–120rb" },
];

export const PricingPreview = () => (
  <section className="container mx-auto py-16 md:py-20">
    <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
      <div>
        <p className="text-sm font-semibold text-accent uppercase tracking-wider">Estimasi Harga</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">
          Tahu kisaran harga sebelum pesan.
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Tidak ada tarif tersembunyi. Anda lihat estimasi terlebih dulu, lalu setujui sebelum
          pekerjaan dimulai.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 text-xs font-medium bg-secondary border border-border px-3 py-2 rounded-full">
          *Harga dapat berbeda menyesuaikan kondisi lapangan.
        </div>
      </div>
      <div className="bg-card rounded-3xl border border-border shadow-card overflow-hidden">
        <div className="px-6 py-4 bg-secondary/60 border-b border-border flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <span>Layanan</span>
          <span>Estimasi</span>
        </div>
        <ul className="divide-y divide-border">
          {rows.map(({ icon: Icon, name, area, price }) => (
            <li key={name} className="flex items-center gap-4 px-6 py-4 hover:bg-secondary/40 transition-colors">
              <div className="h-10 w-10 rounded-xl bg-accent/15 grid place-items-center shrink-0">
                <Icon className="h-5 w-5 text-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm">{name}</div>
                <div className="text-xs text-muted-foreground">{area}</div>
              </div>
              <div className="font-bold text-sm whitespace-nowrap">{price}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
