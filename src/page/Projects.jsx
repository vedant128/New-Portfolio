import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
    return (
        <section
            style={{
                width: "100%",
                minHeight: "100vh",
                padding: "80px 24px",
                background:
                    "linear-gradient(to bottom, #eff6ff, #ffffff)",
            }}
        >
            {/* HEADER */}
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                <h1
                    style={{
                        fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                        fontWeight: "800",
                        letterSpacing: "-0.05em",
                        color: "#0f172a",
                        lineHeight: "1",
                        fontFamily:
                            "Inter, SF Pro Display, system-ui, sans-serif",
                    }}
                >
                    My{" "}
                    <span
                        style={{
                            background:
                                "linear-gradient(90deg, #2563eb, #38bdf8)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Projects
                    </span>
                </h1>

                <p
                    style={{
                        marginTop: "22px",
                        maxWidth: "750px",
                        color: "#64748b",
                        fontSize: "1.05rem",
                        lineHeight: "1.9",
                        fontWeight: "500",
                    }}
                >
                    A collection of projects focused on full stack
                    development, cloud solutions, responsive UI, and
                    modern user experiences.
                </p>

                {/* PROJECTS GRID */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "32px",
                        marginTop: "70px",
                    }}
                >
                    {projects.map((project) => (
                        <div
                            key={project.name}
                            style={{
                                position: "relative",

                                padding: "28px",

                                borderRadius: "30px",

                                background:
                                    "rgba(255,255,255,0.18)",

                                backdropFilter: "blur(18px)",
                                WebkitBackdropFilter: "blur(18px)",

                                border:
                                    "1px solid rgba(255,255,255,0.24)",

                                boxShadow:
                                    "0 10px 40px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.16)",

                                transition: "all 0.3s ease",
                            }}
                        >
                            {/* ICON */}
                            <div
                                style={{
                                    width: "62px",
                                    height: "62px",

                                    borderRadius: "20px",

                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",

                                    background:
                                        "linear-gradient(135deg, #38bdf8, #2563eb)",

                                    boxShadow:
                                        "0 8px 24px rgba(37,99,235,0.28)",
                                }}
                            >
                                <img
                                    src={project.iconUrl}
                                    alt='project icon'
                                    style={{
                                        width: "28px",
                                        height: "28px",
                                        objectFit: "contain",
                                        filter: "brightness(0) invert(1)",
                                    }}
                                />
                            </div>

                            {/* CONTENT */}
                            <div
                                style={{
                                    marginTop: "24px",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: "1.6rem",
                                        fontWeight: "700",
                                        color: "#0f172a",
                                        letterSpacing: "-0.03em",
                                        fontFamily:
                                            "Inter, SF Pro Display, system-ui, sans-serif",
                                    }}
                                >
                                    {project.name}
                                </h3>

                                <p
                                    style={{
                                        marginTop: "14px",
                                        color: "#64748b",
                                        lineHeight: "1.8",
                                        fontSize: "0.97rem",
                                        fontWeight: "500",
                                    }}
                                >
                                    {project.description}
                                </p>

                                {/* BUTTON */}
                                <div
                                    style={{
                                        marginTop: "26px",
                                    }}
                                >
                                    <Link
                                        to={project.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "10px",

                                            padding: "12px 18px",

                                            borderRadius: "14px",

                                            textDecoration: "none",

                                            background:
                                                "linear-gradient(135deg, #2563eb, #38bdf8)",

                                            color: "white",

                                            fontWeight: "700",

                                            fontSize: "0.95rem",

                                            boxShadow:
                                                "0 8px 20px rgba(37,99,235,0.25)",
                                        }}
                                    >
                                        View Project

                                        <img
                                            src={arrow}
                                            alt='arrow'
                                            style={{
                                                width: "14px",
                                                height: "14px",
                                                objectFit: "contain",
                                                filter:
                                                    "brightness(0) invert(1)",
                                            }}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* DIVIDER */}
                <hr
                    style={{
                        marginTop: "80px",
                        border: "none",
                        borderTop: "1px solid #cbd5e1",
                    }}
                />

                <div style={{ marginTop: "70px" }}>
                    <CTA />
                </div>
            </div>
        </section>
    );
};

export default Projects;