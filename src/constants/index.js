import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    aws,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React.js",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express.js",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud",
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/Contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/vedant128',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vedant-gunjal',
    }
];

export const education = [
    {
        title: "B.E. Information Technology",
        company_name: "Sinhgad College of Engineering, Pune",
        icon: react,
        iconBg: "#dbeafe",
        date: "2024 - 2027",
        points: [
            "Currently pursuing B.E. in Information Technology with strong focus on Full Stack Development and Cloud Computing.",
            "Maintaining excellent academic performance with an 8.99 SGPA.",
            "Actively building MERN stack and modern 3D web applications.",
            "Continuously improving DSA, backend development, and scalable system design skills.",
        ],
    },

    {
        title: "Diploma in Computer Engineering",
        company_name: "AISSMS Polytechnic, Pune",
        icon: javascript,
        iconBg: "#bfdbfe",
        date: "2021 - 2024",
        points: [
            "Completed Diploma in Computer Engineering with 90.17% academic score.",
            "Built strong foundations in programming, databases, networking, and software engineering.",
            "Started web development journey through frontend and backend projects.",
            "Participated in technical activities and project-based learning.",
        ],
    },
];

export const experiences = [
    {
        title: "Graphic Design Lead",
        company_name: "GDG SCOE",
        icon: github,
        iconBg: "#cffafe",
        date: "2024 - 2025",
        points: [
            "Led the graphic design team for GDG SCOE community events and technical workshops.",
            "Designed visual assets, banners, and branding materials for social media and events.",
            "Collaborated with organizers and developers to improve community engagement.",
            "Contributed to technical and creative initiatives within the developer community.",
        ],
    },

    {
        title: "Web Developer Intern",
        company_name: "NinjaBytes Technologies",
        icon: nodejs,
        iconBg: "#e0f2fe",
        date: "Sep 2025 - Feb 2026",
        points: [
            "Built and optimized MERN stack applications with improved API performance and responsive UI.",
            "Developed reusable React components and integrated backend APIs.",
            "Implemented Firebase Authentication and Firestore-based real-time features.",
            "Collaborated using Git/GitHub in an Agile development workflow.",
        ],
    },

    {
        title: "Android Development Intern",
        company_name: "Infeanet Digital Solution and Web Media",
        icon: mongodb,
        iconBg: "#dbeafe",
        date: "June 2023 - July 2023",
        points: [
            "Developed Android UI components using XML and Java.",
            "Integrated REST APIs for dynamic mobile application functionality.",
            "Worked on debugging, lifecycle management, and application optimization.",
            "Focused on improving mobile usability and user experience.",
        ],
    },
];
export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-blue',
        name: 'Nutra AI',
        description:
            'Developed an AI-powered nutrition assistant that helps users analyze meals, track calories, and generate personalized diet recommendations.',
        link: 'https://github.com/vedant128',
    },

    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'GitChronous',
        description:
            'Built a GitHub analytics and developer activity tracking platform with interactive dashboards and contribution insights.',
        link: 'https://github.com/vedant128',
    },

    {
        iconUrl: car,
        theme: 'btn-back-green',
        name: 'Interview Preparation Platform',
        description:
            'Created a full stack interview preparation platform with coding practice, learning resources, progress tracking, and mock interview features.',
        link: 'https://github.com/vedant128',
    },

    {
        iconUrl: estate,
        theme: 'btn-back-yellow',
        name: 'AGROBLINK',
        description:
            'Developed a modern agriculture marketplace platform connecting farmers and buyers with product listings, authentication, and responsive UI.',
        link: 'https://github.com/vedant128',
    },

    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Farmer Cab',
        description:
            'Built a transportation platform for farmers to book affordable logistics and delivery services for agricultural products.',
        link: 'https://github.com/vedant128',
    }
];