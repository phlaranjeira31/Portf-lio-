
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">

      {/* Foto + Card */}
      <div className="footer-hero-info">
        <Image
          src="/perfil-pedro.jpg"
          alt="Foto de perfil"
          width={70}
          height={70}
          className="footer-hero-img"
        />

        <div className="footer-hero-card">
          <span className="footer-hero-title">STACK</span>
          <span className="footer-hero-text">Fullstack</span>
        </div>
      </div>

      {/* Ícones sociais */}
      <div className="footer-social">
        <a
          href="https://www.linkedin.com/in/pedro-henrique-laranjeira31"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/phlaranjeira31"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a href="mailto:pedrolaranjeira09@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Pedro Henrique — Portfólio
      </p>
    </footer>
  );
}
