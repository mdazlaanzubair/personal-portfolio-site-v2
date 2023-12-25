import Link from "next/link";

export const H1 = ({ children }) => (
  <h1 className="font-satoshi-black text-3xl md:text-5xl lg:text-7xl bg-gradient-to-br from-primary via-primary to-base-100 text-transparent bg-clip-text">
    {children}
  </h1>
);

export const H2 = ({ children }) => (
  <h2 className="font-satoshi-bold text-2xl md:text-4xl lg:text-5xl bg-gradient-to-r from-primary via-primary to-secondary text-transparent bg-clip-text">
    {children}
  </h2>
);

export const H3 = ({ children }) => (
  <h2 className="font-satoshi-medium text-xl md:text-2xl lg:text-4xl text-secondary">
    {children}
  </h2>
);

export const P1 = ({ children }) => (
  <p className="font-satoshi-medium text-sm md:text-base lg:text-lg text-secondary">
    {children}
  </p>
);

export const P2 = ({ children }) => (
  <p className="font-satoshi-regular text-xs md:text-sm text-secondary">
    {children}
  </p>
);

export const P3 = ({ children }) => (
  <p className="font-satoshi-light text-xs md:text-sm text-secondary">
    {children}
  </p>
);

export const TextHighlighter = ({ children }) => (
  <span className="text-primary">{children}</span>
);

export const LinkText = ({ link, text }) => (
  <Link href={link} className="group flex flex-col overflow-hidden">
    <span className="font-satoshi-medium text-sm text-accent">{text}</span>
    <span className="w-full min-h-[.2rem] max-h-[.2rem] bg-accent m-0 -translate-x-3/4 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
  </Link>
);

export const SolidButtonLink = ({ link, text }) => (
  <Link
    href={link}
    className="font-satoshi-bold bg-accent px-5 py-2 rounded-sm text-sm text-base-100 hover:bg-opacity-80 hover:text-primary transition-all ease-in-out duration-300"
  >
    {text}
  </Link>
);
