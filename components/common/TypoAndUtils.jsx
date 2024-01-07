import Link from "next/link";

export const H1 = ({ children, className }) => (
  <h1
    className={`${className} font-black text-3xl md:text-5xl lg:text-7xl bg-gradient-to-b from-primary via-primary to-primary text-transparent bg-clip-text`}
  >
    {children}
  </h1>
);

export const H2 = ({ children, className }) => (
  <h2
    className={`${className} font-bold text-2xl md:text-4xl lg:text-5xl bg-gradient-to-b from-primary via-primary to-primary text-transparent bg-clip-text`}
  >
    {children}
  </h2>
);

export const H3 = ({ children, className }) => (
  <h2
    className={`${className} font-medium text-xl md:text-2xl lg:text-4xl text-secondary`}
  >
    {children}
  </h2>
);

export const P1 = ({ children, className }) => (
  <p
    className={`${className} font-medium text-sm md:text-base lg:text-lg text-secondary`}
  >
    {children}
  </p>
);

export const P2 = ({ children, className }) => (
  <p className={`${className} font-regular text-xs md:text-sm text-secondary`}>
    {children}
  </p>
);

export const P3 = ({ children, className }) => (
  <p className={`${className} font-light text-xs md:text-sm text-secondary`}>
    {children}
  </p>
);

export const TextHighlighter = ({ children, className }) => (
  <span className={`${className} text-primary`}>{children}</span>
);

export const LinkText = ({ link, text, className }) => (
  <Link
    href={link}
    className={`${className} group flex flex-col overflow-hidden`}
  >
    <span className="font-medium text-sm text-accent">{text}</span>
    <span className="w-full min-h-[.1rem] max-h-[.1rem] bg-accent m-0 -translate-x-3/4 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
  </Link>
);

export const SolidButtonLink = ({ link, text, className }) => (
  <Link
    href={link}
    className={`${className} font-bold bg-accent px-5 py-2 rounded-sm text-sm text-base-100 hover:bg-opacity-80 hover:text-primary transition-all ease-in-out duration-300`}
  >
    {text}
  </Link>
);
