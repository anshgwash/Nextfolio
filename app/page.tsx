import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.github} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Ansh Gwash Profile Photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <div className="prose prose-lg prose-neutral dark:prose-invert">
        <h1 className="text-3xl font-bold mb-4">Hi, I'm Ansh</h1>
        <p className="mb-4">
          I'm a Software Engineer and Researcher, passionate about autonomous vehicles and simulation infrastructure.
        </p>
        <p className="mb-8">
          Currently contributing at{" "}
          <a
            href="https://rivian.com"
            target="_blank"
            className="hover:text-[#660000] transition-colors duration-200"
          >
            Rivian
          </a>{" "}
          and pursuing cutting-edge research at{" "}
          <a
            href="https://vt.edu"
            target="_blank"
            className="hover:text-[#660000] transition-colors duration-200"
          >
            Virginia Tech
          </a>
          . Lead for the{" "}
          <a
            href="https://avtc.org/ecocar"
            target="_blank"
            className="hover:text-[#660000] transition-colors duration-200"
          >
            EcoCAR
          </a>{" "}
          CAV sub-team.
        </p>

        <p>
          Want to know more about my work? Check out my{" "}
          <a
            href={socialLinks.github}
            target="_blank"
            className="hover:text-[#660000] transition-colors duration-200"
          >
            GitHub
          </a>{" "}
          or connect on{" "}
          <a
            href={socialLinks.linkedin}
            target="_blank"
            className="hover:text-[#660000] transition-colors duration-200"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </section>
  );
}
