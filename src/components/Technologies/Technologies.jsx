import React, { useState } from "react";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiAxios, SiStrapi, SiTypescript } from "react-icons/si";
import { FaHtml5, FaNodeJs } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Technologies = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [hoveredTech, setHoveredTech] = useState(null);

    const technologies = [
        { id: "react", component: <FaReact />, name: "React" },
        { id: "javascript", component: <IoLogoJavascript />, name: "JavaScript" },
        { id: "strapi", component: <SiStrapi />, name: "Strapi" },
        { id: "nodejs", component: <FaNodeJs />, name: "Node.js" },
        { id: "typescript", component: <SiTypescript />, name: "TypeScript" },
        { id: "css3", component: <IoLogoCss3 />, name: "CSS3" },
        { id: "tailwind", component: <RiTailwindCssFill />, name: "Tailwind CSS" },
        { id: "html5", component: <FaHtml5 />, name: "HTML5" },
        { id: "axios", component: <SiAxios />, name: "Axios" },
        { id: "bootstrap", component: <FaBootstrap />, name: "Bootstrap" },
    ];

    return (
        <div className="relative w-screen h-96 overflow-hidden">
            <img
                src="/technologies.jpg"
                alt="technologies"
                className="w-screen h-96 object-cover"
            />
            <motion.div
                className="absolute top-1/2 left-0 flex items-center whitespace-nowrap md:gap-20 gap-8 text-white md:text-6xl text-4xl"
                style={{
                    width: "200%",
                }}
                animate={{ x: isPaused ? "0%" : "-50%" }} // Остановка движения при наведении
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                }}
            >
                {technologies.map((tech) => (
                    <div
                        key={tech.id}
                        className="flex-grow flex justify-center relative"
                        onMouseEnter={() => {
                            setIsPaused(true);
                            setHoveredTech(tech.name);
                        }}
                        onMouseLeave={() => {
                            setIsPaused(false);
                            setHoveredTech(null);
                        }}
                    >
                        {tech.component}
                        {hoveredTech === tech.name && (
                            <div className="absolute top-[-60px] bg-black text-white px-4 py-2 rounded shadow-lg text-base">
                                {tech.name}
                            </div>
                        )}
                    </div>
                ))}
                {technologies.map((tech) => (
                    <div
                        key={`duplicate-${tech.id}`}
                        className="flex-grow flex justify-center relative"
                        onMouseEnter={() => {
                            setIsPaused(true);
                            setHoveredTech(tech.name);
                        }}
                        onMouseLeave={() => {
                            setIsPaused(false);
                            setHoveredTech(null);
                        }}
                    >
                        {tech.component}
                        {hoveredTech === tech.name && (
                            <div className="absolute top-[-60px] bg-black text-white px-4 py-2 rounded shadow-lg text-base">
                                {tech.name}
                            </div>
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Technologies;
