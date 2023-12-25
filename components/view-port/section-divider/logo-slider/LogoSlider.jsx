import { H3 } from "@/components/common/TypoAndUtils";
import { toolKit } from "@/utils/img-exporter";
import Marquee from "react-fast-marquee";

const LogoSlider = () => {
  return (
    <div id="marquee-section" className="flex flex-col h-56 justify-center align-middle content-center items-center gap-3 bg-accent rounded-s-3xl">
      <div className="text-base-100">
        <H3>
          <span className="text-base-100">My preferred web crafting tools</span>
        </H3>
      </div>
      <div className="relative flex my-3 w-3/4 mx-auto overflow-clip mt-3">
        <Marquee
          autoFill
          pauseOnHover
          direction="Left"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, #fff, #fff, transparent)",
          }}
        >
          {toolKit.map((logo, index) => (
            <img
              key={index}
              className="w-10 inline-flex mx-5 brightness-0"
              src={logo.src}
              alt={logo.title + "-logo"}
              title={logo.title + "-logo"}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LogoSlider;
