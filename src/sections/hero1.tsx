// hero1.tsx
"use client"; // Add this directive at the top of the file

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import DP from '../../public/codeedee.webp';
import MotionDiv from '@/components/motion-div'; // Importing the updated MotionDiv component
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const roles = [
  "Full stack developer",
  "Passionate Video Editor",
  "Open Source Contributor",
];

const Hero1: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-8 bg-dark-50"> {/* Solid background color */}
      {/* Heading */}
      <MotionDiv delayOffset={0.2} className={`text-center text-lg md:text-3xl mb-2 ${poppins.className}`}>
        <span className="font-semibold">I'm Neeraj Meena! 👋</span>
      </MotionDiv>
      {/* Image */}
      <MotionDiv delayOffset={0.1} className="overflow-hidden rounded-full p-3 md:p-4">
        <Image src={DP} alt="Dp" className="max-w-xs rounded-full" />
      </MotionDiv>


      {/* Subtitle */}
      <MotionDiv delayOffset={0.8} className="text-center text-xl mt-8">
        Final Year Postgrad @NIT Bhopal
      </MotionDiv>

      {/* Description with Dynamic Typography Effect */}
      <MotionDiv delayOffset={1.2} className="my-12 flex text-3xl flex-col items-center gap-2 text-center lg:w-230">
        <p>
          <span className="font-semibold">
            {roles[currentRole]}
          </span>
        </p>
        {/* <p className="text-lg mt-2">Welcome to my personal portfolio!</p> */}
      </MotionDiv>
    </section>
  );
};

export default Hero1;
