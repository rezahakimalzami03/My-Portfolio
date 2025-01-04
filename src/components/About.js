import React from 'react';
// Icon
import { BsArrowUpRight } from "react-icons/bs";
// Motion
import { motion } from "framer-motion";
// Variants
import { fadeIn } from "../variants";

// services data
const services = [
  {
    name: "Front-End Developer",
    description: " Experienced as a frontend developer at VOCASIA specializing in Next JS, creating responsive web pages with a keen eye for aesthetics.",
    link: "Learn More",
    arrow_url: "https://www.w3schools.com/whatis/whatis_frontenddev.asp",
    url: "https://gitlab.com/divisi_it/vocasia-frontend-web",

  },
  {
    name: "Website Developer",
    description: " Experienced as a website developer at OK OCE Indonesia using React JS framework and Tailwind CSS.",
    link: "Learn More",
    arrow_url: "https://www.coursera.org/articles/web-developer",
    url: "https://web-okoce.vercel.app/",
  },
  {
    name: "Front-End & Back-End Website Developer",
    description: "Develope a capstone project web app using React JS with Tailwind CSS and Node.js (Back-end) at Dicoding Indonesia.",
    link: "Learn More",
    arrow_url: "https://www.dicoding.com/learningpaths/22",
    url: "https://github.com/orgs/Capstone-Project-DonateCom/repositories",
  },
  {
    name: "Internet of Things",
    description: "Developing an automated watering system based on NodeMCU integrated with Telegram as a real-time project.",
    link: "Learn More",
    arrow_url: "https://www.ibm.com/think/topics/internet-of-things",
    url: "https://youtu.be/Z0LKqzzOBuU",
  },
]

const About = () => {
  return (
    <section className='section' id="about">
      <div className='container mx-auto mt-32'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & Image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 mr-3"
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a computer science student who has 1 year of internship experience as a web developer.
            </h3>

            <a href="https://github.com/rezahakimalzami03?tab=repositories" >
              <button className='btn btn-sm'>See My Work</button>
            </a>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link, arrow_url, url } = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href={arrow_url} className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href={url} className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
