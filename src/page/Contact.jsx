import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import { Fox } from "../models/Fox";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import Loader from "../components/Loader";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState("idle");
    const [focused, setFocused] = useState(null);

    const handleChange = ({ target: { name, value } }) => setForm({ ...form, [name]: value });
    const handleFocus = (field) => { setFocused(field); setCurrentAnimation("walk"); };
    const handleBlur = () => { setFocused(null); setCurrentAnimation("idle"); };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setCurrentAnimation("hit");
        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            { from_name: form.name, to_name: "Vedant Satish Gunjal", from_email: form.email, to_email: "vedantgunjal2005@gmail.com", message: form.message },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setLoading(false);
            showAlert({ show: true, text: "Message sent successfully 😃", type: "success" });
            setTimeout(() => { hideAlert(false); setCurrentAnimation("idle"); setForm({ name: "", email: "", message: "" }); }, 3000);
        }, (error) => {
            setLoading(false);
            console.error(error);
            setCurrentAnimation("idle");
            showAlert({ show: true, text: "Something went wrong 😢", type: "danger" });
        });
    };

    const inputStyle = (field) => ({
        width: "100%",
        marginTop: "10px",
        padding: "14px 18px",
        borderRadius: "14px",
        border: focused === field
            ? "1px solid rgba(56,189,248,0.5)"
            : "1px solid rgba(255,255,255,0.08)",
        background: focused === field
            ? "rgba(56,189,248,0.05)"
            : "rgba(255,255,255,0.04)",
        outline: "none",
        fontSize: "0.93rem",
        color: "#e0f2fe",
        boxShadow: focused === field
            ? "0 0 0 3px rgba(56,189,248,0.1), 0 4px 16px rgba(0,0,0,0.2)"
            : "0 2px 8px rgba(0,0,0,0.15)",
        transition: "all 0.25s ease",
        fontFamily: "'Sora', system-ui, sans-serif",
    });

    return (
        <section style={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: window.innerWidth < 1024 ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "100px 24px 80px",
            gap: "48px",
            background: "linear-gradient(160deg, #060d1f 0%, #0a1628 50%, #0d1f3c 100%)",
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
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes twinkle {
                    from { opacity: 0.15; } to { opacity: 0.6; }
                }

                .submit-btn {
                    width: 100%;
                    padding: 15px;
                    border: none;
                    border-radius: 14px;
                    background: linear-gradient(135deg, #0ea5e9, #6366f1);
                    color: white;
                    font-size: 0.95rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 8px 28px rgba(14,165,233,0.3);
                    letter-spacing: 0.03em;
                    font-family: 'Sora', system-ui, sans-serif;
                    position: relative;
                    overflow: hidden;
                }
                .submit-btn::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .submit-btn:hover:not(:disabled)::before { opacity: 1; }
                .submit-btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 14px 36px rgba(14,165,233,0.4);
                }
                .submit-btn:active:not(:disabled) { transform: translateY(0); }
                .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

                textarea { resize: none; }
                input::placeholder, textarea::placeholder { color: rgba(186,230,253,0.25); }
            `}</style>

            {/* Ambient glows */}
            <div style={{ position: "absolute", top: "-100px", left: "-200px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.07), transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-100px", right: "-200px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.07), transparent 70%)", pointerEvents: "none" }} />

            {/* Stars */}
            {[...Array(20)].map((_, i) => (
                <div key={i} style={{ position: "absolute", width: "2px", height: "2px", borderRadius: "50%", background: "rgba(255,255,255,0.4)", top: `${(i * 31 + 10) % 90}%`, left: `${(i * 19 + 5) % 95}%`, animation: `twinkle ${2 + i % 3}s ease-in-out infinite alternate`, animationDelay: `${(i * 0.3) % 2.5}s`, pointerEvents: "none" }} />
            ))}

            {alert.show && <Alert {...alert} />}

            {/* FORM */}
            <div style={{
                width: "100%",
                maxWidth: "500px",
                padding: "40px 36px",
                borderRadius: "32px",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
                animation: "floatUp 0.7s ease both",
                position: "relative",
            }}>
                {/* top accent */}
                <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.5), transparent)" }} />

                <div style={{ marginBottom: "32px" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)", borderRadius: "100px", padding: "5px 14px", fontSize: "0.75rem", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#38bdf8", marginBottom: "16px" }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#38bdf8", display: "inline-block" }} />
                        Contact
                    </div>
                    <h1 style={{
                        fontSize: "clamp(2rem, 4vw, 2.8rem)",
                        fontWeight: "800",
                        letterSpacing: "-0.04em",
                        background: "linear-gradient(120deg, #e0f2fe 0%, #38bdf8 50%, #818cf8 100%)",
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        animation: "shimmer 4s linear infinite",
                        margin: 0,
                    }}>
                        Get in Touch
                    </h1>
                    <p style={{ color: "rgba(186,230,253,0.45)", fontSize: "0.88rem", marginTop: "10px", lineHeight: "1.6" }}>
                        Drop me a message — I'll get back to you soon.
                    </p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    {[
                        { id: "name", label: "Name", type: "text", placeholder: "Vedant" },
                        { id: "email", label: "Email", type: "email", placeholder: "vedant@gmail.com" },
                    ].map(({ id, label, type, placeholder }) => (
                        <label key={id} style={{ marginBottom: "18px", fontWeight: "600", color: "rgba(186,230,253,0.6)", fontSize: "0.82rem", letterSpacing: "0.06em", textTransform: "uppercase", display: "block" }}>
                            {label}
                            <input
                                type={type}
                                name={id}
                                placeholder={placeholder}
                                required
                                value={form[id]}
                                onChange={handleChange}
                                onFocus={() => handleFocus(id)}
                                onBlur={handleBlur}
                                style={inputStyle(id)}
                            />
                        </label>
                    ))}

                    <label style={{ marginBottom: "26px", fontWeight: "600", color: "rgba(186,230,253,0.6)", fontSize: "0.82rem", letterSpacing: "0.06em", textTransform: "uppercase", display: "block" }}>
                        Message
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Write your message here..."
                            value={form.message}
                            onChange={handleChange}
                            onFocus={() => handleFocus("message")}
                            onBlur={handleBlur}
                            style={{ ...inputStyle("message"), minHeight: "130px" }}
                        />
                    </label>

                    <button type="submit" disabled={loading} className="submit-btn" onFocus={() => handleFocus("btn")} onBlur={handleBlur}>
                        {loading ? "Sending..." : "Send Message →"}
                    </button>
                </form>
            </div>

            {/* FOX MODEL */}
            <div style={{
                width: "100%",
                maxWidth: "520px",
                height: window.innerWidth < 768 ? "300px" : "480px",
                animation: "floatUp 0.7s 0.2s ease both",
            }}>
                <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
                    <directionalLight position={[0, 0, 1]} intensity={2.5} />
                    <ambientLight intensity={0.8} />
                    <pointLight position={[5, 10, 0]} intensity={2} color="#38bdf8" />
                    <pointLight position={[-5, -5, 0]} intensity={0.5} color="#818cf8" />
                    <Suspense fallback={<Loader />}>
                        <Fox
                            currentAnimation={currentAnimation}
                            position={[0.5, 0.35, 0]}
                            rotation={[12.629, -0.6, 0]}
                            scale={[0.5, 0.5, 0.5]}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Contact;