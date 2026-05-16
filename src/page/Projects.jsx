import { useState } from "react";
import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
    const [tilts, setTilts] = useState({});

    const handleMouseMove = (e, i) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotateX = ((y - cy) / cy) * -12;
        const rotateY = ((x - cx) / cx) * 12;
        const glowX = Math.round((x / rect.width) * 100);
        const glowY = Math.round((y / rect.height) * 100);
        setTilts(prev => ({ ...prev, [i]: { rotateX, rotateY, glowX, glowY, active: true } }));
    };

    const handleMouseLeave = (i) => {
        setTilts(prev => ({ ...prev, [i]: { rotateX: 0, rotateY: 0, glowX: 50, glowY: 50, active: false } }));
    };

    return (
        <section style={{
            width: "100%",
            minHeight: "100vh",
            padding: "100px 24px 120px",
            background: "linear-gradient(160deg, #060d1f 0%, #0a1628 40%, #0d1f3c 70%, #091428 100%)",
            position: "relative",
            overflow: "hidden",
            fontFamily: "'Sora', system-ui, sans-serif",
        }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

                @keyframes shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                @keyframes floatUp {
                    from { opacity: 0; transform: translateY(36px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes twinkle {
                    from { opacity: 0.15; } to { opacity: 0.6; }
                }

                .tilt-wrapper {
                    perspective: 900px;
                    transform-style: preserve-3d;
                }
                .project-card {
                    transition: transform 0.12s ease-out, box-shadow 0.3s ease, border-color 0.3s ease;
                    will-change: transform;
                    transform-style: preserve-3d;
                }
                .project-card.reset {
                    transition: transform 0.55s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease, border-color 0.4s ease;
                }

                .view-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 11px 20px;
                    border-radius: 12px;
                    text-decoration: none;
                    background: rgba(14,165,233,0.1);
                    border: 1px solid rgba(14,165,233,0.2);
                    color: #38bdf8;
                    font-weight: 600;
                    font-size: 0.85rem;
                    letter-spacing: 0.03em;
                    transition: all 0.25s ease;
                    font-family: 'Sora', system-ui, sans-serif;
                }
                .view-btn:hover {
                    background: rgba(14,165,233,0.18);
                    border-color: rgba(56,189,248,0.4);
                    box-shadow: 0 8px 24px rgba(14,165,233,0.2);
                    transform: translateX(3px);
                }
                .view-btn img {
                    width: 13px;
                    height: 13px;
                    filter: brightness(0) saturate(100%) invert(72%) sepia(71%) saturate(500%) hue-rotate(170deg);
                    transition: transform 0.25s ease;
                }
                .view-btn:hover img { transform: translateX(3px); }
            `}</style>

            {/* Ambient glows */}
            <div style={{ position: "absolute", top: "-150px", right: "-200px", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.06), transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "10%", left: "-200px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.06), transparent 70%)", pointerEvents: "none" }} />

            {/* Stars */}
            {[...Array(25)].map((_, i) => (
                <div key={i} style={{ position: "absolute", width: "2px", height: "2px", borderRadius: "50%", background: "rgba(255,255,255,0.35)", top: `${(i * 29 + 8) % 90}%`, left: `${(i * 23 + 4) % 96}%`, animation: `twinkle ${2 + i % 3}s ease-in-out infinite alternate`, animationDelay: `${(i * 0.35) % 2.5}s`, pointerEvents: "none" }} />
            ))}

            <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>

                {/* HEADER */}
                <div style={{ animation: "floatUp 0.7s ease both" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(129,140,248,0.08)", border: "1px solid rgba(129,140,248,0.2)", borderRadius: "100px", padding: "5px 14px", fontSize: "0.75rem", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#818cf8", marginBottom: "20px" }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#818cf8", display: "inline-block" }} />
                        Portfolio
                    </div>

                    <h1 style={{
                        fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
                        fontWeight: "800",
                        letterSpacing: "-0.04em",
                        color: "#f0f9ff",
                        lineHeight: "1.05",
                        margin: 0,
                    }}>
                        My{" "}
                        <span style={{
                            background: "linear-gradient(120deg, #e0f2fe 0%, #38bdf8 40%, #818cf8 80%)",
                            backgroundSize: "200% auto",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            animation: "shimmer 4s linear infinite",
                        }}>
                            Projects
                        </span>
                    </h1>

                    <p style={{ marginTop: "24px", maxWidth: "620px", color: "rgba(186,230,253,0.55)", fontSize: "1rem", lineHeight: "1.85", fontWeight: "400", animation: "floatUp 0.7s 0.15s ease both" }}>
                        A collection of work spanning full stack development, cloud solutions, responsive UI, and modern user experiences.
                    </p>
                </div>

                {/* GRID */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                    gap: "28px",
                    marginTop: "72px",
                }}>
                    {projects.map((project, i) => {
                        const t = tilts[i] || {};
                        const active = t.active;
                        return (
                            <div key={project.name} className="tilt-wrapper">
                                <div
                                    className={`project-card${active ? '' : ' reset'}`}
                                    onMouseMove={(e) => handleMouseMove(e, i)}
                                    onMouseLeave={() => handleMouseLeave(i)}
                                    style={{
                                        position: "relative",
                                        padding: "32px",
                                        borderRadius: "28px",
                                        background: "rgba(255,255,255,0.04)",
                                        backdropFilter: "blur(24px)",
                                        WebkitBackdropFilter: "blur(24px)",
                                        border: `1px solid ${active ? 'rgba(56,189,248,0.25)' : 'rgba(255,255,255,0.07)'}`,
                                        boxShadow: active
                                            ? `0 ${20 + Math.abs(t.rotateX || 0)}px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(56,189,248,0.1)`
                                            : "0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                                        animation: `floatUp 0.5s ${0.08 * i}s ease both`,
                                        overflow: "hidden",
                                        transform: active
                                            ? `rotateX(${t.rotateX}deg) rotateY(${t.rotateY}deg) translateZ(10px)`
                                            : 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
                                    }}
                                >
                                    {/* Top edge glow */}
                                    <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.35), transparent)", opacity: active ? 1 : 0.4, transition: "opacity 0.3s ease" }} />

                                    {/* Dynamic mouse-follow glow */}
                                    <div style={{
                                        position: "absolute", inset: 0,
                                        background: `radial-gradient(circle at ${t.glowX || 50}% ${t.glowY || 50}%, rgba(56,189,248,0.08), transparent 55%)`,
                                        opacity: active ? 1 : 0,
                                        transition: active ? "opacity 0.2s ease" : "opacity 0.5s ease",
                                        pointerEvents: "none",
                                    }} />

                                    {/* Icon */}
                                    <div style={{
                                        width: "58px", height: "58px",
                                        borderRadius: "18px",
                                        display: "flex", justifyContent: "center", alignItems: "center",
                                        background: "linear-gradient(135deg, #0ea5e9, #6366f1)",
                                        boxShadow: "0 8px 24px rgba(14,165,233,0.3)",
                                        position: "relative",
                                    }}>
                                        <img src={project.iconUrl} alt="project icon" style={{ width: "26px", height: "26px", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
                                    </div>

                                    {/* Content */}
                                    <div style={{ marginTop: "24px", position: "relative" }}>
                                        <h3 style={{ fontSize: "1.35rem", fontWeight: "700", color: "#f0f9ff", letterSpacing: "-0.02em", margin: 0 }}>
                                            {project.name}
                                        </h3>
                                        <p style={{ marginTop: "12px", color: "rgba(186,230,253,0.55)", lineHeight: "1.8", fontSize: "0.91rem", fontWeight: "400" }}>
                                            {project.description}
                                        </p>
                                        <div style={{ marginTop: "24px" }}>
                                            <Link to={project.link} target="_blank" rel="noopener noreferrer" className="view-btn">
                                                View Project
                                                <img src={arrow} alt="arrow" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Divider */}
                <div style={{ marginTop: "100px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.2), rgba(129,140,248,0.2), transparent)" }} />

                <div style={{ marginTop: "80px" }}>
                    <CTA />
                </div>
            </div>
        </section>
    );
};

export default Projects;