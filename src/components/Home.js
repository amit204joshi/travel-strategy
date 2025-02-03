import { motion } from "framer-motion";
import tokyo from "../../src/assets/tokyo.png";

export default function Home() {
    return (
        <div className="bg-gray-900 relative isolate overflow-hidden pt-14 mt-16 min-h-screen">
            {/* 背景图片动画 */}
            <motion.img
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                src={tokyo}
                alt="tokyo"
                className="absolute inset-0 -z-10 h-full w-full object-cover"
            />

            {/* 标题部分：居中显示 */}
            <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-52">
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-center text-4xl font-bold tracking-wide text-white sm:text-6xl"
                >
                    日本北海道-东京旅游攻略
                </motion.h1>
            </div>

            {/* 简介部分：放置于窗口左下方，位置和字体大小随窗口尺寸成比例变化 */}
            <div className="absolute bottom-[10vh] left-[6vw] w-full p-4 sm:p-8">
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    // 使用 clamp 控制字体大小，最大值设置为 1.75rem，确保简介文字不会比标题大
                    style={{ fontSize: "clamp(1rem, calc(1rem + 0.5vw), 1.75rem)" }}
                    className="bg-black bg-opacity-50 p-4 rounded shadow-lg text-left leading-relaxed text-white max-w-md"
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
                    style={{ fontSize: "clamp(1rem, calc(1rem + 0.5vw), 1.75rem)" }}
                    className="mt-4 bg-black bg-opacity-50 p-4 rounded shadow-lg text-left leading-relaxed text-white max-w-md"
                >
                    无论你是第一次踏上日本国土，还是资深旅行达人，都能在本攻略中找到贴心的出行指南与灵感，助你畅玩大都会与秘境田野！
                </motion.p>
            </div>
        </div>
    );
}
