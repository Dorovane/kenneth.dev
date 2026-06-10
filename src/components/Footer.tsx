import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <motion.a
              href="#hero"
              className="inline-flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-900 rounded-lg p-2">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Dorovane Dev
              </span>
            </motion.a>
            <p className="text-gray-500 text-sm mt-3 max-w-xs">
              Creation d'experiences web belles et performantes avec les
              technologies modernes.
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {["A propos", "Competences", "Projets", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4">Suivez-moi</h4>
            <div className="flex justify-center md:justify-end gap-3">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Kenneth Tchegninougbo. Tous droits reserves.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Fait avec{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
            avec React et Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
