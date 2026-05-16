import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills, education } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
    return (
        <section
            style={{
                width: "100%",
                minHeight: "100vh",
                padding: "100px 24px 120px",
                background: "linear-gradient(160deg, #060d1f 0%, #0a1628 40%, #0d1f3c 70%, #091428 100%)",
                position: "relative",
                overflow: "hidden",
                fontFamily: "'Sora', 'DM Sans', system-ui, sans-serif",
            }}
        >
            {/* Ambient orbs */}
            <div style={{
                position: "absolute", top: "-200px", left: "-200px",
                width: "700px", height: "700px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", top: "30%", right: "-300px",
                width: "800px", height: "800px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", bottom: "10%", left: "20%",
                width: "500px", height: "500px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            {/* Star dots */}
            {[...Array(30)].map((_, i) => (
                <div key={i} style={{
                    position: "absolute",
                    width: i % 5 === 0 ? "3px" : "2px",
                    height: i % 5 === 0 ? "3px" : "2px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.4)",
                    top: `${Math.sin(i * 137.5) * 50 + 50}%`,
                    left: `${Math.cos(i * 137.5) * 50 + 50}%`,
                    animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite alternate`,
                    animationDelay: `${(i * 0.3) % 3}s`,
                    pointerEvents: "none",
                }} />
            ))}

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

                @keyframes twinkle {
                    from { opacity: 0.2; transform: scale(0.8); }
                    to { opacity: 1; transform: scale(1.2); }
                }
                @keyframes floatUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                @keyframes pulse-ring {
                    0% { transform: scale(1); opacity: 0.6; }
                    100% { transform: scale(1.5); opacity: 0; }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .skill-card {
                    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
                    cursor: default;
                }
                .skill-card:hover {
                    transform: translateY(-8px) scale(1.08) !important;
                    box-shadow: 0 20px 50px rgba(56,189,248,0.25) !important;
                }
                .skill-card:hover .skill-glow {
                    opacity: 1 !important;
                }

                .vertical-timeline::before {
                    background: linear-gradient(to bottom, transparent, rgba(56,189,248,0.3), rgba(99,102,241,0.3), transparent) !important;
                    width: 2px !important;
                }
                .vertical-timeline-element-content {
                    box-shadow: none !important;
                }

                .section-label {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(56,189,248,0.08);
                    border: 1px solid rgba(56,189,248,0.2);
                    border-radius: 100px;
                    padding: 6px 16px;
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #38bdf8;
                    margin-bottom: 20px;
                    animation: floatUp 0.6s ease both;
                }

                .gradient-text {
                    background: linear-gradient(120deg, #e0f2fe 0%, #38bdf8 40%, #818cf8 80%);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: shimmer 4s linear infinite;
                }

                .glass-card {
                    background: rgba(255,255,255,0.04);
                    backdrop-filter: blur(24px);
                    -webkit-backdrop-filter: blur(24px);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 28px;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06);
                    transition: border-color 0.3s ease, box-shadow 0.3s ease;
                }
                .glass-card:hover {
                    border-color: rgba(56,189,248,0.2);
                    box-shadow: 0 12px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(56,189,248,0.08), inset 0 1px 0 rgba(255,255,255,0.08);
                }
            `}</style>

            <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>

                {/* ── HERO ── */}
                <div style={{ animation: "floatUp 0.8s ease both" }}>
                    <div className="section-label">
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#38bdf8", display: "inline-block" }} />
                        About Me
                    </div>
                    <h1 style={{
                        fontSize: "clamp(3rem, 6vw, 5.5rem)",
                        fontWeight: "800",
                        letterSpacing: "-0.04em",
                        lineHeight: "1.05",
                        color: "#f0f9ff",
                        margin: 0,
                    }}>
                        Hello, I'm{" "}
                        <span className="gradient-text">Vedant</span>{" "}
                        <span style={{ display: "inline-block", animation: "floatUp 0.6s 0.4s ease both, twinkle 2s 1s ease-in-out infinite alternate" }}>👋</span>
                    </h1>

                    <p style={{
                        marginTop: "28px",
                        maxWidth: "680px",
                        color: "rgba(186,230,253,0.7)",
                        lineHeight: "1.85",
                        fontSize: "1.08rem",
                        fontWeight: "400",
                        animation: "floatUp 0.8s 0.2s ease both",
                        letterSpacing: "0.01em",
                    }}>
                        Full Stack Developer passionate about building scalable web applications,
                        cloud-based solutions, and modern user experiences using{" "}
                        <span style={{ color: "#7dd3fc", fontWeight: "500" }}>React</span>,{" "}
                        <span style={{ color: "#7dd3fc", fontWeight: "500" }}>Node.js</span>,{" "}
                        <span style={{ color: "#7dd3fc", fontWeight: "500" }}>MongoDB</span>,{" "}
                        <span style={{ color: "#7dd3fc", fontWeight: "500" }}>Java</span>, and{" "}
                        <span style={{ color: "#7dd3fc", fontWeight: "500" }}>Three.js</span>.
                    </p>
                </div>

                {/* ── SKILLS ── */}
                <div style={{ paddingTop: "110px" }}>
                    <div className="section-label" style={{ animationDelay: "0.1s" }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#818cf8", display: "inline-block" }} />
                        Tech Stack
                    </div>
                    <h2 style={{
                        fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                        fontWeight: "700",
                        color: "#f0f9ff",
                        letterSpacing: "-0.03em",
                        margin: "0 0 16px",
                    }}>
                        My Skills
                    </h2>
                    <p style={{
                        color: "rgba(186,230,253,0.55)",
                        fontSize: "0.98rem",
                        fontWeight: "400",
                        margin: "0 0 56px",
                        maxWidth: "480px",
                        lineHeight: "1.7",
                    }}>
                        Technologies I work with to craft seamless, performant experiences.
                    </p>

                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "20px",
                    }}>
                        {skills.map((skill, i) => (
                            <div
                                key={skill.name}
                                className="skill-card"
                                title={skill.name}
                                style={{
                                    width: "90px",
                                    height: "90px",
                                    borderRadius: "22px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "8px",
                                    background: "rgba(255,255,255,0.04)",
                                    backdropFilter: "blur(16px)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)",
                                    position: "relative",
                                    overflow: "hidden",
                                    animation: `floatUp 0.5s ${0.05 * i}s ease both`,
                                }}
                            >
                                {/* glow on hover */}
                                <div className="skill-glow" style={{
                                    position: "absolute", inset: 0,
                                    background: "radial-gradient(circle at center, rgba(56,189,248,0.12), transparent 70%)",
                                    opacity: 0,
                                    transition: "opacity 0.3s ease",
                                    pointerEvents: "none",
                                }} />
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    style={{ width: "38px", height: "38px", objectFit: "contain", position: "relative" }}
                                />
                                <span style={{
                                    fontSize: "0.6rem",
                                    color: "rgba(186,230,253,0.5)",
                                    fontWeight: "600",
                                    letterSpacing: "0.05em",
                                    textAlign: "center",
                                    lineHeight: 1,
                                    position: "relative",
                                    maxWidth: "80px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}>
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── EXPERIENCE ── */}
                <div style={{ paddingTop: "120px" }}>
                    <div className="section-label">
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#34d399", display: "inline-block" }} />
                        Career
                    </div>
                    <h2 style={{
                        fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                        fontWeight: "700",
                        color: "#f0f9ff",
                        letterSpacing: "-0.03em",
                        margin: "0 0 16px",
                    }}>
                        Experience & Journey
                    </h2>
                    <p style={{
                        color: "rgba(186,230,253,0.55)",
                        fontSize: "0.98rem",
                        fontWeight: "400",
                        margin: "0 0 64px",
                        maxWidth: "560px",
                        lineHeight: "1.7",
                    }}>
                        Continuously learning and building in full stack, cloud, DSA, and modern frontend.
                    </p>

                    <VerticalTimeline lineColor="rgba(56,189,248,0.15)">
                        {experiences.map((experience, i) => (
                            <VerticalTimelineElement
                                key={experience.company_name}
                                date={
                                    <span style={{
                                        color: "rgba(186,230,253,0.6)",
                                        fontSize: "0.85rem",
                                        fontWeight: "500",
                                        letterSpacing: "0.05em",
                                        background: "rgba(56,189,248,0.08)",
                                        border: "1px solid rgba(56,189,248,0.15)",
                                        borderRadius: "100px",
                                        padding: "4px 14px",
                                    }}>{experience.date}</span>
                                }
                                iconStyle={{
                                    background: "linear-gradient(135deg, #0ea5e9, #6366f1)",
                                    boxShadow: "0 0 0 4px rgba(14,165,233,0.15), 0 8px 24px rgba(14,165,233,0.3)",
                                }}
                                icon={
                                    <div style={{
                                        display: "flex", justifyContent: "center",
                                        alignItems: "center", width: "100%", height: "100%",
                                    }}>
                                        <img
                                            src={experience.icon}
                                            alt={experience.company_name}
                                            style={{ width: "58%", height: "58%", objectFit: "contain" }}
                                        />
                                    </div>
                                }
                                contentStyle={{
                                    background: "rgba(255,255,255,0.04)",
                                    backdropFilter: "blur(24px)",
                                    WebkitBackdropFilter: "blur(24px)",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                    borderRadius: "24px",
                                    boxShadow: "0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
                                    padding: "32px 36px",
                                }}
                                contentArrowStyle={{
                                    borderRight: "8px solid rgba(255,255,255,0.07)",
                                }}
                            >
                                {/* Top accent bar */}
                                <div style={{
                                    position: "absolute",
                                    top: 0, left: "10%", right: "10%",
                                    height: "1px",
                                    background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.4), transparent)",
                                    borderRadius: "1px",
                                }} />

                                <div>
                                    <h3 style={{
                                        color: "#f0f9ff",
                                        fontSize: "1.25rem",
                                        fontWeight: "700",
                                        letterSpacing: "-0.02em",
                                        margin: 0,
                                    }}>
                                        {experience.title}
                                    </h3>
                                    <p style={{
                                        color: "#38bdf8",
                                        fontWeight: "600",
                                        fontSize: "0.9rem",
                                        marginTop: "6px",
                                        letterSpacing: "0.02em",
                                    }}>
                                        {experience.company_name}
                                    </p>
                                </div>

                                <ul style={{
                                    marginTop: "20px",
                                    paddingLeft: "0",
                                    listStyle: "none",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                }}>
                                    {experience.points.map((point, idx) => (
                                        <li key={idx} style={{
                                            color: "rgba(186,230,253,0.65)",
                                            lineHeight: "1.75",
                                            fontSize: "0.93rem",
                                            fontWeight: "400",
                                            paddingLeft: "20px",
                                            position: "relative",
                                        }}>
                                            <span style={{
                                                position: "absolute",
                                                left: 0,
                                                top: "10px",
                                                width: "5px",
                                                height: "5px",
                                                borderRadius: "50%",
                                                background: "linear-gradient(135deg, #38bdf8, #818cf8)",
                                                flexShrink: 0,
                                            }} />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>

                {/* ── EDUCATION ── */}
                <div style={{ paddingTop: "120px" }}>
                    <div className="section-label">
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f472b6", display: "inline-block" }} />
                        Education
                    </div>
                    <h2 style={{
                        fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                        fontWeight: "700",
                        color: "#f0f9ff",
                        letterSpacing: "-0.03em",
                        margin: "0 0 16px",
                    }}>
                        Education
                    </h2>
                    <p style={{
                        color: "rgba(186,230,253,0.55)",
                        fontSize: "0.98rem",
                        fontWeight: "400",
                        margin: "0 0 64px",
                        maxWidth: "560px",
                        lineHeight: "1.7",
                    }}>
                        Academic foundations in computer science and engineering.
                    </p>

                    <VerticalTimeline lineColor="rgba(244,114,182,0.15)">
                        {education.map((edu) => (
                            <VerticalTimelineElement
                                key={edu.company_name}
                                date={
                                    <span style={{
                                        color: "rgba(186,230,253,0.6)",
                                        fontSize: "0.85rem",
                                        fontWeight: "500",
                                        letterSpacing: "0.05em",
                                        background: "rgba(244,114,182,0.08)",
                                        border: "1px solid rgba(244,114,182,0.15)",
                                        borderRadius: "100px",
                                        padding: "4px 14px",
                                    }}>{edu.date}</span>
                                }
                                iconStyle={{
                                    background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
                                    boxShadow: "0 0 0 4px rgba(236,72,153,0.15), 0 8px 24px rgba(236,72,153,0.3)",
                                }}
                                icon={
                                    <div style={{
                                        display: "flex", justifyContent: "center",
                                        alignItems: "center", width: "100%", height: "100%",
                                    }}>
                                        <img
                                            src={edu.icon}
                                            alt={edu.company_name}
                                            style={{ width: "58%", height: "58%", objectFit: "contain" }}
                                        />
                                    </div>
                                }
                                contentStyle={{
                                    background: "rgba(255,255,255,0.04)",
                                    backdropFilter: "blur(24px)",
                                    WebkitBackdropFilter: "blur(24px)",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                    borderRadius: "24px",
                                    boxShadow: "0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
                                    padding: "32px 36px",
                                }}
                                contentArrowStyle={{
                                    borderRight: "8px solid rgba(255,255,255,0.07)",
                                }}
                            >
                                <div style={{
                                    position: "absolute",
                                    top: 0, left: "10%", right: "10%",
                                    height: "1px",
                                    background: "linear-gradient(90deg, transparent, rgba(244,114,182,0.4), transparent)",
                                    borderRadius: "1px",
                                }} />

                                <div>
                                    <h3 style={{
                                        color: "#f0f9ff",
                                        fontSize: "1.25rem",
                                        fontWeight: "700",
                                        letterSpacing: "-0.02em",
                                        margin: 0,
                                    }}>
                                        {edu.title}
                                    </h3>
                                    <p style={{
                                        color: "#f472b6",
                                        fontWeight: "600",
                                        fontSize: "0.9rem",
                                        marginTop: "6px",
                                        letterSpacing: "0.02em",
                                    }}>
                                        {edu.company_name}
                                    </p>
                                </div>

                                <ul style={{
                                    marginTop: "20px",
                                    paddingLeft: "0",
                                    listStyle: "none",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                }}>
                                    {edu.points.map((point, idx) => (
                                        <li key={idx} style={{
                                            color: "rgba(186,230,253,0.65)",
                                            lineHeight: "1.75",
                                            fontSize: "0.93rem",
                                            fontWeight: "400",
                                            paddingLeft: "20px",
                                            position: "relative",
                                        }}>
                                            <span style={{
                                                position: "absolute",
                                                left: 0,
                                                top: "10px",
                                                width: "5px",
                                                height: "5px",
                                                borderRadius: "50%",
                                                background: "linear-gradient(135deg, #f472b6, #c084fc)",
                                                flexShrink: 0,
                                            }} />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>

                {/* ── DIVIDER ── */}
                <div style={{
                    marginTop: "100px",
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.2), rgba(129,140,248,0.2), transparent)",
                }} />

                {/* ── CTA ── */}
                <div style={{ marginTop: "80px" }}>
                    <CTA />
                </div>
            </div>
        </section>
    );
};

export default About;