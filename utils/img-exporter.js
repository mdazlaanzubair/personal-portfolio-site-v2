// TECH COMPANIES LOGO
import bardLogo from "@/public/tech-logos/bard.svg";
import bootstrapLogo from "@/public/tech-logos/bootstrap.svg";
import bulmaLogo from "@/public/tech-logos/bulma.svg";
import chatgptLogo from "@/public/tech-logos/chatgpt.svg";
import djangoLogo from "@/public/tech-logos/django.svg";
import figmaLogo from "@/public/tech-logos/figma.svg";
import flaskLogo from "@/public/tech-logos/flask.svg";
import githubLogo from "@/public/tech-logos/github.svg";
import illustratorLogo from "@/public/tech-logos/illustrator.svg";
import materialUiLogo from "@/public/tech-logos/material-ui.svg";
import mongodbLogo from "@/public/tech-logos/mongodb.svg";
import nextJsLogo from "@/public/tech-logos/next-js.svg";
import nodeJsLogo from "@/public/tech-logos/nodejs.svg";
import photoshopLogo from "@/public/tech-logos/photoshop.svg";
import pythonLogo from "@/public/tech-logos/python.svg";
import reactJsLogo from "@/public/tech-logos/react-js.svg";
import reduxLogo from "@/public/tech-logos/redux.svg";
import tailwindCssLogo from "@/public/tech-logos/tailwind-css.svg";
import viteJsLogo from "@/public/tech-logos/vitejs.svg";
import vsCodeLogo from "@/public/tech-logos/vs-code.svg";

// SERVICES ICONS
import LogoIcon from "@/public/services-icons/logo-icon.svg";
import SeoIcon from "@/public/services-icons/seo.svg";
import UiUxIcon from "@/public/services-icons/ui-ux-icon.svg";
import WebDevIcon from "@/public/services-icons/web-dev-icon.svg";
import WebScrapingIcon from "@/public/services-icons/web-scraping-icon.svg";
import WritingIcon from "@/public/services-icons/writing-icon.svg";

// PROJECT IMAGES
import projectBgImg1 from "@/public/project-imgs/bg-1.jpg";
import projectBgImg2 from "@/public/project-imgs/bg-2.jpg";
import projectBgImg3 from "@/public/project-imgs/bg-3.jpg";
import project from "@/public/project-imgs/project.jpg";

// EXPORTING ALL LOGOS IN OBJECT FORM
export const techLogos = {
  bard: bardLogo,
  bootstrap: bootstrapLogo,
  bulma: bulmaLogo,
  chatgpt: chatgptLogo,
  django: djangoLogo,
  figma: figmaLogo,
  flask: flaskLogo,
  github: githubLogo,
  illustrator: illustratorLogo,
  materialUi: materialUiLogo,
  mongodb: mongodbLogo,
  nextJs: nextJsLogo,
  nodeJs: nodeJsLogo,
  photoshop: photoshopLogo,
  python: pythonLogo,
  reactJs: reactJsLogo,
  redux: reduxLogo,
  tailwindCss: tailwindCssLogo,
  viteJs: viteJsLogo,
  vsCode: vsCodeLogo,
};

// ONLY MOST USED LOGO EXPORT
export const toolKit = [
  { src: techLogos.reactJs.src, title: "React JS" },
  { src: techLogos.nextJs.src, title: "Next JS" },
  { src: techLogos.nodeJs.src, title: "Node JS" },
  { src: techLogos.mongodb.src, title: "Mongo DB" },
  { src: techLogos.tailwindCss.src, title: "Tailwind CSS" },
  { src: techLogos.github.src, title: "GitHub" },
  { src: techLogos.vsCode.src, title: "VS Code" },
  { src: techLogos.python.src, title: "Python" },
];

