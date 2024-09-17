import emoji from "react-easy-emoji";
import { Icon } from "@iconify/react";
import javaIcon from "@iconify-icons/devicon/java";
import {
  EducationType,
  CapstoneType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Jeremy Gitau",
  title: "Hi all, I'm Jeremy",
  description:
  "I am a passionate software developer with extensive experience in Full Stack development, utilizing technologies like Python, Django, Java, Spring Boot, and React.js. I have a strong interest in machine learning, computer vision, and cloud-based solutions. I’m dedicated to creating impactful projects and constantly expanding my knowledge in AI, backend development, and cloud architecture. I thrive in team-based environments and enjoy exploring cutting-edge technologies to solve real-world problems.",
  resumeLink: "#",
  capstoneLink: "#capstone-section",
};

export const openSource = {
  githubUserName: "empyreanlee",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:lloyd.developer2@gmail.com",
  linkedin: "https://www.linkedin.com/in/leegitaujeremy/",
  github: "https://github.com/empyreanlee",
  instagram: "https://www.instagram.com/j.gitaulee",
  facebook: 'https://www.facebook.com/1hanzla100',
  twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "EXPERT IN MOBILE AND BACKEND DEVELOPMENT WITH A FOCUS ON MACHINE LEARNING",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Developing mobile applications using Kotlin and Java"),
        emoji("⚡ Building robust backend systems with Spring Boot"),
        emoji("⚡ Creating RESTful APIs and integrating backend services"),
        emoji("⚡ Implementing machine learning models and solutions"),
        emoji("⚡ Applying data analysis techniques and AI-driven insights"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Spring-boot", //springboot
          iconifyTag: "logos:spring",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Java", //java
          iconifyTag: "logos:java",
        },
        {
          skillName: "CV", //opencv
          iconifyTag: "logos:opencv",// iwant the devicon icons #not working now 
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Mobile Development (Kotlin, Java)",
    progressPercentage: "85", // Proficiency in mobile development
  },
  {
    Stack: "Backend Development (Spring Boot)",
    progressPercentage: "90", // High proficiency in backend with Spring Boot
  },
  {
    Stack: "Machine Learning / AI",
    progressPercentage: "80", // Proficiency in ML/AI, including computer vision and data analysis
  },
  // {
  //   Stack: "Cloud Technologies (AWS, Heroku)",
  //   progressPercentage: "80", // Proficiency in cloud solutions
  // },
  // {
  //   Stack: "Containerization (Docker)",
  //   progressPercentage: "75", // Proficiency in Docker
  // },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "DeKUT",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2021 - April 2025",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const capstone: CapstoneType[] = [
  {
    role: "My Autobiography",
    company: "Autobiography",
    companyLogo: "/img/icons/common/meganos.png",
    date: "2024",
    desc: "A presentation about my journey.",
    biolink : [
      { label: "Autobiography", url: "https://drive.google.com/file/d/1qok27nErlsJUL4cfJnr4w_l6SMAXErxu_cxCOILbPlI/view" },
      { label: "Slides", url: "https://drive.google.com/file/d/1F3XG8qqvsME1QBk6aKdnBqhacZiqtIN9/view" },
    ],
    },
  {
    role: "Innovation",
    company: "Invention in Field of Study",
    companyLogo: "/img/icons/common/duseca_software_logo.jpeg",
    date: "September 2024",
    desc: "Abstract and video presentation on inventions in my field of study",
    biolink : [
      { label: "Video", url: "https://drive.google.com/your-slides-link" },
      { label: "Abstract", url: "https://drive.google.com/file/d/1JxjdHNfyabFIW3c3XLC6usCwOz40VRujCU5c3U9rPTU" },
      { label: "Slides", url: "https://drive.google.com/file/d/1E3dl0-yZOdtB9VovsrV0N7E-t2WL2O61/preview" },
    ],
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Importance of African Culture",
    company: "Culture Study",
    companyLogo: "/img/icons/common/zrtech.jpeg",
    date: "2024",
    desc: "Presentation on the significance of African culture.",
    biolink: [
      { label: "Video", url: "https://drive.google.com/your-presentation-link" },
      { label: "Abstract", url: "https://drive.google.com/file/d/17qvT1KECEBeNM4Lc0LBqskoVy5W6HNhgcMh1RooWyjM/edit" },
      { label: "Slides", url: "https://drive.google.com/file/d/1vsjYWvcE1vjbjPp6VtSEQY0XSPObFzgQ/preview" },
    ],
  },
  {
    role: "The Ethical Challenges of Data Security ",
    company: "Challenge(s) facing Modern Society",
    companyLogo: "/img/icons/common/bleedAI.jpg",
    date: "Sep 2024",
    desc: "Exploring the balance between innovation and privacy.",
    biolink: [
      { label: "Video", url: "https://drive.google.com/your-presentation-link" },
      { label: "Abstract", url: "https://drive.google.com/file/d/1UsGN1NAABr-jJs4JMN7jdT96GCznsMpbRD-kCc1ORog/view" },
      { label: "Slides", url: "https://drive.google.com/file/d/1Ng8TbL3QnBRa2r7tuGMiOclyTLczdjlQwmKulYQhpKE/preview" },
    ],
    },
  {
    role: "The essay",
    company: "The African Community",
    companyLogo: "/img/icons/common/bleedAI.jpg",
    date: "2024",
    desc: "#short dec of the essay",
    biolink: [
      { label: "View Presentation", url: "https://drive.google.com/your-presentation-link" },
    ],
    },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Giebo",
    desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
    link: "https://gibeo.io/",
  },
  {
    name: "O Mejor Oferta",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Gitau Jeremy",
  description: greetings.description,
  author: "Hanzla Tauqeer",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Hanzla",
    "Hanzla Tauqeer",
    "@1hanzla100",
    "1hanzla100",
    "Portfolio",
    "Hanzla Portfolio ",
    "Hanzla Tauqeer Portfolio",
  ],
};
