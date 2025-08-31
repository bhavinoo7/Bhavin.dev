"use client";

import React, { createContext, useContext, type ReactNode } from "react";

// Define types for our portfolio data
export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl: string;
};

export type Skill = {
  category: string;
  items: string[];
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

export type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
};

export type Social = {
  platform: string;
  url: string;
  icon: string;
};

export type PortfolioData = {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    avatar: string;
    resumeUrl: string;
  };
  about: {
    title: string;
    description: string[];
    imageUrl: string;
  };
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  social: Social[];
};

// Default portfolio data
const defaultPortfolioData: PortfolioData = {
  personal: {
    name: "Bhavin Sorathiya",
    title: "Full Stack Developer",
    email: "sorathiyabhavin234@gmail.com",
    phone: "+91 6354578240",
    location: "Gandhinagar, Gujrat-382016, India",
    bio: "Hi, I'm Bhavin Sorathiya – a Full-Stack Web Developer specializing in  Java (Spring Boot), Next.js, React.js, and Python (FastAPI). I build scalable, high-performance web applications, combining robust backend architectures with dynamic frontend experiences.",
    avatar: "/placeholder.svg?height=400&width=400",
    resumeUrl: "/resume.pdf",
  },
  about: {
    title: "About Me",
    description: [
      " Hi, I'm a passionate Full-Stack Web Developer specializing in Java (Spring Boot), Next.js, React, and Python (FastAPI). I have experience in frontend and backend development, focusing on building scalable, high-performance applications for web and enterprise solutions.",
      "I love working on end-to-end development, from designing dynamic frontend experiences with React and Next.js to building robust backend architectures with Java. With expertise in cloud deployment, microservices, and API development, I strive to create efficient, user-friendly applications.",
    ],
    imageUrl:
      "https://res.cloudinary.com/durtlcmnb/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1739958267/Healthcare_user_profile/tsaklxh888jk2wrovwjz.jpg",
  },
  experience: [
    {
      title: "Tutor(Computer Science)",
      company: "Chegg India",
      location: "work-from-online",
      period: "Jan 2023 - Present",
      description: [
        "Chegg India provides expert Computer Science tutoring to help students master programming, algorithms, data structures, databases, and more. Tutors offer step-by-step solutions, code explanations, and personalized guidance for assignments and exam preparation.",
        "The platform covers various programming languages like Python, Java, C++, and SQL, along with core CS subjects. ",
        "With 24/7 support and detailed solutions, students can learn efficiently and improve their problem-solving skills. Chegg India makes Computer Science learning easy, accessible, and effective!",
      ],
    },
    
  ],
  education: [
    {
      degree: "BE in Computer Engineering",
      institution: "Leelaben Dashrathbhai Ramdas Patel Institute of Technology(LDRP-ITR)",
      location: "Gandinagar, Gujrat-382016, India",
      period: "2022 - 2026",
    },
    {
      degree: "HSC Science",
      institution: "Delta Science School",
      location: "Jamnagar, Gujrat, India",
      period: "2020 - 2022",
    },
    {
      degree: "SSC 10th",
      institution: "Shreeji School",
      location: "Jamnagar, Gujrat, India",
      period: "2019 - 2020",
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "Redux",
        "Java (Spring Boot)",
        "MongoDB",
        "MySql",
      ],
    },
    {
      category: "Tools & Others",
      items: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
    },
    {
      category: "Authentication & Security",
      items: ["JWT", "OAuth", "Passport", "Nextauth.js"],
    },
    {
      category: "Languages",
      items: [
        "Java",
        "C++",
        "C",
        "Python",
        "Data Structure and Algorithms(DSA)",
        "PHP",
      ],
    },
    {
      category: "Testing & Debugging",
      items: ["Postman", "Hoppscotch"],
    },
  ],
  projects: [
    {
      id: "project-2",
      title: "CureConnect (Doctor Appoinment Booking System)",
      description:
        "Designed a scheduling feature for doctors to set real time availability, and patients to book, view, or cancel appointments. ",
      tags: [
        "React.js(Vite)",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "Passport.js",
        "JWT",
        "HTML",
        "Javascript",
        "WebSocket",
        "MongoDB",
      ],
      imageUrl: "https://res.cloudinary.com/durtlcmnb/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743009293/DALL_E_2025-03-26_22.44.20_-_A_modern_and_minimalistic_logo_for_CureConnect_a_hospital_appointment_booking_system._The_logo_should_feature_a_sleek_medical_cross_symbol_integrat_c5hznx.webp",
      demoUrl: "https://dosome.me",
      githubUrl: "https://github.com/bhavinoo7/CureConnect",
    },
    {
      id: "project-3",
      title:
        "ClassConnect (Classroom Management System with Real time Attendance making using Face Recognization)",
      description:
        "A smart attendance tracking system using face recognition for accurate and hassle-free monitoring. It features real-time attendance tracking, automated reports, and role-based dashboards for admins,hods,pricipals, teachers, and students. The system ensures secure and scalable attendance management for schools, universities, and businesses. Live insights and seamless integration with existing management systems enhance efficiency. Say goodbye to manual attendance with this automated, real-time solution!",
      tags: [
        "Nextjs",
        "Redux",
        "Tailwind Css",
        "Typescript",
        "Nextauth.js",
        "FastAPI",
        "YOLOV8(face Detection)",
        "Resend",
      ],
      imageUrl:
        "https://res.cloudinary.com/durtlcmnb/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1742994166/Healthcare_user_profile/DALL_E_2025-03-26_18.32.27_-_A_modern_and_sleek_logo_for_Class-Connect_._The_design_should_feature_a_combination_of_an_open_book_and_a_digital_network_such_as_connected_nodes_or_o5hp3m.webp",
      githubUrl: "https://github.com/bhavinoo7/ClassConnect",
      demoUrl: "https://begin-sigma.vercel.app/",
    },
    {
      id: "project-4",
      title: "Authentication (Using next Auth)",
      description:
        "A robust authentication system using NextAuth.js for secure sign-in and sign-up. It verifies users by sending a unique email verification code before account activation. JWT-based session management ensures security and seamless access. Supports role-based access control for various types of users. Easily integrates with Next.js apps for a smooth authentication experience! ",
      tags: [
        "Next.js",
        "Nextauth.js",
        "Tailwind CSS",
        "Resend(Email sender)",
        "zod",
      ],
      imageUrl: "https://res.cloudinary.com/durtlcmnb/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743009415/DALL_E_2025-03-26_22.46.35_-_A_modern_and_secure_logo_for_AuthShield_an_authentication_system._The_logo_should_feature_a_shield_symbol_integrated_with_a_key_or_fingerprint_rep_eyja7m.webp",
      githubUrl: "https://github.com/bhavinoo7/Authentication",
    },
    {
      id: "project-5",
      title: "Roomly (Find Best Hotel Room)",
      description:
        "Roomly lets users explore hotels, read and leave reviews, and manage listings effortlessly. Hotel owners can add, edit, or delete listings(Rooms) securely with authentication. An interactive map integration helps users locate hotels easily. Reviews provide insights for better decision-making. Simple, efficient, and user-friendly hotel management!  ",
      tags: [
        "Node.js",
        "Express.js",
        "EJS",
        "MongoDB",
        "joi",
        "Passport.js",
        "HTML",
        "CSS",
        "Javascript",
      ],
      imageUrl: "https://res.cloudinary.com/durtlcmnb/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743009517/DALL_E_2025-03-26_22.48.15_-_A_modern_and_minimalistic_logo_for_Roomly_a_smart_room_booking_and_management_system._The_logo_should_feature_a_sleek_house_or_room_icon_integrated_j4rrnj.webp",
      githubUrl: "https://github.com/bhavinoo7/Roomly.git",
    },
    {
      id: "project-6",
      title: "BillBuddy (Track and share expenses fairly)",
      description:
        "SplitEase makes splitting bills and tracking shared expenses effortless. Easily add, split, and settle expenses with friends, roommates, or groups. The app ensures fair calculations and real-time tracking to avoid confusion. Say goodbye to messy spreadsheets and enjoy hassle-free expense management!",
      tags: [
        "Node.js",
        "React.js",
        "HTML",
        "CSS",
        "Javascript",
      ],
      imageUrl: "https://res.cloudinary.com/durtlcmnb/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743009603/DALL_E_2025-03-26_22.49.46_-_A_modern_and_minimalistic_logo_for_BillBuddy_a_smart_billing_and_expense_management_system._The_logo_should_feature_a_sleek_wallet_or_invoice_icon_utle5t.webp",
      githubUrl: "https://github.com/bhavinoo7/BillBuddy",
    },
  ],
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/bhavinoo7",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/bhavin-sorathiya-16ba72255/",
      icon: "linkedin",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/johndoe",
      icon: "twitter",
    },
  ],
};

// Create context
type PortfolioContextType = {
  data: PortfolioData;
  updateData: (newData: Partial<PortfolioData>) => void;
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(
  undefined
);

// Provider component
export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [portfolioData, setPortfolioData] =
    React.useState<PortfolioData>(defaultPortfolioData);

  const updateData = (newData: Partial<PortfolioData>) => {
    setPortfolioData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <PortfolioContext.Provider value={{ data: portfolioData, updateData }}>
      {children}
    </PortfolioContext.Provider>
  );
}

// Custom hook to use the portfolio context
export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
