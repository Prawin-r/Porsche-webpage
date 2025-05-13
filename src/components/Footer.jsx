import { Github, Linkedin, Mail } from "lucide-react";
import "./Hero.css";


export default function Footer() {
  return (
    <footer className="bg-black text-white text-center p-6 mt-4 hero-font">
      <p>&copy; {new Date().getFullYear()} Porsche. All rights reserved.</p>
      <p className="mt-2 text-sm italic">
        Crafted with precision and passion by{" "}
        <span className="font-semibold">Prawinraj</span> — just like a Porsche.
      </p>

      <div className="flex justify-center mt-3 space-x-6">
        <a
          href="https://github.com/prawin-01"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition flex items-center"
        >
          <Github className="w-5 h-5 mr-1" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/prawinraj"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition flex items-center"
        >
          <Linkedin className="w-5 h-5 mr-1" />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
        <a
          href="mailto:rajprawin307@gmail.com"
          className="hover:text-gray-400 transition flex items-center"
        >
          <Mail className="w-5 h-5 mr-1" />
          <span className="hidden sm:inline">Email</span>
        </a>
      </div>
    </footer>
  );
}
