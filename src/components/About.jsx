import React from "react";
import { MaskContainer } from "./ui/svg-mask-effect";
import { CloudSnow } from "lucide-react";
import { div } from "framer-motion/client";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 bg-accent overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-primary/10 to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-left">
            <h2 className="text-5xl font-bold text-primary mb-6 inline-block relative">
              About Us
              <span className="absolute -bottom-3 left-0 w-20 h-1 bg-secondary"></span>
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              The FIEM ACM Student Chapter aims to bridge the gap between
              students and the tech industry through workshops, events, and
              collaborative learning.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We're dedicated to fostering innovation, professional development,
              and technical excellence within our community of passionate tech
              enthusiasts.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all transform hover:-translate-y-1"
            >
              Join Our Community
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="md:w-1/2 relative">
            <div className=" w-full h-96 bg-white rounded-2xl shadow-xl overflow-hidden p-2">
              <div className="w-full h-full bg-gradient-to-br from-primary/80 to-secondary/80 rounded-xl flex items-center justify-center">
                <MaskContainer
                  className="w-full h-full rounded-[14px] overflow-hidden"
                  revealText={
                    <div className="text-white text-center px-8">
                      <svg
                        className="w-20 h-20 mx-auto mb-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M3 12H4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M20 12H21"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12 3V4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12 20V21"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M5.636 5.636L6.343 6.343"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M17.657 17.657L18.364 18.364"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M5.636 18.364L6.343 17.657"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M17.657 6.343L18.364 5.636"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <h3 className="text-3xl font-bold mb-4">
                        Igniting Innovation
                      </h3>
                      <p className="text-lg ">
                        Empowering students through technology, collaboration,
                        and professional growth.
                      </p>
                      <p className="text-lg mt-6 text-black">
                        See the hidden message
                      </p>
                    </div>
                  }
                >
                  We believe in pushing boundaries,
                  <span className="text-blue-500">
                    {" "}
                    exploring new ideas,
                  </span>{" "}
                  and creating opportunities
                  <span className="text-blue-500">for learning.</span>.
                </MaskContainer>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-lg shadow-lg border-4 border-white flex items-center justify-center">
              <span className="text-primary text-4xl font-bold">ACM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
