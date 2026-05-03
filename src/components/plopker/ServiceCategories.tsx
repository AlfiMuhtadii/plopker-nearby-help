import { Scissors, Leaf, Car, Sprout, Package, Brush } from "lucide-react";

const services = [
  { icon: Scissors, title: "Potong Rumput", desc: "Halaman rapi tanpa repot bawa alat sendiri." },
  { icon: Leaf, title: "Bersih Halaman", desc: "Daun kering, sampah taman, dan sudut kotor dibereskan." },
  { icon: Car, title: "Cuci Motor / Mobil", desc: "Cuci di rumah Anda, kendaraan kembali kinclong." },
  { icon: Sprout, title: "Siram Tanaman", desc: "Tanaman tetap segar saat Anda sibuk atau bepergian." },
  { icon: Package, title: "Angkut Barang Ringan", desc: "Pindahkan furnitur kecil atau barang dalam radius dekat." },
  { icon: Brush, title: "Bersih Teras / Paving", desc: "Teras dan paving kembali bersih dari lumut dan debu." },
];

export const ServiceCategories = () => (
  <section id="layanan" className="container mx-auto py-16 md:py-20">
    <div className="max-w-2xl">
      <p className="text-sm font-semibold text-accent uppercase tracking-wider">Layanan</p>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold">Bantuan untuk pekerjaan harian di sekitar rumah</h2>
      <p className="mt-3 text-muted-foreground">Pilih kategori sesuai kebutuhan, sistem yang carikan pekerja terdekat.</p>
    </div>
    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="group bg-card rounded-2xl p-6 border border-border hover:border-accent shadow-soft hover:shadow-card transition-all">
          <div className="h-12 w-12 rounded-xl bg-secondary grid place-items-center group-hover:bg-accent/20 transition-colors">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 font-semibold text-lg">{title}</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);
