import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML/CSS", level: 95, icon: "🎨" },
      { name: "JavaScript", level: 92, icon: "⚡" },
      { name: "TypeScript", level: 88, icon: "📘" },
      { name: "React", level: 90, icon: "⚛️" },
      { name: "Tailwind CSS", level: 92, icon: "🌬️" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 88, icon: "🟢" },
      { name: "Express", level: 85, icon: "🚀" },
      { name: "NestJS", level: 80, icon: "🐈" },
      { name: "REST APIs", level: 90, icon: "🔌" },
      { name: "GraphQL", level: 78, icon: "📊" },
    ],
  },
  {
    category: "Base de donnees & Outils",
    skills: [
      { name: "PostgreSQL/MongoDB", level: 85, icon: "🗄️" },
      { name: "Git/GitHub", level: 90, icon: "🔀" },
      { name: "Linux", level: 82, icon: "🐧" },
      { name: "Docker", level: 75, icon: "🐳" },
      { name: "WebSocket", level: 80, icon: "📡" },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-500 font-medium tracking-wider uppercase text-sm">
            Mes Competences
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Technologies que je{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Maitrise
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Une boite a outils complete construite grace a des annees d'experience pratique
            et d'apprentissage continu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-white/5"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 font-medium flex items-center gap-2">
                        <span>{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 relative"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { value: "25+", label: "Projets realises" },
            { value: "50K+", label: "Lignes de code" },
            { value: "10+", label: "Clients satisfaits" },
            { value: "100%", label: "Devouement" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 sm:p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all"
            >
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
