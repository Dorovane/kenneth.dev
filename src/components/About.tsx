import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code, Globe, Heart } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Defenseur du Code Propre",
    description: "Ecriture de code maintenable et scalable",
  },
  {
    icon: Globe,
    title: "Vision Globale",
    description: "Creation d'applications qui passent a l'echelle mondiale",
  },
  {
    icon: Briefcase,
    title: "Croissance Professionnelle",
    description: "Apprentissage continu des nouvelles technologies",
  },
  {
    icon: Heart,
    title: "Passionne",
    description: "J'aime ce que je fais et ca se voit",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 sm:py-32 bg-slate-900/50"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-500 font-medium tracking-wider uppercase text-sm">
            A propos de moi
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Tout sur{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Dorovane 
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-3xl opacity-20" />
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-1 rounded-2xl border border-white/10">
                <img
                  src="../../coding.jpg"
                  alt="En train de coder"
                  className="w-full h-[300px] sm:h-[400px] object-cover rounded-xl"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-slate-800 to-slate-900 p-4 sm:p-6 rounded-2xl border border-white/10 shadow-2xl"
              >
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    2+
                  </p>
                  <p className="text-gray-400 text-sm">Annees d'experience</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Bonjour ! Je suis Kenneth Tchegninougbo
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              En tant que Developpeur Web Full-Stack passionne, je me specialise dans la creation
              d'applications web robustes et scalables qui offrent des experiences utilisateur
              exceptionnelles. Avec une expertise allant des frameworks front-end comme React et Next.js
              aux technologies back-end comme Node.js et Express, je donne vie aux idees grace a un
              code propre et efficace.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Mon parcours dans le developpement web m'a permis d'acquerir une comprehension profonde
              des bases de donnees relationnelles et non relationnelles, de la conception d'API RESTful
              et des pratiques modernes de deploiement. Je m'epanouis face aux defis et j'explore
              constamment de nouvelles technologies pour rester a l'avant-garde du developpement web.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="group relative bg-slate-800/50 p-4 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all"
                >
                  <item.icon className="w-6 h-6 text-cyan-500 mb-2" />
                  <h4 className="text-white font-semibold text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
