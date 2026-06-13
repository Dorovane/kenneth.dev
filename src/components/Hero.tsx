import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin ,Facebook} from "lucide-react";

const roles = [
  "Developpeur Web Full-Stack",
  "Developpeur mobile",
  "Passionné par React",
  "Probleme Solver",
  "Artisan du Code",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 30 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            left: "10%",
            top: "20%",
            background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{
            right: "15%",
            bottom: "30%",
            background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-15 blur-3xl"
          style={{
            left: "60%",
            top: "10%",
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src="../../moi.jpg"
                alt="Kenneth Tchegninougbo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-cyan-400">
            Disponible pour de nouvelles opportunites
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="text-white">Salut, je suis </span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Dorovane
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-6"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-medium mt-4 text-3xl">
            Bienvenu(e)s dans le monde de {" "}
            <span className="text-cyan-400 font-semibold">Kenneth TCHEGNINOUGBO</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="h-10 sm:h-12 mb-8"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
            <span className="text-gray-400">{displayText}</span>
            <span className="animate-pulse text-cyan-400">|</span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Je cree des experiences web elegantes et performantes avec les technologies modernes.
          Passionne par le code propre, l'UX intuitive et la creation de produits qui font la difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#projects")}
            className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 transition-all w-full sm:w-auto"
          >
            Voir mes projets
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#contact")}
            className="px-8 py-3.5 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all w-full sm:w-auto"
          >
            Me contacter
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/Dorovane/", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/kenneth-tchegninougbo-59201a30b/", label: "LinkedIn" },
            { icon: Facebook, href: "https://web.facebook.com/dorovane24", label: "Facebook" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              target="_blank"
              key={label}
              href={href}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("#about")}
        >
          <span className="text-sm text-gray-500">Defiler pour explorer</span>
          <ArrowDown className="w-5 h-5 text-cyan-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
