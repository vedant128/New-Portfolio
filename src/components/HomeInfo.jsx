import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'

const glassCard = {
    background: 'rgba(255, 255, 255, 0.14)',

    backdropFilter: 'blur(40px) saturate(180%)',
    WebkitBackdropFilter: 'blur(40px) saturate(180%)',

    border: '1px solid rgba(255, 255, 255, 0.18)',

    borderRadius: '32px',

    boxShadow: `
        0 8px 32px rgba(0, 0, 0, 0.12),
        inset 0 1px 1px rgba(255,255,255,0.35),
        inset 0 -1px 1px rgba(255,255,255,0.08)
    `,

    padding: '28px 36px',
    maxWidth: '480px',
    width: '100%',

    fontFamily: "'Sora', system-ui, sans-serif",

    position: 'relative',
    overflow: 'hidden',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundImage: `
        linear-gradient(
            to bottom right,
            rgba(255,255,255,0.12),
            rgba(255,255,255,0.03)
        )
    `,
}

const topAccent = {
    position: 'absolute',
    top: 0,
    left: '15%',
    right: '15%',
    height: '1px',
    background:
        'linear-gradient(90deg, transparent, rgba(56,189,248,0.5), transparent)',
}

const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',

    padding: '12px 22px',
    borderRadius: '14px',

    textDecoration: 'none',

    background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',

    color: '#ffffff',

    fontWeight: '700',
    fontSize: '0.92rem',

    letterSpacing: '0.03em',

    boxShadow: '0 8px 24px rgba(14,165,233,0.35)',

    transition: 'all 0.25s ease',

    fontFamily: "'Sora', system-ui, sans-serif",
}

const InfoBox = ({ text, link, btnText }) => (
    <div style={glassCard}>
        <div style={topAccent} />

        <p
            style={{
                color: 'rgba(15,23,42,0.88)',

                fontSize: '1.05rem',
                lineHeight: '1.9',
                fontWeight: '600',

                margin: '0 auto 26px auto',

                maxWidth: '380px',

                textAlign: 'center',

                letterSpacing: '0.015em',

                fontFamily: "'Sora', system-ui, sans-serif",
            }}
        >
            {text}
        </p>

        <Link to={link} style={buttonStyle}>
            {btnText}

            <img
                src={arrow}
                alt="arrow"
                style={{
                    width: '14px',
                    height: '14px',
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
                }}
            />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <div
            style={{
                ...glassCard,
                textAlign: 'center',
                padding: '32px 44px',
            }}
        >
            <div style={topAccent} />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');

                @keyframes shimmer {
                    0% {
                        background-position: -200% center;
                    }
                    100% {
                        background-position: 200% center;
                    }
                }

                @keyframes wave {
                    0%, 100% {
                        transform: rotate(0deg);
                    }
                    25% {
                        transform: rotate(20deg);
                    }
                    75% {
                        transform: rotate(-10deg);
                    }
                }

                @keyframes fadeSlideUp {
                    from {
                        opacity: 0;
                        transform: translateY(16px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>

            <div
                style={{
                    fontSize: 'clamp(1.9rem, 5vw, 2.8rem)',
                    fontWeight: '800',
                    letterSpacing: '-0.03em',

                    lineHeight: '1.1',

                    color: '#0f172a',

                    fontFamily: "'Sora', system-ui, sans-serif",

                    animation: 'fadeSlideUp 0.6s ease both',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    flexWrap: 'wrap',

                    gap: '0 10px',
                }}
            >
                <span>Hi, I'm</span>

                <span
                    style={{
                        background:
                            'linear-gradient(120deg, #0ea5e9 0%, #38bdf8 40%, #6366f1 80%)',

                        backgroundSize: '200% auto',

                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',

                        animation: 'shimmer 3s linear infinite',
                    }}
                >
                    Vedant
                </span>

                <span
                    style={{
                        display: 'inline-block',
                        animation: 'wave 1.8s ease-in-out infinite',

                        transformOrigin: '70% 80%',
                    }}
                >
                    👋
                </span>
            </div>

            <div
                style={{
                    marginTop: '14px',

                    color: 'rgba(15,23,42,0.65)',

                    fontSize: '0.95rem',

                    fontWeight: '600',

                    letterSpacing: '0.08em',

                    textTransform: 'uppercase',

                    fontFamily: "'Sora', system-ui, sans-serif",

                    animation:
                        'fadeSlideUp 0.6s 0.15s ease both',
                }}
            >
                Full Stack Developer
            </div>
        </div>
    ),

    2: (
        <InfoBox
            text="Full Stack Developer passionate about building scalable web applications and cloud-based solutions."
            link="/about"
            btnText="Learn More"
        />
    ),

    3: (
        <InfoBox
            text="I've worked on a variety of projects, from simple websites to complex web applications."
            link="/projects"
            btnText="Visit Projects"
        />
    ),

    4: (
        <InfoBox
            text="Interested in working together? Let's connect!"
            link="/contact"
            btnText="Let's Talk"
        />
    ),
}

const HomeInfo = ({ currentStage }) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            padding: '0 16px',
        }}
    >
        {renderContent[currentStage] || null}
    </div>
)

export default HomeInfo