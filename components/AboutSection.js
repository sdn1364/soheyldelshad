import React from 'react';
import Section from "./template/section";
import Center from "./template/center";
import MainArt from "./art/main";
import {motion} from "framer-motion";
import Image from "next/image";
import MyPhoto from "../public/myphoto.jpg";

const AboutSection = ()=>{
    return(
    <Section className="relative">
        <Center>
            <div className="w-1/2 flex flex-row justify-end p-10">
                <Center className="w-2/3 h-1/5 overflow-hidden">
                    <Image className="w-full h-auto" src={MyPhoto}/>
                </Center>
            </div>
            <div className="w-1/2 space-y-5 p-10">
                <h1 className="font-orbitron text-3xl">Who am I?</h1>
                <p className="w-1/2 text-justify">I am a self taught front end developer with a strong background in graphic design. I love working hard and long hour to get the result i desire. it does not matter what the job is. I am a fast learner and always eager to learn new thing as I learnt all of my skills just through perseverance. I am so passionate about my clients projects as if they are my own and try to do the best work I would ever can</p>
            </div>
        </Center>
        <Center className="absolute bottom-7 right-8 flex items-center cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g className="animate-bounce">
                    <path d="M11.8798 14.9901C11.6898 14.9901 11.4998 14.9201 11.3498 14.7701L8.78977 12.2101C8.49977 11.9201 8.49977 11.4401 8.78977 11.1501C9.07977 10.8601 9.55977 10.8601 9.84977 11.1501L11.8798 13.1801L13.9098 11.1501C14.1998 10.8601 14.6798 10.8601 14.9698 11.1501C15.2598 11.4401 15.2598 11.9201 14.9698 12.2101L12.4098 14.7701C12.2598 14.9201 12.0698 14.9901 11.8798 14.9901Z" className="fill-current"/>
                    <path d="M11.8809 14.92C11.4709 14.92 11.1309 14.58 11.1309 14.17V4C11.1309 3.59 11.4709 3.25 11.8809 3.25C12.2909 3.25 12.6309 3.59 12.6309 4V14.17C12.6309 14.58 12.2909 14.92 11.8809 14.92Z" className="fill-current"/>
                </g>
                <path d="M12 20.9299C6.85 20.9299 3.25 17.3299 3.25 12.1799C3.25 11.7699 3.59 11.4299 4 11.4299C4.41 11.4299 4.75 11.7699 4.75 12.1799C4.75 16.4499 7.73 19.4299 12 19.4299C16.27 19.4299 19.25 16.4499 19.25 12.1799C19.25 11.7699 19.59 11.4299 20 11.4299C20.41 11.4299 20.75 11.7699 20.75 12.1799C20.75 17.3299 17.15 20.9299 12 20.9299Z" className="fill-current"/>
            </svg>
            <p className="mx-2">Check out what I can do</p>
        </Center>
    </Section>

    )
}

export default AboutSection;