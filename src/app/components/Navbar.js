// src/app/components/Navbar.js

"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Lado esquerdo: foto + nome + título */}
        <div className="navbar-left">
          <div className="navbar-profile">
            <Image
              src="/perfil-pedro.jpg"
              alt="Foto de perfil"
              width={40}
              height={40}
              className="navbar-avatar"
            />
            <div className="navbar-texts">
              <span className="navbar-name">Pedro Henrique</span>
              <span className="navbar-role">
                Desenvolvedor{" "}
                <span className="title-highlight">Fullstack</span> &{" "}
                <span className="title-highlight">IA</span>
              </span>
            </div>
          </div>
        </div>

        {/* Lado direito: links de navegação */}
        <nav className="navbar-right">
          <Link href="#about" className="navbar-link">
            Sobre
          </Link>
          <Link href="#skills" className="navbar-link">
            Habilidades
          </Link>
          <Link href="#experience" className="navbar-link">
            Experiência
          </Link>
          <Link href="#projects" className="navbar-link">
            Projetos
          </Link>
          <Link href="#contact" className="navbar-link">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}

