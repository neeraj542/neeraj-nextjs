"use client";
import MotionDiv from "@/components/motion-div";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

export default function about() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 scroll-mt-24 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-2 w-full text-center text-3xl font-semibold md:mb-4">
            About Me
          </h2>
        </MotionDiv>

        <article className="flex flex-col text-lg text-neutral-200 font-medium">
          <MotionDiv delayOffset={0.4}>
            <div className="my-2">
            Hello! I’m Neeraj Kumar Meena, currently pursuing a Master’s in Computer Applications at the National Institute of Technology (MANIT) Bhopal, India. I specialize in full-stack software development with a strong focus on C++, React.js, TypeScript, Node.js, and NoSQL databases.

            </div>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <div className="flex flex-col gap-2">
              <p>
              I actively contribute to open-source projects and have been involved in notable events such as the Smart India Hackathon, where my team achieved Grand Finalist status. Additionally, I’ve participated in over three open-source events, including C4GT (code4-govt-Tech) by the Government of India, where I earned a Gold Medal.

              {/* My work experience includes developing various projects like RoomieConnect, Taskify, and PocketMate, which showcase my skills in building practical and impactful solutions. I’m also exploring DevOps and have a growing interest in generative AI, NLP, and machine learning for product automation. */}
              </p>
              <p>
              In my free time, I enjoy listening to music, podcasts, and indulging in video editing. I’m excited to join a dynamic team where I can apply my skills, continue to grow, and contribute to impactful projects.

              Thank you for learning more about me!
              </p>
            </div>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3 relative">
      {/* MotionDiv Wrapper for Animation */}
      <MotionDiv delayOffset={0.4} className="relative">
        {/* Image with Overlay */}
        <div className="relative">
          <Image
            src="/neeraj-sih.jpg"
            alt="photo"
            width={420}
            height={420}
            className="mt-6 rounded-xl transition-all hover:rotate-3 hover:scale-105"
            onContextMenu={(e) => e.preventDefault()} // Disable right-click context menu
          />
          {/* Overlay to obstruct image */}
          <div className="absolute inset-0 bg-transparent" />
        </div>
      </MotionDiv>
    </div>
    </section>
  );
}
