import { H3, P1 } from "@/components/common/TypoAndUtils";
import Link from "next/link";

const ProjectDiscussion = () => {
  return (
    <div
      id="call-to-action-1"
      className="flex flex-col h-56 justify-center align-middle content-center items-center gap-3 bg-accent rounded-s-3xl py-5"
    >
      <div className="max-w-lg md:max-w-2xl text-center px-5">
        <H3>
          <span className="text-slate-950 font-satoshi-black">
            Ready to start your project? Let&apos;s talk!
          </span>
        </H3>
      </div>
      <div className="max-w-lg md:max-w-2xl text-center px-5">
        <P1>
          <span className="text-slate-950">
            I&apos;m passionate about helping businesses achieve their goals
            through exceptional web development.
          </span>
        </P1>
      </div>

      <div className="max-w-xl mx-auto flex flex-row justify-center items-center gap-3">
        <Link
          href="/"
          className="font-satoshi-bold bg-slate-950 px-5 py-2 rounded-sm text-sm text-accent hover:text-slate-100 transition-all ease-in-out duration-300"
        >
          Book a call
        </Link>
      </div>
    </div>
  );
};

export default ProjectDiscussion;
