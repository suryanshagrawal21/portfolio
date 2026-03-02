export interface Project {
    id: string;
    title: string;
    role: string;
    description: string;
    problem: string;
    architecture: string;
    impact: string;
    tags: string[];
    githubLink: string;
    liveLink: string;
    imageUrl?: string;
}

export interface Experience {
    role: string;
    company: string;
    duration: string;
    description: string[];
}

export interface Certification {
    title: string;
    issuer: string;
    icon: string;
    link: string;
}

export interface Education {
    degree: string;
    field: string;
    institution: string;
    duration: string;
    grade: string;
}

export interface SkillCategory {
    title: string;
    skills: { name: string; icon: string }[];
}

export const portfolioData = {
    personalInfo: {
        name: "Suryansh Agrawal",
        title: "Software Engineer | Architecting Scalable Systems",
        email: "suryanshagrawal54@gmail.com",
        linkedin: "https://www.linkedin.com/in/suryansh-agrawal-b43821283",
        github: "https://github.com/suryanshagrawal21",
        aboutPara1: "I am a full-stack software engineer specializing in the MERN stack and AI/ML data processing pipelines. I thrive on architecting robust backend infrastructures and delivering seamless, highly interactive frontend user experiences.",
        aboutPara2: "My engineering philosophy centers around writing clean, testable code, optimizing system performance, and applying software design patterns to solve complex business logic. I am continuously exploring distributed systems, scalable architectures, and intelligent API design.",
        focus: [
            "🧠 Architecting Full-Stack MERN Applications",
            "🔌 Engineering Scalable API Infrastructures",
            "🏗️ Integrating Machine Learning Pipelines"
        ]
    },

    experiences: [
        {
            role: "Software Development Trainee",
            company: "AICTE - EduSkills",
            duration: "Apr 2025 - Jun 2025",
            description: [
                "Engineered responsive, component-driven web interfaces using HTML5, modern CSS architectures, and vanilla JavaScript.",
                "Implemented rigorous technical requirement analysis and translated business logic into functional frontend components.",
                "Optimized DOM manipulation workflows to ensure high-performance rendering across modern browsers."
            ]
        },
        {
            role: "Technology Job Simulation",
            company: "Deloitte",
            duration: "Dec 2025",
            description: [
                "Participated in an intensive, practical simulation emulating enterprise software delivery lifecycles.",
                "Executed client requirement gathering, system design modeling, and agile consulting workflows.",
                "Analyzed technical trade-offs to propose scalable architectural solutions."
            ]
        },
        {
            role: "Self-Directed Engineering",
            company: "Independent Projects",
            duration: "2023 - Present",
            description: [
                "Architected and deployed multiple full-stack applications, handling end-to-end development from database schema design to frontend deployment.",
                "Integrated complex predictive ML models into Python backends, exposing them via structured REST APIs.",
                "Implemented robust authentication, state management, and optimized database queries to guarantee system reliability."
            ]
        }
    ],

    certifications: [
        {
            title: "Oracle Cloud Infrastructure 2025",
            issuer: "Certified Generative AI Professional",
            icon: "fas fa-certificate",
            link: "https://drive.google.com/drive/u/0/my-drive"
        },
        {
            title: "Web Development Architecture",
            issuer: "EduSkills Academy",
            icon: "fas fa-code",
            link: "https://drive.google.com/drive/u/0/my-drive"
        },
        {
            title: "Advanced Data Structures & Algorithms",
            issuer: "HackerRank",
            icon: "fab fa-python",
            link: "https://drive.google.com/drive/u/0/my-drive"
        }
    ],

    skillsData: [
        {
            title: "Frontend Engineering",
            skills: [
                { name: "React.js", icon: "fab fa-react" },
                { name: "TypeScript", icon: "fas fa-code" },
                { name: "Tailwind CSS", icon: "fas fa-wind" },
                { name: "Framer Motion", icon: "fas fa-magic" }
            ]
        },
        {
            title: "Backend Architecture",
            skills: [
                { name: "Node.js", icon: "fab fa-node-js" },
                { name: "Express.js", icon: "fas fa-server" },
                { name: "Python", icon: "fab fa-python" },
                { name: "REST APIs", icon: "fas fa-network-wired" }
            ]
        },
        {
            title: "Database & Storage",
            skills: [
                { name: "MongoDB", icon: "fas fa-leaf" },
                { name: "PostgreSQL", icon: "fas fa-database" },
                { name: "MySQL", icon: "fas fa-table" },
                { name: "Redis", icon: "fas fa-bolt" }
            ]
        },
        {
            title: "Tooling & DevOps",
            skills: [
                { name: "Git Workflow", icon: "fab fa-git-alt" },
                { name: "Docker", icon: "fab fa-docker" },
                { name: "Postman", icon: "fas fa-vial" },
                { name: "Vite", icon: "fas fa-bolt" }
            ]
        }
    ],

    projects: [
        {
            id: "ipl-score-prediction",
            title: "AI-Powered IPL Score Prediction Engine",
            role: "Lead Machine Learning Engineer",
            description: "A robust predictive engine leveraging historical sports data to forecast match outcomes. Built to handle large datasets and expose predictions via a streamlined interface.",
            problem: "Traditional sports prediction relies heavily on intuition rather than statistically significant historical data patterns, leading to varied and unsupported forecasting.",
            architecture: "Python Backend utilizing Pandas/NumPy for ETL pipelines, Scikit-learn for training Ridge Regression models, and Matplotlib for data visualization. Exposes a prediction API.",
            impact: "Achieved high predictive accuracy on test datasets by engineering optimal features. Reduced prediction variance through rigorous cross-validation and hyperparameter tuning.",
            tags: ["Python", "Machine Learning", "Scikit-Learn", "Data Engineering", "Pandas"],
            githubLink: "https://github.com/suryanshagrawal21/AI-Based-IPL-Score-Prediction-System",
            liveLink: "#"
        },
        {
            id: "movie-ticket-system",
            title: "Enterprise Movie Ticketing System",
            role: "Full Stack Architect",
            description: "A comprehensive booking platform handling high-concurrency reservations, complex relational data, and secure user sessions.",
            problem: "Managing real-time seat availability across multiple concurrent users requires strict transactional integrity to prevent double-booking anomalies.",
            architecture: "Relational database schema with strict constraints utilizing SQL. Python-based application logic handling transactional boundaries and seating logic.",
            impact: "Engineered a robust schema using 3NF normalization. Solved concurrency issues with atomic database transactions, guaranteeing 100% reservation accuracy.",
            tags: ["Python", "SQL", "Database Design", "System Architecture", "Relational Models"],
            githubLink: "https://github.com/suryanshagrawal21/Movie-Booking-System",
            liveLink: "#"
        },
        {
            id: "intelligent-resume-screening",
            title: "Intelligent AI Resume Screening Service",
            role: "AI & Backend Developer",
            description: "An automated NLP service designed to ingest, parse, and semantically score candidate resumes against specific job descriptions.",
            problem: "Manual resume screening is labor-intensive and prone to human bias, slowing down the recruitment pipeline for technical roles.",
            architecture: "Built on an NLP pipeline using Python. Tokenizes and lemmatizes text data, calculating Cosine Similarity vectors to output a normalized matching score.",
            impact: "Reduced theoretical manual screening time by 80%. Implemented an objective, automated metric system removing immediate human bias from the initial pipeline.",
            tags: ["Python", "NLP", "Algorithms", "Backend Logic"],
            githubLink: "https://github.com/suryanshagrawal21/Intelligent_AI_Resume_Screening_System",
            liveLink: "#",
            imageUrl: "/assets/images/resume-screening.jpg"
        }
    ],

    education: [
        {
            degree: "Bachelor of Technology (B.Tech)",
            field: "Computer Science & Engineering",
            institution: "SRM Institute of Science and Technology",
            duration: "2023 - 2027",
            grade: "CGPA: 8.92/10"
        }
    ]
};
