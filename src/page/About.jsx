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
                padding: "80px 24px",
                background:
                    "linear-gradient(to bottom, #eff6ff, #ffffff)",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                {/* HERO */}
                <h1
                    style={{
                        fontSize: "clamp(2.7rem, 5vw, 5rem)",
                        fontWeight: "800",
                        letterSpacing: "-0.05em",
                        color: "#0f172a",
                        lineHeight: "1.1",
                        fontFamily:
                            "Inter, SF Pro Display, system-ui, sans-serif",
                    }}
                >
                    Hello, I'm{" "}

                    <span
                        style={{
                            background:
                                "linear-gradient(90deg, #2563eb, #38bdf8)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Vedant
                    </span>{" "}
                    👋
                </h1>

                <div
                    style={{
                        marginTop: "26px",
                        maxWidth: "760px",
                    }}
                >
                    <p
                        style={{
                            color: "#64748b",
                            lineHeight: "1.9",
                            fontSize: "1.08rem",
                            fontWeight: "500",
                        }}
                    >
                        Full Stack Developer passionate about building
                        scalable web applications, cloud-based
                        solutions, and modern user experiences using
                        React, Node.js, MongoDB, Java, and Three.js.
                    </p>
                </div>

                {/* SKILLS */}
                <div
                    style={{
                        paddingTop: "80px",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: "700",
                            color: "#0f172a",
                            letterSpacing: "-0.03em",
                            fontFamily:
                                "Inter, SF Pro Display, system-ui, sans-serif",
                        }}
                    >
                        My Skills
                    </h2>

                    <div
                        style={{
                            marginTop: "50px",

                            display: "flex",
                            flexWrap: "wrap",

                            gap: "28px",
                        }}
                    >
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                style={{
                                    width: "92px",
                                    height: "92px",

                                    borderRadius: "24px",

                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",

                                    background:
                                        "rgba(255,255,255,0.22)",

                                    backdropFilter: "blur(18px)",

                                    border:
                                        "1px solid rgba(255,255,255,0.22)",

                                    boxShadow:
                                        "0 8px 24px rgba(0,0,0,0.06)",

                                    transition: "all 0.3s ease",
                                }}
                            >
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    style={{
                                        width: "42px",
                                        height: "42px",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* EXPERIENCE */}
                <div
                    style={{
                        paddingTop: "100px",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: "700",
                            color: "#0f172a",
                            letterSpacing: "-0.03em",
                            fontFamily:
                                "Inter, SF Pro Display, system-ui, sans-serif",
                        }}
                    >
                        Experience & Journey
                    </h2>

                    <p
                        style={{
                            marginTop: "18px",
                            color: "#64748b",
                            lineHeight: "1.8",
                            maxWidth: "720px",
                            fontSize: "1rem",
                            fontWeight: "500",
                        }}
                    >
                        Continuously learning and building projects in
                        full stack development, cloud technologies, DSA,
                        and modern frontend experiences.
                    </p>

                    <div
                        style={{
                            marginTop: "70px",
                        }}
                    >
                        <VerticalTimeline>
                            {experiences.map((experience) => (
                                <VerticalTimelineElement
                                    key={experience.company_name}
                                    date={experience.date}
                                    iconStyle={{
                                        background:
                                            "linear-gradient(135deg, #38bdf8, #2563eb)",
                                        boxShadow:
                                            "0 8px 20px rgba(37,99,235,0.3)",
                                    }}
                                    icon={
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        >
                                            <img
                                                src={experience.icon}
                                                alt={
                                                    experience.company_name
                                                }
                                                style={{
                                                    width: "60%",
                                                    height: "60%",
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </div>
                                    }
                                    contentStyle={{
                                        background:
                                            "rgba(255,255,255,0.18)",

                                        backdropFilter: "blur(18px)",

                                        border:
                                            "1px solid rgba(255,255,255,0.22)",

                                        borderRadius: "24px",

                                        boxShadow:
                                            "0 10px 30px rgba(0,0,0,0.06)",

                                        padding: "28px",
                                    }}
                                    contentArrowStyle={{
                                        borderRight:
                                            "7px solid rgba(255,255,255,0.18)",
                                    }}
                                >
                                    <div>
                                        <h3
                                            style={{
                                                color: "#0f172a",
                                                fontSize: "1.35rem",
                                                fontWeight: "700",
                                                fontFamily:
                                                    "Inter, SF Pro Display, system-ui, sans-serif",
                                            }}
                                        >
                                            {experience.title}
                                        </h3>

                                        <p
                                            style={{
                                                color: "#2563eb",
                                                fontWeight: "600",
                                                fontSize: "1rem",
                                                marginTop: "4px",
                                            }}
                                        >
                                            {experience.company_name}
                                        </p>
                                    </div>

                                    <ul
                                        style={{
                                            marginTop: "18px",
                                            paddingLeft: "18px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px",
                                        }}
                                    >
                                        {experience.points.map(
                                            (point, index) => (
                                                <li
                                                    key={index}
                                                    style={{
                                                        color: "#64748b",
                                                        lineHeight: "1.8",
                                                        fontSize: "0.96rem",
                                                        fontWeight: "500",
                                                    }}
                                                >
                                                    {point}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </div>
                </div>

                {/* EDUCATION */}
                <div
                    style={{
                        paddingTop: "100px",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: "700",
                            color: "#0f172a",
                            letterSpacing: "-0.03em",
                            fontFamily:
                                "Inter, SF Pro Display, system-ui, sans-serif",
                        }}
                    >
                        Education
                    </h2>

                    <p
                        style={{
                            marginTop: "18px",
                            color: "#64748b",
                            lineHeight: "1.8",
                            maxWidth: "720px",
                            fontSize: "1rem",
                            fontWeight: "500",
                        }}
                    >
                        My academic background and foundations in computer
                        science and engineering.
                    </p>

                    <div
                        style={{
                            marginTop: "70px",
                        }}
                    >
                        <VerticalTimeline>
                            {education.map((edu) => (
                                <VerticalTimelineElement
                                    key={edu.company_name}
                                    date={edu.date}
                                    iconStyle={{
                                        background:
                                            "linear-gradient(135deg, #2563eb, #38bdf8)",
                                        boxShadow:
                                            "0 8px 20px rgba(37,99,235,0.3)",
                                    }}
                                    icon={
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        >
                                            <img
                                                src={edu.icon}
                                                alt={edu.company_name}
                                                style={{
                                                    width: "60%",
                                                    height: "60%",
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </div>
                                    }
                                    contentStyle={{
                                        background:
                                            "rgba(255,255,255,0.18)",

                                        backdropFilter: "blur(18px)",

                                        border:
                                            "1px solid rgba(255,255,255,0.22)",

                                        borderRadius: "24px",

                                        boxShadow:
                                            "0 10px 30px rgba(0,0,0,0.06)",

                                        padding: "28px",
                                    }}
                                    contentArrowStyle={{
                                        borderRight:
                                            "7px solid rgba(255,255,255,0.18)",
                                    }}
                                >
                                    <div>
                                        <h3
                                            style={{
                                                color: "#0f172a",
                                                fontSize: "1.35rem",
                                                fontWeight: "700",
                                                fontFamily:
                                                    "Inter, SF Pro Display, system-ui, sans-serif",
                                            }}
                                        >
                                            {edu.title}
                                        </h3>

                                        <p
                                            style={{
                                                color: "#2563eb",
                                                fontWeight: "600",
                                                fontSize: "1rem",
                                                marginTop: "4px",
                                            }}
                                        >
                                            {edu.company_name}
                                        </p>
                                    </div>

                                    <ul
                                        style={{
                                            marginTop: "18px",
                                            paddingLeft: "18px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px",
                                        }}
                                    >
                                        {edu.points.map((point, index) => (
                                            <li
                                                key={index}
                                                style={{
                                                    color: "#64748b",
                                                    lineHeight: "1.8",
                                                    fontSize: "0.96rem",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </div>
                </div>

                {/* DIVIDER */}
                <hr
                    style={{
                        marginTop: "80px",
                        border: "none",
                        borderTop: "1px solid #cbd5e1",
                    }}
                />

                {/* CTA */}
                <div
                    style={{
                        marginTop: "70px",
                    }}
                >
                    <CTA />
                </div>
            </div>
        </section>
    );
};

export default About;