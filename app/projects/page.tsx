import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

const projects = [
  {
    title: "V2X Enhanced Track Management Research – Virginia Tech",
    year: "Oct 2024",
    description: (
      <ul className="list-disc pl-5">
        <li>
          Developed a V2V-enabled sensor fusion system, reducing object tracking
          errors by 30%.
        </li>
        <li>
          Published the research in IEEE Vehicular Technology Conference (VTC).
        </li>
        <li>
          Simulated and validated the system using MATLAB and Simulink.
        </li>
      </ul>
    ),
    url: "https://arxiv.org/abs/2404.17697",
  },
  {
    title: "US Dept. of Energy EcoCAR Team – Automated Vehicles Lead",
    year: "Aug 2023 - Present",
    description: (
      <ul className="list-disc pl-5">
        <li>
          Leading a team of 25 engineers to attain SAE Level 2+ automation in a
          re-engineered Cadillac LYRIQ.
        </li>
        <li>
          Researching SIL testing for a Model Predictive Controller.
        </li>
        <li>
          Teaching an Independent Study course on Perception, Controls, V2X, and
          CAN fundamentals.
        </li>
      </ul>
    ),
    url: "https://avtcseries.org/about-the-ecocar-ev-challenge/",
  },
  {
    title: "First Place Data Science Hack – UVA HooHacks 2023",
    year: "March 2023",
    description: (
      <ul className="list-disc pl-5">
        <li>
          Tuned GPT-3.5 turbo model to provide a risk score for any domain,
          simplifying security assessments.
        </li>
        <li>
          Built a seamless Next.js front-end on Vercel, improving UX and
          reducing loading times.
        </li>
        <li>
          Integrated Twilio messaging for enhanced accessibility.
        </li>
      </ul>
    ),
    url: "https://devpost.com/software/secure-surf",
  },
  {
    title: "App to Cloud Data Pipeline – ThermaSENSE Corp.",
    year: "Dec 2022",
    description: (
      <ul className="list-disc pl-5">
        <li>
          Introduced a circular buffer in C++ to cache data on Adafruit nRF52,
          reducing data loss by 80%.
        </li>
        <li>
          Developed an iOS app using Swift UI for real-time Bluetooth LE
          wearable data, reducing user churn by 25%.
        </li>
        <li>Integrated Firebase for cloud storage.</li>
      </ul>
    ),
    url: "https://www.linkedin.com/in/anshgwash",
  },
];

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:border hover:border-[#660000] hover:text-[#660000] transition-all duration-200 p-2"
          >
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {project.title}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {project.year}
                </span>
              </div>
              <div className="prose prose-neutral dark:prose-invert pt-3">
                {project.description}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
