import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import { Fox } from "../models/Fox";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import Loader from "../components/Loader";

const Contact = () => {
    const formRef = useRef();

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const { alert, showAlert, hideAlert } = useAlert();

    const [loading, setLoading] = useState(false);

    const [currentAnimation, setCurrentAnimation] = useState("idle");

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleFocus = () => setCurrentAnimation("walk");
    const handleBlur = () => setCurrentAnimation("idle");

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setCurrentAnimation("hit");

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Vedant Satish Gunjal",
                    from_email: form.email,
                    to_email: "vedantgunjal2005@gmail.com",
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);

                    showAlert({
                        show: true,
                        text: "Message sent successfully 😃",
                        type: "success",
                    });

                    setTimeout(() => {
                        hideAlert(false);

                        setCurrentAnimation("idle");

                        setForm({
                            name: "",
                            email: "",
                            message: "",
                        });
                    }, 3000);
                },
                (error) => {
                    setLoading(false);

                    console.error(error);

                    setCurrentAnimation("idle");

                    showAlert({
                        show: true,
                        text: "Something went wrong 😢",
                        type: "danger",
                    });
                }
            );
    };

    return (
        <section
            style={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: window.innerWidth < 1024 ? "column" : "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "80px 20px",
                gap: "40px",
                background:
                    "linear-gradient(to bottom, #dbeafe, #eff6ff, #ffffff)",
            }}
        >
            {alert.show && <Alert {...alert} />}

            {/* FORM */}
            <div
                style={{
                    width: "100%",
                    maxWidth: "520px",
                    padding: "38px 32px",
                    borderRadius: "32px",
                    background: "rgba(255,255,255,0.18)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.24)",
                    boxShadow:
                        "0 10px 40px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.18)",
                }}
            >
                <h1
                    style={{
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        fontWeight: "800",
                        letterSpacing: "-0.04em",
                        color: "#0f172a",
                        marginBottom: "30px",
                        fontFamily:
                            "Inter, SF Pro Display, system-ui, sans-serif",
                    }}
                >
                    Get in Touch
                </h1>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {/* NAME */}
                    <label
                        style={{
                            marginBottom: "18px",
                            fontWeight: "600",
                            color: "#334155",
                            fontSize: "0.95rem",
                        }}
                    >
                        Name

                        <input
                            type='text'
                            name='name'
                            placeholder='John'
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            style={{
                                width: "100%",
                                marginTop: "10px",
                                padding: "15px 18px",
                                borderRadius: "16px",
                                border:
                                    "1px solid rgba(148,163,184,0.25)",
                                background: "rgba(255,255,255,0.72)",
                                outline: "none",
                                fontSize: "0.95rem",
                                color: "#0f172a",
                                boxShadow:
                                    "0 2px 8px rgba(0,0,0,0.04)",
                            }}
                        />
                    </label>

                    {/* EMAIL */}
                    <label
                        style={{
                            marginBottom: "18px",
                            fontWeight: "600",
                            color: "#334155",
                            fontSize: "0.95rem",
                        }}
                    >
                        Email

                        <input
                            type='email'
                            name='email'
                            placeholder='john@gmail.com'
                            required
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            style={{
                                width: "100%",
                                marginTop: "10px",
                                padding: "15px 18px",
                                borderRadius: "16px",
                                border:
                                    "1px solid rgba(148,163,184,0.25)",
                                background: "rgba(255,255,255,0.72)",
                                outline: "none",
                                fontSize: "0.95rem",
                                color: "#0f172a",
                                boxShadow:
                                    "0 2px 8px rgba(0,0,0,0.04)",
                            }}
                        />
                    </label>

                    {/* MESSAGE */}
                    <label
                        style={{
                            marginBottom: "24px",
                            fontWeight: "600",
                            color: "#334155",
                            fontSize: "0.95rem",
                        }}
                    >
                        Your Message

                        <textarea
                            name='message'
                            rows='5'
                            placeholder='Write your message here...'
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            style={{
                                width: "100%",
                                marginTop: "10px",
                                padding: "15px 18px",
                                borderRadius: "16px",
                                border:
                                    "1px solid rgba(148,163,184,0.25)",
                                background: "rgba(255,255,255,0.72)",
                                outline: "none",
                                fontSize: "0.95rem",
                                color: "#0f172a",
                                resize: "none",
                                minHeight: "140px",
                                boxShadow:
                                    "0 2px 8px rgba(0,0,0,0.04)",
                            }}
                        />
                    </label>

                    {/* BUTTON */}
                    <button
                        type='submit'
                        disabled={loading}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        style={{
                            width: "100%",
                            padding: "15px",
                            border: "none",
                            borderRadius: "16px",
                            background:
                                "linear-gradient(135deg, #38bdf8, #2563eb)",
                            color: "white",
                            fontSize: "1rem",
                            fontWeight: "700",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            boxShadow:
                                "0 10px 24px rgba(37,99,235,0.28)",
                        }}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>

            {/* FOX MODEL */}
            <div
                style={{
                    width: "100%",
                    maxWidth: "500px",
                    height: window.innerWidth < 768 ? "320px" : "500px",
                }}
            >
                <Canvas
                    camera={{
                        position: [0, 0, 5],
                        fov: 75,
                        near: 0.1,
                        far: 1000,
                    }}
                >
                    <directionalLight
                        position={[0, 0, 1]}
                        intensity={2.5}
                    />

                    <ambientLight intensity={1} />

                    <pointLight
                        position={[5, 10, 0]}
                        intensity={2}
                    />

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