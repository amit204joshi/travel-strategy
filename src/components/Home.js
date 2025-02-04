import { motion } from "framer-motion";
import tokyo from "../../src/assets/tokyo.png";

export default function Home() {
    return (
        <div className="bg-gray-900 relative isolate overflow-hidden pt-14 lg:mt-16 min-h-screen">
            {/* Background picture */}
            <motion.img
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                src={tokyo}
                alt="tokyo"
                className="absolute inset-0 -z-10 h-full w-full object-cover"
            />

            {/* Heading */}
            <div className="mx-auto max-w-3xl px-4 py-12 sm:py-32 lg:py-48">
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-center text-2xl font-bold tracking-wide text-white sm:text-4xl lg:text-6xl"
                >
                    日本北海道-东京旅游攻略
                </motion.h1>
            </div>

            {/* Intro */}
            <div className="relative px-4 pb-16 sm:px-8 lg:absolute lg:bottom-[16vh] lg:left-[10vw]">
                <div className="space-y-4 max-w-md mx-auto lg:mx-0">
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="bg-black/50 p-4 rounded shadow-lg text-white
                                   text-base sm:text-lg lg:text-xl  
                                   leading-snug sm:leading-relaxed"
                    >
                        从{" "}
                        <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
                            繁华霓虹
                        </span>{" "}
                        下的东京街头，到纯净浪漫的北海道❄️，这里汇聚了经典景点📸、美食情报🍣、交通贴士🚄与实用行程建议。
                    </motion.p>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 2.2 }}
                        className="bg-black/50 p-4 rounded shadow-lg text-white
                                   text-base sm:text-lg lg:text-xl
                                   leading-snug sm:leading-relaxed"
                    >
                        无论你是第一次踏上日本国土，还是资深旅行达人，都能在本攻略中找到贴心的出行指南与灵感，助你畅玩大都会与秘境田野！
                    </motion.p>
                </div>
            </div>
        </div>
    );
}