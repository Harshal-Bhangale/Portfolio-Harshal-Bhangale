export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  // {
  //   id: 0,
  //   name: "Compute Engine",
  //   description:
  //     "🌟Successfully completed five-course accelerated specialization offered by Google Cloud Education.",
  //   technologies: ["GCP", "Qwiklabs", "Automation"],
  //   github: "https://www.linkedin.com/posts/mayankyadav17_completion-certificate-for-architecting-with-activity-6969605614939324416-ZiM9?utm_source=share&utm_medium=member_desktop",
  //   demo: "https://www.coursera.org/account/accomplishments/specialization/X4Y9MFFR7GCP",
  //   image: require(".//../../public/projects/courseraa.png"),
  //   available: true,
  // },
  // {
  //   id: 1,
  //   name: "BTB-22",
  //   description:
  //     "🌟Winner of National Level Hackathon, our team has built effective and fully functional College Canteen Automation Website.",
  //   technologies: ["JavaScript", "CSS", "MongoDB"],
  //   github: "https://github.com/tancreates/THE-HIDE-OUT",
  //   demo: "https://www.youtube.com/watch?v=It482zYm8hg&t=10s",
  //   image: require(".//../../public/projects/btb.png"),
  //   available: true,
  // },
  // {
  //   id: 2,
  //   name: "SSIP-22",
  //   description:
  //     "🌟Our team emerged as Finalists in the SSIP Hackathon, where we successfully developed the E-Challan Collection System to address a real-life problem.",
  //   technologies: ["EJS", "Node.js", "MySQL"],
  //   github: "https://github.com/DPS21302/SSIP-HACKATHON.com",
  //   demo: "https://www.youtube.com/watch?v=DFTcb2DXvHE&t=8s",
  //   image: require(".//../../public/projects/ssipphoto.png"),
  //   available: true,
  // },
  // {
  //   id: 3,
  //   name: "Facilitator Program",
  //   description:
  //     "🌟Achieved the Ultimate Milestone by completing all the 40 Quests and 20 Skill Badges.",
  //   technologies: ["GCP", "Qwiklabs", "Big Data"],
  //   github: "https://www.linkedin.com/posts/mayankyadav17_google-cloud-gcrf-activity-6992495662911107072-wIQt?utm_source=share&utm_medium=member_desktop",
  //   demo: "https://www.cloudskillsboost.google/public_profiles/1b818781-66a9-45be-b682-c083a5745ab1",
  //   image: require(".//../../public/projects/swagsneew.png"),
  //   available: true,
  // },
  // {
  //   id: 5,
  //   name: "Nptel-Domain",
  //   description:
  //     "🌟Completed Programming Domain comprises six courses offered by NPTEL.",
  //   technologies: ["C++", "Java", "DSA", "DBMS"],
  //   github: "https://www.youtube.com/watch?v=N5IL58pKQqo&feature=youtu.be",
  //   demo: "https://linktr.ee/myk_nptel",
  //   image: require(".//../../public/projects/nptel.png"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "ColleGPT",
  //   description:
  //     "🌟Founder, Developer and Content Creator at ColleGPT ~ Get Prepared Together.",
  //   technologies: ["React.js", "Node.js", "MongoDB"],
  //   github: "https://github.com/mayankyadav1711/collegpt",
  //   demo: "https://www.collegpt.com/",
  //   image: require(".//../../public/projects/collegpt.png"),
  //   available: true,
  // },
  // {
  //   id: 7,
  //   name: "Unite-Bharat",
  //   description:
  //     "🌟Our team emerged as SIH Finalist🚀 and developed an innovative project repository website💯.",
  //   technologies: ["React.js", "Node.js", "MongoDB"],
  //   github: "https://github.com/mayankyadav1711/Unite-Bharat",
  //   demo: "https://unite-bharat.vercel.app/",
  //   image: require(".//../../public/projects/unitebharat.png"),
  //   available: true,
  // },
  // {
  //   id: 8,
  //   name: "3rd-Prize",
  //   description:
  //     "🥉Secured 3rd prize in a State Level Poster Competition by presenting our innovative idea through an engaging poster.",
  //   technologies: ["Idea", "Innovation", "Impact"],
  //   github: "",
  //   demo: "https://www.linkedin.com/posts/divyakaurani_teamwork-achievementunlocked-unitebharat-ugcPost-7165752486736117760-qmgl?utm_source=share&utm_medium=member_desktop",
  //   image: require(".//../../public/projects/poster.jpg"),
  //   available: true,
  // },
  // {
  //   id: 9,
  //   name: "Xenesis-24",
  //   description:
  //     "🌟Build a college tech-event website with intuitive event registration and ticket management functionalities, complemented by an appealing UI.",
  //   technologies: ["React.js", "Python", "Tailwind"],
  //   github: "",
  //   demo: "https://anonymous-murex.vercel.app/",
  //   image: require(".//../../public/projects/xenesis.png"),
  //   available: true,
  // },
  // {
  //   id: 10,
  //   name: "SDE-Intern",
  //   description:
  //     "🌟Hackingly - Worked as a React and Next.js developer in an Agile Environment, turned concept from inception into reality.",
  //   technologies: ["React.js", "Next.js", "Tailwind"],
  //   github: "",
  //   demo: "https://www.hackingly.in/",
  //   image: require(".//../../public/projects/hackingly.png"),
  //   available: true,
  // },
  {
    id: 11,
    name: "Analzyer SocialMedia",
    description:
      "🌟Built Supportify - a Virtual Community Support website during summer internship at TatvaSoft, working with Angular, .NET, and PostgreSQL stack.",
    technologies: ["Python", "Langflow", "Astra DB"],
    github: "https://github.com/Harshal-Bhangale/BitBots_x_LevelSuperMindHackathon",
    demo: "https://bit-bots-x-level-super-mind-hackathon.vercel.app/",
    image: require(".//../../public/projects/tatvasoft.jpg"),
    available: true,
  },
  {
    id: 12,
    name: "IAIB2025 ",
    description:
      "🌐 IAIB 2025 – International conference on AI innovations and applications, exploring emerging technologies and research breakthroughs in hybrid mode, Pune.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Harshal-Bhangale/IAIB2025_Conference",
    demo: "https://iaib2025.jspmrscoe.edu.in/",
    image: require(".//../../public/projects/einfochips.jpg"),
    available: true,
  },
  {
    id: 13,
    name: "ART Finder",
    description:
      "🚀 ART Finder – Automates ad research by identifying user pain points, triggers, and top-performing strategies with actionable insights.",
    technologies: ["Gemini AI", "Python", "Langflow"],
    github: "https://github.com/Harshal-Bhangale/Automated-Research-and-Trigger-Finder",
    demo: "https://bitbotsxlevelupsupermind-coxz92ns4-bit-bots.vercel.app/",
    image: require(".//../../public/projects/fitbite.jpg"),
    available: true,
  },
  {
    id: 14,
    name: "Drive Assist",
    description:
      "🚗 Drive Assist - Smart Road Assistance providing real-time fuel station locator, garage services, car rentals, and navigation support.",
    technologies: ["Java", "SpringBoot", "MySQl"],
    github: "https://github.com/Harshal-Bhangale/Drive-Assist",
    demo: "https://github.com/Harshal-Bhangale/Drive-Assist",
    image: require(".//../../public/projects/mmpsrpc.png"),
    available: true
  },
  {
    id: 15,
    name: "Holistic HealthCare",
    description:
      "🚀 AI-driven platform providing personalized fitness, mental health monitoring, and holistic wellness recommendations.",
    technologies: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/Harshal-Bhangale/Holistic-Health-Care-App",
    demo: "",
    image: require(".//../../public/projects/saarthi.jpeg"),
    available: true
  },
];