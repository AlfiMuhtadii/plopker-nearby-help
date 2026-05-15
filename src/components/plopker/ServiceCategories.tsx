import { Scissors, Leaf, Car, Sprout, Package, Brush } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, StaggerGroup, staggerItem } from "./Reveal";

const services = [
  { icon: Scissors, title: "Potong Rumput", desc: "Halaman rapi tanpa repot bawa alat sendiri." },
  { icon: Leaf, title: "Bersih Halaman", desc: "Daun kering, sampah taman, dan sudut kotor dibereskan." },
  { icon: Car, title: "Cuci Motor / Mobil", desc: "Cuci di rumah Anda, kendaraan kembali kinclong." },
  { icon: Sprout, title: "Siram Tanaman", desc: "Tanaman tetap segar saat Anda sibuk atau bepergian." },
  { icon: Package, title: "Angkut Barang Ringan", desc: "Pindahkan furnitur kecil atau barang dalam radius dekat." },
  { icon: Brush, title: "Bersih Teras / Paving", desc: "Teras dan paving kembali bersih dari lumut dan debu." },
];

export const ServiceCategories = () => (
  <section id="layanan" className="container mx-auto py-24 md:py-32">
    <Reveal className="max-w-3xl">
      <p className="text-sm font-semibold text-accent uppercase tracking-[0.2em]">Layanan</p>
      <h2 className="mt-3 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
        Pekerjaan harian, <span className="text-gradient-brand">selesai hari ini.</span>
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Pilih kategori sesuai kebutuhan, sistem yang carikan pekerja terdekat.
      </p>
    </Reveal>
    <StaggerGroup className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.map(({ icon: Icon, title, desc }) => (
        <motion.div
          key={title}
          variants={staggerItem}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group bg-card rounded-2xl p-7 border border-border hover:border-accent shadow-soft hover:shadow-card transition-colors"
        >
          <div className="h-12 w-12 rounded-xl bg-secondary grid place-items-center group-hover:bg-accent/20 transition-colors">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="mt-5 font-semibold text-lg">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </motion.div>
      ))}
    </StaggerGroup>
  </section>
);
