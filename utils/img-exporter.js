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
  {
    icon: UiUxIcon.src,
    title: "UI/UX Design",
    descriptionParts: [
      { text: "Elevate your brand with ", highlight: false },
      { text: "engaging UI/UX designs", highlight: true },
      { text: " that blend stunning visuals with a ", highlight: false },
      { text: "seamless user experience", highlight: true },
      { text: ", transforming ", highlight: false },
      { text: "digital interactions into memorable journeys", highlight: true },
      { text: ".", highlight: false },
    ],
  },
  {
    icon: LogoIcon.src,
    title: "Logo Design",
    descriptionParts: [
      { text: "Craft a ", highlight: false },
      { text: "distinctive logo", highlight: true },
      {
        text: " that captures the essence of your brand, leaving a ",
        highlight: false,
      },
      { text: "lasting impression", highlight: true },
      { text: " and solidifying your ", highlight: false },
      { text: "digital identity", highlight: true },
      { text: ".", highlight: false },
    ],
  },
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
      { text: " and enhance your brand’s ", highlight: false },
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
