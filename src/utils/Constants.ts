
import react from "../assets/images/language/react.png";
import redux from "../assets/images/language/redux.png"
import html from "../assets/images/language/html1.png"
import css from "../assets/images/language/css1.png"
import javascript from "../assets/images/language/javascript1.png";
// import html from "../assets/images/language/html2.png"
// import css from "../assets/images/language/css2.png"
// import javascript from "../assets/images/language/javascript2.png";
import bootstrap from "../assets/images/language/bootstrap.png"
import figma from "../assets/images/language/figma.png"
import node from "../assets/images/language/node.png"
import express from "../assets/images/language/express-2.png"
import jwt from "../assets/images/language/jwt.png"
import iis from "../assets/images/language/iis2.png"
import postman from "../assets/images/language/postman.png"
import mongodb from "../assets/images/language/mongodb.svg"
import mongoose from "../assets/images/language/mongoose.png"
import git from "../assets/images/language/git.png"
import github from "../assets/images/language/github.jpg"
import gitdesk from "../assets/images/language/gitdesk.png"
import gitlab from "../assets/images/language/gitlab.png"
import reactnative from "../assets/images/language/react-native.png"
import python from "../assets/images/language/python.png"
import pandas from "../assets/images/language/pandas.png"
import matplotlib from "../assets/images/language/matplotlib.png"
import jupyter from "../assets/images/language/jupyter.png"

import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiRedux , SiMongodb, SiMongoose} from "react-icons/si";

const skillDetails = {
  frontend: [
    {
      skill: "React",
      image: react,
      description: "Build Single Page Web Apps using React"
    },
    {
      skill: "Redux",
      image: redux,
      description: "Managing the state values in React"
    },
    {
      skill: "HTML",
      image: html,
      description: "Structure the Web App using HTML"
    },
    {
      skill: "CSS",
      image: css,
      description: "Styling web applications using CSS"
    },
    {
      skill: "JavaScript",
      image: javascript,
      description: "Develop App Functionalities using JavaScript"
    },
    {
      skill: "Bootstrap",
      image: bootstrap,
      description: "Develop responsive web app and mobile-first approach"
    },
    {
      skill: "Figma",
      image: figma,
      description: "Design user interfaces and prototypes with Figma."
    }
  ],
  backend: [
    {
      skill: "Node JS",
      image: node,
      description: "Develop server-side applications"
    },
    {
      skill: "Express JS",
      image: express,
      description: "Simplify backend development"
    },
    {
      skill: "MongoDB",
      image: mongodb,
      description: "Store and manage NoSQL data efficiently"
    },
    {
      skill: "Mongoose",
      image: mongoose,
      description: "Database modeling and schema design for mongoDB"
    },
    {
      skill: "JWT",
      image: jwt,
      description: "Handle authentication more safe and securely"
    }
  ],
  Database: [
    {
      skill: "MongoDB",
      image: mongodb,
      description: "Store and manage NoSQL data efficiently"
    },
    {
      skill: "Mongoose",
      image: mongoose,
      description: "Database modeling and schema design for mongoDB"
    },
    {
      skill: "MySQL",
      image: "",
      description: "Store and manage SQL data efficiently"
    },
  ],
  tools: [
    {
      skill: "Postman",
      image: postman,
      description: "Test and debug APIs"
    },
    {
      skill: "IIS",
      image: iis,
      description: "Host and manage web applications"
    },
    {
      skill: "MongoDB Compass",
      image: mongodb,
      description: "Visualize and manage databases"
    },
    {
      skill: "GitHub-Desktop",
      image: gitdesk,
      description: "Simplify version control tasks"
    }
  ],
  versionControl: [
    {
      skill: "git",
      image: git,
      description: "Track and manage code versions"
    },
    {
      skill: "GitHub",
      image: github,
      description: "Host and collaborate on repositories"
    },
    {
      skill: "GitLab",
      image: gitlab,
      description: "Manage repositories in the organization"
    }
  ],
  learning: [
    {
      skill: "React Native",
      image: reactnative,
      description: "Build cross-platform mobile apps"
    },
    {
      skill: "Python",
      image: python,
      description: "Develop machine learning models and data manipulations"
    },
    {
      skill: "Pandas",
      image: pandas,
      description: "Data manipulation and analysis library"
    },
    {
      skill: "Matplotlib",
      image: matplotlib,
      description: "Create static, animated, or interactive plots"
    },
    {
      skill: "Jupyter",
      image: jupyter,
      description: "Interactive environment for write python programs"
    }
    // {
    //   skill:"",
    //   image:"",
    //   description:""
    // },
    // {
    //   skill:"",
    //   image:"",
    //   description:""
    // },
  ]
}

const projectDetails = [
  {
    name: "Street Light Management System",
    time: "",
    technologies: [
      { icon: FaReact, style: "text-primary" },
      { icon: SiRedux, style: "redux-style" },
      { icon: FaBootstrap, style: "bootstrap-style" }
    ],
    description: "A Application for efficient monitoring and management of street lights, including status tracking, energy consumption analysis, and automated controls."
  },
  {
    name: "SyenApp Online Shopping",
    time: "",
    technologies: [
      { icon: FaReact, style: "text-primary" },
      { icon: SiRedux, style: "redux-style" },
      { icon: FaNodeJs, style: "text-success" },
      { icon: SiMongodb, style: "text-success" },
      { icon: SiMongoose, style: "text-success" },
    ],
    description: "SyenApp is a privacy-focused shopping app that protects user data, offers anonymous browsing, and delivers personalized deals with preventing targeted ads."
  },
  {
    name: "Asset Management System",
    time: "",
    technologies: [
      { icon: FaReact, style: "text-primary" },
      { icon: SiRedux, style: "redux-style" },
      { icon: FaNodeJs, style: "text-success" },
      { icon: SiMongodb, style: "text-success" },
      { icon: SiMongoose, style: "text-success" },
    ],
    description: "A Application used for tracking, management, and optimization of an organization's assets throughout their lifecycle and utilize and maintain the assets."
  },
  // {
  //   name: "",
  //   time: "",
  //   technologies: "",
  //   description: ""
  // }
]


const homeDetails = {
  name: "SarathKumar",
  position: "Junior Software Engineer",
  experience: 3,
  email: "kumar17cs035@gmail.com",
  degree: "B.E Computer Science & Engineering",
  skills: ["React", "Node Js", "Express", "Mongo DB", "HTML", "CSS", "JavaScript"],
  interests: ["Data Science", "Machine Learning"],
  learning: ["Python (jupyter notebook)", "Pandas", "Machine Learning",],
  homePageContent: () => `As a MERN Stack Developer with over ${homeDetails.experience} years of hands-on experience, I specialize in building dynamic, user-friendly web applications. I have a deep understanding of MongoDB, Express.js, React, and Node.js, and I'm proficient in integrating them to create full-stack solutions that meet both business and technical requirements. With a strong focus on performance, scalability, and responsive design, I am passionate about crafting seamless user experiences and delivering high-quality code. I am eager to bring my expertise to new challenges and contribute to innovative projects that drive results.`,
}

export { homeDetails, skillDetails, projectDetails }
