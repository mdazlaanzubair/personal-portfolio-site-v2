import Link from "next/link";
import React from "react";

const SocialMenu = () => {
  const social_links = [
    {
      title: "Github",
      url: "https://github.com/mdazlaanzubair",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/mdazlaanzubair/",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/mdazlaanzubair/",
    },
    {
      title: "Twitter",
      url: "https://twitter.com/mdazlaanzubair",
    },
    {
      title: "WhatsApp",
      url: "https://wa.me/923113046692?text=Hi%20Azlaan!%20Hope%20you%27re%20doin%27%20well.%20I%20just%20want%20to%20discuss%20a%20project%20with%20you.%20Please%20contact.",
    },
  ];

  return (
    <div className="hidden lg:flex flex-row justify-between items-center gap-3">
      <div className="flex flex-row justify-between items-center gap-0">
        {social_links?.map((link, index) => (
          <Link
            key={index}
            href={link?.url}
            className={`px-4 py-2 border-b-2 font-satoshi-medium text-sm text-secondary bg-transparent border-transparent hover:text-accent hover:border-accent hover:bg-accent hover:bg-opacity-5 transition-all ease-in-out duration-300`}
            target="_blank"
          >
            {link?.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialMenu;
