// SVG-Interpretation der StefanAI Wort-Bildmarke gemaess Styleguide:
// - Bildmarke: grosser Kreis + kleinerer innerer Kreis (Kameralinse / Drohne)
//   mit drei Linien nach unten, die in kleinen Kreisen enden (Leiterbahnen).
// - Cyber-Sunrise-Verlauf (Pink -> Orange -> Gelb).
// - Wortmarke "StefanAI" in Bree Serif, dunkelblau (auf hellem Grund) bzw. weiss.

import { CSSProperties } from "react";

type LogoProps = {
  className?: string;
  style?: CSSProperties;
  variant?: "auto" | "light" | "dark";
};

export function Logo({ className, style, variant = "auto" }: LogoProps) {
  const wordColor = variant === "dark" ? "#040026" : "#ffffff";
  return (
    <svg
      role="img"
      aria-label="StefanAI"
      viewBox="0 0 220 60"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cyberSunrise" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e62e74" />
          <stop offset="55%" stopColor="#f35c31" />
          <stop offset="100%" stopColor="#f4c20c" />
        </linearGradient>
      </defs>
      <g transform="translate(4 4)">
        <circle cx="26" cy="22" r="20" fill="url(#cyberSunrise)" />
        <circle cx="26" cy="22" r="7" fill="#040026" />
        <circle cx="26" cy="22" r="3" fill="url(#cyberSunrise)" />
        {/* Leiterbahnen */}
        <path
          d="M14 38 L14 48"
          stroke="url(#cyberSunrise)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M26 42 L26 50"
          stroke="url(#cyberSunrise)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M38 38 L38 48"
          stroke="url(#cyberSunrise)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="14" cy="50" r="2.2" fill="url(#cyberSunrise)" />
        <circle cx="26" cy="52" r="2.2" fill="url(#cyberSunrise)" />
        <circle cx="38" cy="50" r="2.2" fill="url(#cyberSunrise)" />
      </g>
      <text
        x="62"
        y="36"
        fontFamily="var(--font-bree-serif), Georgia, serif"
        fontSize="26"
        fontWeight="600"
        fill={wordColor}
      >
        StefanAI
      </text>
    </svg>
  );
}
