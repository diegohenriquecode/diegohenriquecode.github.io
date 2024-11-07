/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Diego",
  logo_name: "Diego",
  // nickname: "harry / picleric",
  full_name: "Diego Oliveira",
  subTitle: "Full Stack Developer, Open Source Enthusiast, Life Long Learner.",
  resumeLink:
    "https://drive.google.com/file/d/1We0TAsTCvWALqj84F3O9VQkIMkL4KvFU/view?usp=sharing",
  mail: "mailto:diegohenriquecode@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/diegohenriquecode/",
  linkedin: "https://www.linkedin.com/in/diegohenriquecode/",
  gmail: "diegohenriquecode@gmail.com",
  // gitlab: "https://gitlab.com/harikanani",
  // facebook: "https://www.facebook.com/Diego.vijaywargiya/",
  twitter: "https://twitter.com/diegoholiveirav/",
  instagram: "https://www.instagram.com/diegohenriquecode/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive User Interfaces and Backend for web applications",
        "⚡ Building responsive website front end using ReactJS or VueJS",
        "⚡ Creating application backend in Node, Express, Nest, Django and Fast-API",
        "⚡ Integration of third party services such as Firebase/ AWS / GCP",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#0c4b33",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        // {
        //   skillName: "Java",
        //   fontAwesomeClassname: "simple-icons:java",
        //   style: {
        //     color: "#f89820",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "simple-icons:rabbitmq",
          style: {
            color: "#ff6600",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        // {
        //   skillName: "Wordpress",
        //   fontAwesomeClassname: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },
        // {
        //   skillName: "Apache",
        //   fontAwesomeClassname: "simple-icons:apache",
        //   style: {
        //     color: "#CA1A22",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        // {
        //   skillName: "C",
        //   fontAwesomeClassname: "simple-icons:c",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        // {
        //   skillName: "C++",
        //   fontAwesomeClassname: "simple-icons:cplusplus",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Elasticsearch",
          fontAwesomeClassname: "simple-icons:elasticsearch",
          style: {
            color: "#e87e3d",
          },
        },
        {
          skillName: "Kibana",
          fontAwesomeClassname: "simple-icons:kibana",
          style: {
            color: "#00bfb3",
          },
        },
        {
          skillName: "NestJS",
          fontAwesomeClassname: "simple-icons:nestjs",
          style: {
            color: "#e0234e",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "DynamoDB",
          fontAwesomeClassname: "simple-icons:dynamo",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Faculdade Pitágoras de Sobral",
      subtitle: "Bachelors in System Analysis",
      logo_path: "pitagoras.png",
      alt_name: "PITAGORAS",
      duration: "2020 - 2022",
      descriptions: [
        "⚡  I've done my Bachelors in System Analysis.",
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my courses and bootcamps. ",
      ],
      website_link: "https://www.pitagoras.com.br/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Ignite NodeJS",
      subtitle: "Rocketseat Bootcamp",
      logo_path: "ignite.svg",
      certificate_link:
        "https://drive.google.com/file/d/1Ht4Za5OQLXLlB1DRrFzOCr4-0Qo4S9V8/view?usp=sharing",
      alt_name: "Rocketseat Node",
      // color_code: "#2AAFED",
      color_code: "#00462a",
    },
    {
      title: "Ingnite ReactJS",
      subtitle: "Rocketseat Bootcamp",
      logo_path: "ignite-react.svg",
      certificate_link:
        "https://drive.google.com/file/d/1ggFuRoSMtobkdeU1ZLnpBlH5OiN0su3A/view?usp=sharing",
      alt_name: "Rocketseat React",
      color_code: "#217f92",
    },
    {
      title: "JavaScript Expert Bootcamp",
      subtitle: "JS Expert",
      logo_path: "js.png",
      certificate_link:
        "https://drive.google.com/file/d/162ptpWaFIC8BfC-EGmhgk8kFE33W9DC2/view?usp=sharing",
      alt_name: "Js Expert",
      color_code: "#f7df1e",
    },
    // {
    //   title: "A300: Atlas Security",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#F6B808",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "Contributor's Hack",
    //   subtitle: "Hakin Codes",
    //   logo_path: "HakinCodes.jfif",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1xvyy1M05lQN-s2VKw_Qvz6E7rPwrK2qm/view?usp=sharing",
    //   alt_name: "Opensource Event",
    //   color_code: "#fefd7b",
    // },
    // {
    //   title: "MLH Local Hack Day: Build",
    //   subtitle: "Major League Hacking",
    //   logo_path: "mlh-logo.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    //   alt_name: "Google",
    //   color_code: "#fe0037",
    // },
    // {
    //   title: "Olympiad",
    //   subtitle: "Ramanujan Mathematics Olympiad",
    //   logo_path: "Olympiad.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
    //   alt_name: "Postman",
    //   // color_code: "#f36c3d",
    //   color_code: "#fffbf3",
    // },
    // {
    //   title: "Competitive Programming",
    //   subtitle: "Reply Challenges",
    //   logo_path: "Reply.jfif",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1KamrXJPTrF3zfMuEerbSnFUjOkt-agKT/view",
    //   alt_name: "Reply",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Competitive Programming",
    //   subtitle: "Google Hash Code",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1sD6GS8f2Fh5MHMWlf5DhXoMhu4mykW-f/view",
    //   alt_name: "Reply",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Training",
    //   subtitle: "30 Days of Open Source",
    //   logo_path: "CFC.jfif",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
    //   alt_name: "Postman",
    //   // color_code: "#f36c3d",
    //   color_code: "#a60000",
    // },
    // {
    //   title: "Training",
    //   subtitle: "Git Learning",
    //   logo_path: "Progate.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1sD6GS8f2Fh5MHMWlf5DhXoMhu4mykW-f/view",
    //   alt_name: "Reply",
    //   color_code: "#88e7ce",
    // },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Freelance",
  description:
    "With over five years of experience in the programming field, I've had the privilege of working on diverse projects that have significantly enriched my skills and career. Each role has contributed unique perspectives and expertise, shaping me into a well-rounded, highly skilled software developer. I bring not only technical proficiency but also a passion for creating impactful solutions that prioritize efficiency, scalability, and maintainability. My commitment to quality and continuous improvement drives me to stay on top of the latest developments in software engineering, ensuring I deliver exceptional results.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Developer - Backend",
          company: "Febracis",
          company_url: "https://febracis.com/",
          logo_path: "febracis-logo.png",
          duration: "Mar 2024 - Nov 2024",
          location: "Remote",
          description: `
            At Febracis, we focused heavily on serverless architecture, leveraging AWS and integrating with external APIs to enhance system capabilities. We maintained a strong agile culture, enabling efficient development cycles and rapid adaptation to project needs.
          `,
          color: "#000",
        },
        {
          title: "Software Developer - Frontend",
          company: "FDTE | FISERV",
          company_url: "https://www.fiserv.com.br/",
          logo_path: "fiserv-logo-orange.svg",
          duration: "May 2020 - Mar 2022",
          location: "Remote",
          description: `
            At FDTE, I worked with the client FISERV, applying my expertise in React.js. I played a key role in streamlining processes, as the squad I was part of initially didn't follow an agile methodology. My work included backend development in Java, a microfrontend architecture, and implementing a design system using atomic design principles. I also handled integration and unit testing, CI/CD pipelines, Jenkins servers, and virtual machines for remote access, enhancing both the system's reliability and team productivity.
          `,
          color: "#fc4e03",
        },
        {
          title: "Software Developer - Fullstack",
          company: "Newspace | Bradesco",
          company_url: "https://bfveic.nssmartsuite.com.br/#/login",
          logo_path: "bfveic.png",
          duration: "May 2020 - Mar 2022",
          location: "Remote",
          description: `
            Working on a vehicle financing system for Bradesco bank (BFVEIC), I participated in the planning, structuring, development, and maintenance of new modules. I worked extensively with Microservices Architecture, REST API Development, Event-Driven Architecture, Automated Process Robots in C# and NodeJS, a large suite of Docker tools, Relational and Non-Relational Databases (MONGO DB and SQLServer), Database Routines with Stored Procedures, Automated Deployment Pipeline with Azure DevOps, among other experiences that I have had the pleasure to be involved with.
          `,
          color: "#fc030f",
        },
        {
          title: "Software Developer - Fullstack",
          company: "Tradex Solutions",
          company_url: "http://tradexsolutions.com.br/",
          logo_path: "tradex.png",
          duration: "May 2020 - Mar 2022",
          location: "Remote",
          description: `
            As Fullstack Engineer I've worked with ReactJS, NextJS, Redux and Python, Django, Plotly to build a solid architecture that whas 3 points
            A Industry vision of their products at market covering every city of Brazil. The data were helpfull to plan sales strategy and to see hot points of specifics products and brands.
            A Agency vision of their promoters (who visit the sales point) and the performace of the strategies and routes.
            A App with tasks to the promoter execute.
            In the case of this project I was Teach Lead on the part of Agency application, but worked in all points
          `,
          color: "#0071C5",
        },
        {
          title: "Software Developer - Frontend",
          company: "Groove.Tech",
          company_url: "https://www.groove.tech/",
          logo_path: "groove.jpg",
          duration: "Fev 2019 - Apr 2020",
          location: "Remote",
          description: `
            As Fullstack Engineer I've worked with ReactJS and NodeJS to rebuild one of theier most importants applications The Neojets www.neojets.com/
          `,
          color: "#3c820d",
        },
        {
          title: "Software Developer - Intern",
          company: "Appi9",
          company_url: "https://www.appi9.com/",
          logo_path: "appi9.jpeg",
          duration: "Jan 2018 - Fev 2019",
          location: "Hybrid",
          description: `
            Developed UIs using Vue, ChartJS and Bootstrap. Was a very good oportunity to learn with the others devs and the CTO
            based on the frequently contact between us.
            Also, I've used PHP with Laravel to build some features on Backend.
            Their core products are a Omnichannel based on whatsapp api, I've made some features there about this and
            one of their Landing Pages was made by me 😆
          `,
          color: "#ffffff",
        },
      ],
    },
    {
      title: "Freelancers",
      experiences: [
        {
          title: "Software Developer - Frontend",
          company: "Equatorial Telecom",
          company_url: "https://www.equatorialtelecom.com.br/",
          logo_path: "equatorial.svg",
          duration: "Jan 2022 - Ago 2022",
          description:
            "In partnership with Equatorial, I was tasked with developing the frontend of one of their platforms. At the time, I used Next.js, Chakra UI, Hook Form, and the most commonly used React tools.",
          color: "#fff",
        },
        {
          title: "Software Developer - Frontend",
          company: "Ikatec",
          company_url:
            "https://www.linkedin.com/company/ikatec/?originalSubdomain=br",
          logo_path: "ikatec_logo.jpeg",
          duration: "Oct 2020 - Dez 2021",
          description:
            "At Ikatec, I worked with React and Laravel, which was an incredible experience that lasted a little over a year and provided me with a wealth of knowledge. In this role, I utilized React to build dynamic user interfaces, focusing on creating smooth, responsive applications. With Laravel, I worked on the backend, leveraging its powerful features like Eloquent ORM for database management, Blade templating for clean, reusable views, and Artisan commands for efficient workflow automation. The combination of React's component-based architecture and Laravel's robust backend made it an ideal environment for full-stack development, enhancing both my frontend and backend skills.",
          color: "#62cff0",
        },
        {
          title: "Software Developer - Vtex",
          company: "B8one",
          company_url: "https://www.b8one.com/pt-BR",
          logo_path: "b8one.jpg",
          duration: "Dec 2020 - May 2021",
          description:
            "At B8one, I had the opportunity to explore a new tool, VTEX IO, alongside React and Node.js. VTEX IO is a platform for building scalable e-commerce applications, and working with it allowed me to dive deep into creating customizable, high-performance online stores. React was used to build intuitive, dynamic user interfaces, while Node.js handled server-side operations, ensuring seamless communication between the frontend and backend. This experience not only enhanced my understanding of e-commerce platforms but also broadened my technical toolkit, giving me hands-on expertise with cutting-edge technologies used in modern, scalable web applications.",
          color: "#000",
        },
        {
          title: "Software Developer - Fullstack",
          company: "Yampa",
          company_url: "https://yampa.com.br/",
          logo_path: "yampa.png",
          duration: "Fev 2024 - Nov 2024",
          location: "Remote",
          description:
            "At Yampa, I had the pleasure of working alongside some of the people who were part of the early stages of my career at Appi9. I had the opportunity to collaborate closely with Team Leads and the CTO, which allowed me to further develop my skills and gain invaluable insights. One of the key projects I worked on involved integrating an accounting classification system with an OpenAI API for ChatGPT. This experience allowed me to apply best practices like the Ports and Adapters pattern for the backend, specifically using NestJS, which helped in building a clean, maintainable architecture. Overall, this role not only enhanced my technical capabilities but also deepened my understanding of efficient system design and API integrations.",
          color: "#03c6fc",
        },
        {
          title: "Software Developer - Fullstack",
          company: "Prefeitura de Fortaleza",
          company_url: "https://www.fortaleza.ce.gov.br/",
          logo_path: "prefeitura-de-fortaleza.png",
          duration: "Fev 2022 - Ago 2022",
          location: "Remote",
          description:
            "In the development of a selection system for a municipal contest, I utilized Django to build both the interface and the services that powered the system. Django's robust framework allowed for rapid development and seamless integration of the front-end and back-end components. It was a great opportunity to leverage Django's capabilities in handling complex data models and user authentication while ensuring that the system was both efficient and secure. This project provided me with valuable experience in full-stack development and working within tight deadlines to deliver a functional and user-friendly application.",
          color: "#ffffff",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo_2.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://medium.com/@diegohenriquecode",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Mind Space",
      url: "https://www.mindspace.cf/",
      description:
        "This is Blogging website where users can create blogs, follow and unfollow other users, get summarized blog reccomendation on their dashboard and have a personalised searching mechanism.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "1",
      name: "Youtube Downloader",
      url: "https://github.com/vvHacker007/Youtube-Downloader/",
      description:
        "A desktop GUI which can be used to download youtube videos and playlist with desired quality and type on desktop.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "2",
      name: "Tune In",
      url: "https://github.com/vvHacker007/Tune-In",
      description:
        "Tune in is a collaborative music playing system where multiple guests can join a room and enjoy the song being played. Guests can pause and vote to skip the current song.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Django",
          iconifyClass: "logos-django",
        },
      ],
    },
    {
      id: "3",
      name: "Event Scheduler",
      url: "https://github.com/vvHacker007/Event-Scheduler",
      description:
        "It is an all-purpose scheduler software. It is designed to monitor all the activities and give appropriate reminders for them.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "4",
      name: "Movie Reccomendation System",
      url: "https://github.com/vvHacker007/Movie-Recommendation-Systems",
      description:
        "Made three python kernels explaining and implementing the three different types of movie recommender systems.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "3",
      name: "Login Authenticator",
      url: "https://github.com/vvHacker007/Login-Authenticator",
      description: "Made a template for a Login Authenticator using Flask ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "4",
      name: "Calculator",
      url: "https://github.com/vvHacker007/Calculator",
      description:
        "Made a GUI based Calculator. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "5",
      name: "Notepad",
      url: "https://github.com/vvHacker007/Notepad",
      description:
        "Made a GUI based Notepad. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "6",
      name: "Tetris",
      url: "https://github.com/vvHacker007/Tetris",
      description: "Made a GUI based arcade game Tetris using pygame.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "7",
      name: "Steganography",
      url: "https://github.com/vvHacker007/Steganography",
      description:
        "A CLI tool to conceal messages within a file, text, image, or video.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      id: "8",
      name: "Mini Paint",
      url: "https://github.com/vvHacker007/Mini-Paint",
      description: "GUI based Mini Paint Application.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "9",
      name: "Speedtest",
      url: "https://github.com/vvHacker007/Speed-test",
      description:
        "An internet speed testing application which can notify about the download speed, upload speed, and also the reaction time of the connection.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "10",
      name: "Cat Classifier",
      url: "https://github.com/vvHacker007/Cat-Classifier",
      description:
        "Binary Cat Classifier made by hard coding Neural Networks in Python without using libraries such as Tensorflow or keras.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "11",
      name: "Snake",
      url: "https://github.com/vvHacker007/Snake",
      description:
        "A snake game which covers all the basic features like score, high score and an automated speed increase simultaneously when the snake eats the food.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "12",
      name: "Score Predictor",
      url: "https://score-predictor-app.herokuapp.com/",
      description:
        "Predicts students score based on the number of hours the student puts in it.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "13",
      name: "Blood Donation Predictor",
      url: "https://blood-donation-predictor-app.herokuapp.com/",
      description:
        "Predicts if one is ready to donate blood based on the user's blood donation history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "14",
      name: "Credit-Card Default Predictor",
      url: "https://default-predictor-app.herokuapp.com/",
      description:
        "Predicts whether user's credit card would be defaulted or not based on the user's bank statements and history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "15",
      name: "Portfolio Website",
      url: "https://vvhacker007.github.io/Portfolio/",
      description: "You are stalking it right now 😉",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
