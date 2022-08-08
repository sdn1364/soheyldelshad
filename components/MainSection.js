import React from 'react';
import Section from "./template/section";
import Center from "./template/center";
import MainArt from "./art/main";
import {motion} from "framer-motion";
import DownArrow from "./template/DownArrow";

const MainSection = ()=>{
    return(
        <Section className="relative overflow-hidden">
            <Center>
                <div className="w-full stroke-2 text-neutral-300 dark:text-neutral-400 p-36 ">
                    <MainArt/>
                </div>
                <div className="absolute flex-col w-fit text-gray-900 dark:text-white">
                    <motion.h3 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, stiffness: 5, delay: 0.5}} className="font-bold text-3xl w-full text-neutral-500">
                        I am
                    </motion.h3>
                    <motion.h1 className="font-orbitron text-8xl tracking-[1rem] text-justify"
                               initial={{opacity: 0, y: -10}}
                               animate={{opacity: 1, y: 0}}
                               transition={{duration: 1, stiffness: 5}}

                    >
                        SOHEYL
                    </motion.h1>
                    <motion.h2 className="font-orbitron text-8xl text-justify"
                               initial={{opacity: 0, y: 10}}
                               animate={{opacity: 1, y: 0}}
                               transition={{duration: 1, stiffness: 5, delay: 0.005}}
                    >
                        DELSHAD
                    </motion.h2>
                    <motion.h3 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, stiffness: 5, delay: 1}} className="font-bold text-3xl justify-self-end w-full text-right  text-neutral-500">
                        a Web Developer
                    </motion.h3>
                </div>

            </Center>
            <motion.div initial={{
                x: 500,
                opacity: 0
            }}
                        animate={{
                            x:0,
                            opacity:1
                        }}
                        transition={{
                            duration: 1,
                            stiffness: 5
                        }}
                        className="absolute bottom-7 right-8 flex items-center cursor-pointer">
                <DownArrow/>
                <p className="mx-2">Know more about me</p>
            </motion.div>
        </Section>
    )
}

export default MainSection;