import { H3, P1 } from "@/components/common/TypoAndUtils";
import Link from "next/link";

const HireMe = () => {
  return (
    <div
      id="call-to-action-1"
      className="flex flex-col h-56 justify-center align-middle content-center items-center gap-3 bg-accent rounded-s-3xl"
    >
      <H3>
        <span className="text-base-100 font-satoshi-black">
          Why should you hire me for your next project
        </span>
      </H3>
      <div className="max-w-lg text-center">
        <P1>
          <span className="text-base-100">
            I&apos;ve proven track record of success. I&apos;ve worked with a
            variety of businesses, from small startups to large corporations.
          </span>
        </P1>
      </div>

      <div className="max-w-xl mx-auto flex flex-row justify-center items-center gap-3">
        <Link
          href="/"
          className="font-satoshi-bold bg-base-100 px-5 py-2 rounded-sm text-sm text-accent hover:text-primary transition-all ease-in-out duration-300"
        >
          Book a call
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
