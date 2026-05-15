import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const FinalCTA = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={ref} className="container mx-auto py-24 md:py-32">
      <div className="relative overflow-hidden rounded-[2rem] bg-foreground text-background p-12 md:p-20 text-center">
        <motion.div style={{ y }} className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
        <motion.div style={{ y }} className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-trust/20 blur-3xl" />
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
          >
            Mulai dari lingkungan <br className="hidden md:block" />
            <span className="text-accent">terdekat</span> Anda.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 text-background/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Plopker membantu kebutuhan rumah harian menjadi lebih cepat, jelas, dan tanpa drama harga.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button variant="accent" size="xl" onClick={() => navigate("/request")}>
              Cari Bantuan Sekarang <ArrowRight />
            </Button>
            <Button variant="soft" size="xl" onClick={() => navigate("/worker/register")}>
              Daftar Jadi Pekerja
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