// EXPORTING ALL TECH LOGOS FOR TECH SPHERE WITH THEIR RELEVANT TITLE
export const tech_sphere_logos = [
  {
    url: "https://bard.google.com/chat/0c67df6de6a0cc20",
    tooltip: "Bard",
    image: bardLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://getbootstrap.com",
    tooltip: "Bootstrap",
    image: bootstrapLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://bulma.io",
    tooltip: "Bulma",
    image: bulmaLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://openai.com",
    tooltip: "Chatgpt",
    image: chatgptLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://www.djangoproject.com",
    tooltip: "Django",
    image: djangoLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://www.figma.com",
    tooltip: "Figma",
    image: figmaLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://flask.palletsprojects.com",
    tooltip: "Flask",
    image: flaskLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://github.com",
    tooltip: "Github",
    image: githubLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://www.adobe.com/products/illustrator.html",
    tooltip: "Illustrator",
    image: illustratorLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://material-ui.com",
    tooltip: "Material UI",
    image: materialUiLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://www.mongodb.com",
    tooltip: "Mongodb",
    image: mongodbLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://nextjs.org",
    tooltip: "Next JS",
    image: nextJsLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://nodejs.org",
    tooltip: "Node JS",
    image: nodeJsLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://www.adobe.com/products/photoshop.html",
    tooltip: "Photoshop",
    image: photoshopLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://www.python.org",
    tooltip: "Python",
    image: pythonLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://reactjs.org",
    tooltip: "React JS",
    image: reactJsLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://redux.js.org",
    tooltip: "Redux",
    image: reduxLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://tailwindcss.com",
    tooltip: "Tailwind Css",
    image: tailwindCssLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://vitejs.dev",
    tooltip: "Vite JS",
    image: viteJsLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://code.visualstudio.com",
    tooltip: "Vs Code",
    image: vsCodeLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
];

// EXPORTING LIST OF ALL LOGO
export const techLogosArrayComplete = [
  { src: bardLogo.src, title: "Bard" },
  { src: bootstrapLogo.src, title: "Bootstrap" },
  { src: bulmaLogo.src, title: "Bulma" },
  { src: chatgptLogo.src, title: "ChatGPT" },
  { src: djangoLogo.src, title: "Django" },
  { src: figmaLogo.src, title: "Figma" },
  { src: flaskLogo.src, title: "Flask" },
  { src: githubLogo.src, title: "GitHub" },
  { src: illustratorLogo.src, title: "Illustrator" },
  { src: materialUiLogo.src, title: "Material-UI" },
  { src: mongodbLogo.src, title: "MongoDB" },
  { src: nextJsLogo.src, title: "Next.js" },
  { src: nodeJsLogo.src, title: "Node.js" },
  { src: photoshopLogo.src, title: "Photoshop" },
  { src: pythonLogo.src, title: "Python" },
  { src: reactJsLogo.src, title: "React" },
  { src: reduxLogo.src, title: "Redux" },
  { src: tailwindCssLogo.src, title: "Tailwind CSS" },
  { src: viteJsLogo.src, title: "ViteJS" },
  { src: vsCodeLogo.src, title: "VS Code" },
];

// EXPORTING ALL ICONS IN ALONG WITH THEIR ASSOCIATED SERVICES IN ARRAY OR OBJECTS FORM
export const services = [
  // {
  //   icon: UiUxIcon.src,
  //   title: "UI/UX Design",
  //   descriptionParts: [
  //     { text: "Elevate your brand with ", highlight: false },
  //     { text: "engaging UI/UX designs", highlight: true },
  //     { text: " that blend stunning visuals with a ", highlight: false },
  //     { text: "seamless user experience", highlight: true },
  //     { text: ", transforming ", highlight: false },
  //     { text: "digital interactions into memorable journeys", highlight: true },
  //     { text: ".", highlight: false },
  //   ],
  // },
  // {
  //   icon: LogoIcon.src,
  //   title: "Logo Design",
  //   descriptionParts: [
  //     { text: "Craft a ", highlight: false },
  //     { text: "distinctive logo", highlight: true },
  //     {
  //       text: " that captures the essence of your brand, leaving a ",
  //       highlight: false,
  //     },
  //     { text: "lasting impression", highlight: true },
  //     { text: " and solidifying your ", highlight: false },
  //     { text: "digital identity", highlight: true },
  //     { text: ".", highlight: false },
  //   ],
  // },
  {
    icon: WebDevIcon.src,
    title: "Web Development",
    descriptionParts: [
      { text: "Bring your ideas to life with ", highlight: false },
      { text: "robust online solutions", highlight: true },
      { text: ". My development goes ", highlight: false },
      { text: "beyond mere coding", highlight: true },
      { text: " to build platforms that ", highlight: false },
      { text: "engage and convert", highlight: true },
      { text: ", driving your business towards ", highlight: false },
      { text: "measurable success", highlight: true },
      { text: ".", highlight: false },
    ],
  },
  {
    icon: WebScrapingIcon.src,
    title: "Web Scraping",
    descriptionParts: [
      { text: "Harness the ", highlight: false },
      { text: "power of data", highlight: true },
      { text: " with advanced web scraping. Gain ", highlight: false },
      { text: "actionable insights", highlight: true },
      { text: " and make data-driven decisions that ", highlight: false },
      { text: "fuel growth", highlight: true },
      { text: ".", highlight: false },
    ],
  },
  {
    icon: WritingIcon.src,
    title: "Content Writing",
    descriptionParts: [
      { text: "Elevate your content with writing that ", highlight: false },
      { text: "engages and persuades", highlight: true },
      { text: ". I create compelling narratives that ", highlight: false },
      { text: "connect with your audience", highlight: true },
      { text: " and enhance your brand's ", highlight: false },
      { text: "online footprint", highlight: true },
      { text: ".", highlight: false },
    ],
  },
  {
    icon: SeoIcon.src,
    title: "Search Engine Optimization",
    descriptionParts: [
      { text: "Boost your visibility with ", highlight: false },
      { text: "strategic SEO practices", highlight: true },
      {
        text: " that place you at the forefront of search engines. Achieve ",
        highlight: false,
      },
      { text: "top rankings", highlight: true },
      { text: " and attract ", highlight: false },
      { text: "high-quality organic traffic", highlight: true },
      { text: " to your site.", highlight: false },
    ],
  },
];

// EXPORTING ALL FEATURED PROJECT IMAGES WITH THEIR RELEVANT CONTENT
export const projects = [
  {
    title: "Project 1",
    bgImg: projectBgImg1.src,
    projectImg: project.src,
    desc: [
      { text: "Short description about ", highlight: false },
      { text: "Project 1", highlight: true },
      { text: ".", highlight: false },
    ],
    techs: ["React", "Mongo DB", "Prisma", "Tailwind"],
    urls: {
      live: "Live",
      source: "Source Code",
    },
  },
  {
    title: "Project 2",
    bgImg: projectBgImg2.src,
    projectImg: project.src,
    desc: [
      { text: "Short description about ", highlight: false },
      { text: "Project 2", highlight: true },
      { text: ".", highlight: false },
    ],
    techs: ["React", "Mongo DB", "Prisma", "Tailwind"],
    urls: {
      live: "Live",
      source: "Source Code",
    },
  },
  {
    title: "Project 3",
    bgImg: projectBgImg3.src,
    projectImg: project.src,
    desc: [
      { text: "Short description about ", highlight: false },
      { text: "Project 3", highlight: true },
      { text: ".", highlight: false },
    ],
    techs: ["React", "Mongo DB", "Prisma", "Tailwind"],
    urls: {
      live: "Live",
      source: "Source Code",
    },
  },
];
