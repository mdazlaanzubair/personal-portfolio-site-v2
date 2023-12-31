import React from "react";
import ThemeToggler from "../../common/ThemeToggler";
import SocialMenu from "./SocialMenu";
import { LinkText, P3 } from "@/components/common/TypoAndUtils";
import MobileSocialMenu from "./MobileSocialMenu";

const Footer = () => {
  return (
    <div className="fixed bottom-0 navbar w-100 z-50 px-3 sm:px-5 md:px-7 lg:px-10 bg-base-100 bg-opacity-75 backdrop-blur-sm">
      <div className="navbar-start">
        <MobileSocialMenu />
        <SocialMenu />
      </div>
      {/* <div className="navbar-center"></div> */}
      <div className="navbar-end">
        <P3>
          <span className="flex gap-1">
            Crafted by <LinkText text="Muhammad Azlaan Zubair" link="/" />
          </span>
        </P3>
      </div>
    </div>
  );
};

export default Footer;
