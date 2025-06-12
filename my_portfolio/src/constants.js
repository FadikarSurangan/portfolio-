// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import djangoLogo from './assets/tech_logo/django.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import freelancer from "./assets/company_logo/freelancer_logo.png";


// Education Section Logo's
import gcectLogo from './assets/education_logo/gcect.jpg';
import brkmLogo from './assets/education_logo/brkm.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import portfolioLogo from './assets/work_logo/portfolio.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Django', logo: djangoLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: freelancer,
    role: "Freelance Fullstack Developer",
    date: "January 2024 - Present",
    desc: "Worked as a freelance fullstack developer for Webverse Digital, creating dynamic and scalable web applications using the MERN stack. Delivered responsive UIs, implemented RESTful APIs, and optimized performance while collaborating remotely with cross-functional teams.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Django",
      "Tailwind CSS",
      "Bootstrap",
      "MongoDb"
    ],
  },
];

/* educationn */
  export const education = [
    
    {
      id: 1,
      img: gcectLogo,
      school: "Government College of Engineering & Ceramic Technology",
      date: "Sept 2022 - Sept 2026",
      grade: "8.5 CGPA",
      desc: "Hello everyone, I'm Surangan Fadikar, a pre final year B.Tech student at the Government College of Engineering and Ceramic Technology, with a passion for Developing Websites. I’m currently pursuing my Bachelor of Technology (B.Tech) degree in Computer Science from this college.. ",
      degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)",
    },
    {
      id: 2,
      img: brkmLogo,
      school: "Baranagore Ramakrishna Mission Ashrama High School",
      date: "Apr 2020 - March 2022",
      grade: "82.89%",
      desc: "I completed my class 12 education from Baranagore Ramakrishna Mission Ashrama High School, Kolkata, under the West Bengal Council of Higher Secondary Education(WBCHSE), where I studied Physics, Chemistry, and Mathematics (PCM) with Biology.",
      degree: "H.S - Higher Secondary",
    },
    {
      id: 3,
      img: brkmLogo,
      school: "Baranagore Ramakrishna Mission Ashrama",
      date: "Apr 2010 - March 2020",
      grade: "82.85%",
      desc: "I completed my class 10 education from Baranagore Ramakrishna Mission Ashrama High School, Kolkata, under the West Bengal Board of Secondary Education (WBBSE), where I studied Science.",
      degree: "Secondary",
    },
  ];
  /*My portfolio website  (linking left)*/
  export const projects = [
     {
      id: 2,
      title: "My Portfolio Website",
      description:
        "Crafted a responsive personal portfolio using React, Tailwind CSS, and Vite.Showcases my projects, skills, and experience with techs like React, Node.js, Django, MongoDB, and Express.",
      image: portfolioLogo,
      tags: ["React JS", "Node.js", "Django", "MongoDB", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Vite"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
   
    {
      id: 1,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    
    {
      id: 3,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 4,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 5,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },
  ];  