import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
    return (
        <footer style={{
            width: "100%",
            background: "linear-gradient(160deg, #060d1f 0%, #0a1628 60%, #091428 100%)",
            position: "relative",
            overflow: "hidden",
            fontFamily: "'Sora', 'DM Sans', system-ui, sans-serif",
        }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap');

                @keyframes twinkle {
                    from { opacity: 0.15; transform: scale(0.8); }
                    to { opacity: 0.7; transform: scale(1.2); }
                }
                @keyframes shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }

                .footer-social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 42px;
                    height: 42px;
                    border-radius: 12px;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.08);
                    transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
                    position: relative;
                    overflow: hidden;
                }
                .footer-social-link::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at center, rgba(56,189,248,0.15), transparent 70%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .footer-social-link:hover {
                    transform: translateY(-4px) scale(1.1);
                    border-color: rgba(56,189,248,0.3);
                    box-shadow: 0 8px 24px rgba(56,189,248,0.2);
                }
                .footer-social-link:hover::before {
                    opacity: 1;
                }
                .footer-social-link img {
                    width: 18px;
                    height: 18px;
                    object-fit: contain;
                    position: relative;
                    filter: brightness(0) invert(1) opacity(0.6);
                    transition: filter 0.3s ease;
                }
                .footer-social-link:hover img {
                    filter: brightness(0) invert(1) opacity(1);
                }

                .footer-name {
                    background: linear-gradient(120deg, #e0f2fe 0%, #38bdf8 50%, #818cf8 100%);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: shimmer 4s linear infinite;
                    font-weight: 700;
                }
            `}</style>

            {/* Ambient glow */}
            <div style={{
                position: "absolute", bottom: "-60px", left: "20%",
                width: "400px", height: "200px",
                borderRadius: "50%",
                background: "radial-gradient(ellipse, rgba(56,189,248,0.05) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", bottom: "-40px", right: "25%",
                width: "300px", height: "150px",
                borderRadius: "50%",
                background: "radial-gradient(ellipse, rgba(129,140,248,0.05) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            {/* Star dots */}
            {[...Array(12)].map((_, i) => (
                <div key={i} style={{
                    position: "absolute",
                    width: "2px", height: "2px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.4)",
                    top: `${20 + (i * 31) % 60}%`,
                    left: `${(i * 17 + 5) % 95}%`,
                    animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite alternate`,
                    animationDelay: `${(i * 0.4) % 2.5}s`,
                    pointerEvents: "none",
                }} />
            ))}

            {/* Top divider line */}
            <div style={{
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.2), rgba(129,140,248,0.2), transparent)",
                margin: "0 40px",
            }} />

            {/* Footer content */}
            <div style={{
                maxWidth: "1100px",
                margin: "0 auto",
                padding: "32px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "20px",
                position: "relative",
                zIndex: 1,
            }}>
                {/* Left: branding text */}
                <p style={{
                    color: "rgba(186,230,253,0.45)",
                    fontSize: "0.88rem",
                    fontWeight: "400",
                    letterSpacing: "0.01em",
                    margin: 0,
                    lineHeight: "1.6",
                }}>
                    Built with React, Three.js & creativity by{" "}
                    <span className="footer-name">Vedant</span>
                </p>

                {/* Center: subtle tagline */}
                <p style={{
                    color: "rgba(186,230,253,0.2)",
                    fontSize: "0.78rem",
                    fontWeight: "400",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    margin: 0,
                }}>
                    © {new Date().getFullYear()} · All rights reserved
                </p>

                {/* Right: social icons */}
                <div style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                }}>
                    {socialLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-link"
                            title={link.name}
                        >
                            <img src={link.iconUrl} alt={link.name} />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;