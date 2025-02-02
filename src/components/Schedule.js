import React, { useState } from "react";
import flightTo1 from "../../src/assets/flightTo1.png"
import jr1 from "../../src/assets/NCA-Sapporo.png"
import jr2 from "../../src/assets/Sapporo-Otaru.png"
import jr3 from "../../src/assets/OTARU＞SAPPORO(JR).png"
import jr4 from "../../src/assets/SAPPORO(JR)＞NOBORIBETSU.png"
import jr5 from "../../src/assets/jr5.png"
import site1 from "../../src/assets/Sankaku Market.png"
import site2 from "../../src/assets/Rin'yū Morning Market.png"
import hotel1 from "../../src/assets/Courtyard Sapporo.png"
import hotel2 from "../../src/assets/hotel2.png"
import hotel3 from "../../src/assets/hotel3.png"
import xz0 from "../../src/assets/xz0.png"
import xz1 from "../../src/assets/xz1.png"
import xz2 from "../../src/assets/xz2.png"
import tgs1 from "../../src/assets/tgs1.png"
import tgs2 from "../../src/assets/tgs2.png"
import zh1 from "../../src/assets/zh1.png"
import zh2 from "../../src/assets/zh2.png"
import zh3 from "../../src/assets/zh3.png"
import zh4 from "../../src/assets/zh4.png"
import db1 from "../../src/assets/db1.png"
import bus1 from "../../src/assets/bus1.png"
import bus2 from "../../src/assets/bus2.png"
import dj1 from "../../src/assets/dj1.png"
import dj2 from "../../src/assets/dj2.png"
import dj3 from "../../src/assets/dj3.png"
import dj4 from "../../src/assets/dj4.png"
import dj5 from "../../src/assets/dj5.png"
import fss1 from "../../src/assets/fss1.png"
import fss2 from "../../src/assets/fss2.png"
import fss3 from "../../src/assets/fss3.png"
import fss4 from "../../src/assets/fss4.png"
import dy1 from "../../src/assets/dy1.jpg"
import dy2 from "../../src/assets/dy2.jpg"
import dy3 from "../../src/assets/dy3.jpg"
import dy4 from "../../src/assets/dy4.jpg"
import dy5 from "../../src/assets/dy5.jpg"
import dy6 from "../../src/assets/dy6.jpg"
import dy7 from "../../src/assets/dy7.jpg"
import dy8 from "../../src/assets/dy8.jpg"
import sm0 from "../../src/assets/sm0.jpg"
import sm1 from "../../src/assets/sm1.jpg"
import sm2 from "../../src/assets/sm2.jpg"
import sm3 from "../../src/assets/sm3.jpg"
import sm4 from "../../src/assets/sm4.jpg"
import sm5 from "../../src/assets/sm5.jpg"
import sm6 from "../../src/assets/sm6.jpg"
import xl1 from "../../src/assets/xl1.png"
import xl2 from "../../src/assets/xl2.jpg"
import xl3 from "../../src/assets/xl3.jpg"
import xl4 from "../../src/assets/xl4.jpg"
import xl5 from "../../src/assets/xl5.jpg"
import xl6 from "../../src/assets/xl6.jpg"
import xl7 from "../../src/assets/xl7.jpg"
import xl8 from "../../src/assets/xl8.jpg"
import xl9 from "../../src/assets/xl9.jpg"
import xl10 from "../../src/assets/xl10.jpg"

const days = [
    { id: "day1", title: "Day 1 启程" },
    { id: "day2", title: "Day 2 札幌一日游" },
    { id: "day3", title: "Day 3 小樽一日游" },
    { id: "day4", title: "Day 4 登别温泉" },
    { id: "day5", title: "Day 5 前往东京" },
    { id: "day6", title: "Day 6 东京海洋迪士尼" },
    { id: "day7", title: "Day 7 动漫巡礼" },
    { id: "day8", title: "Day 8 逛街买买买" },
    { id: "day9", title: "Day 9 富士山一日游" },
    { id: "day10", title: "Day 10 返程" },
];

function CollapsibleSection({ id, title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id={id} className="mb-8 border rounded">
            <div
                className="flex items-center justify-between cursor-pointer bg-gray-100 p-4 rounded-t"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-2xl font-bold">{title}</h2>
                <span className="text-2xl">{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className="p-4">{children}</div>}
        </section>
    );
}

export default function Schedule() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="relative">
            {/* Sidebar */}
            {/* Small Screen */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded shadow"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                {sidebarOpen ? "关闭定位" : "定位"}
            </button>

            {/* Large Screen */}
            <aside
                className={`fixed top-24 bottom-0 left-0 z-40 w-38 bg-white p-4 rounded-r shadow-md border-r border-gray-200 ${sidebarOpen ? "block" : "hidden"
                    } lg:block`}
            >
                <nav className="sticky top-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">快速定位</h4>
                    <ul className="space-y-2">
                        {days.map((day) => (
                            <li key={day.id}>
                                <a
                                    href={`#${day.id}`}
                                    className="block px-2 py-1 rounded hover:bg-indigo-50 hover:text-indigo-500 text-gray-700"
                                    onClick={() => setSidebarOpen(false)} // 点击后关闭侧边栏（小屏幕）
                                >
                                    {day.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/*Main content */}

            <main className="mx-auto max-w-screen-lg px-4 py-8 px-4 mt-20">
                <h1 className="text-2xl font-bold text-center mb-8">Start</h1>
                {/*Day 1*/}
                <CollapsibleSection id="day1" title="Day 1 启程">
                    <div className="space-y-12">
                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    1
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">西雅图➡️东京</h2>
                                <p className="text-gray-600 my-2">
                                    提前3小时到机场！
                                </p>

                                <div className="mt-4">
                                    <img
                                        src={flightTo1}
                                        alt="FlightTo1"
                                        className="rounded-lg shadow-md w-2/3 h-auto"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    2
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">东京➡️北海道</h2>
                                <div className="mt-4">
                                    <img
                                        src={flightTo1}
                                        alt="FlightTo2"
                                        className="rounded-lg shadow-md w-2/3 h-auto"
                                    />
                                </div>
                                <h3 className="text-lg text-black mt-4">
                                    🛃入境攻略
                                </h3>
                                <a
                                    href="https://www.xiaohongshu.com/discovery/item/662fd1c1000000001e037eae?source=webshare&xhsshare=pc_web&xsec_token=ABSlSKf8zIbsZGu3AEP4dt9YRNQTfyFURYdjvoxEB4f1k=&xsec_source=pc_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none inline-block text-center"
                                >
                                    入境攻略
                                </a>

                                <h3 className="text-lg text-black mt-4">
                                    ✈️羽田机场T3转T2
                                </h3>
                                <a
                                    href="https://www.xiaohongshu.com/discovery/item/65a51c5f000000000f032af8?source=webshare&xhsshare=pc_web&xsec_token=ABsietmjK9APEmJn4cll1R7QzpMxaPK-kkVCt1QJn3634=&xsec_source=pc_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none inline-block text-center"
                                >
                                    转机攻略
                                </a>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    3
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">新千岁机场➡️札幌</h2>
                                <p className="text-gray-600 my-2">
                                    末班车23:21
                                </p>
                                <div className="mt-4">
                                    <img
                                        src={jr1}
                                        alt="jr1"
                                        className="rounded-lg shadow-md w-2/3 h-auto"
                                    />
                                </div>
                                <h3 className="text-lg text-black mt-4">
                                    🚄新千岁机场直达札幌市区JR乘车攻略
                                </h3>
                                <a
                                    href="https://www.xiaohongshu.com/discovery/item/662767d6000000000d0301c2?source=webshare&xhsshare=pc_web&xsec_token=ABCtbSWBdw_ZiVyXpSv-B2C__HQnkUwR0Sa27czOcvAMw=&xsec_source=pc_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none inline-block text-center"
                                >
                                    乘车攻略
                                </a>

                                <h3 className="text-lg text-black mt-4">
                                    🏨入住札幌万怡酒店
                                </h3>
                                <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                    {/* Courtyard Sapporo img */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={hotel1}
                                            alt="hotel1"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                    {/* Courtyard Sapporo map */}
                                    <div className="md:w-1/2 mt-4 md:mt-0 w-full h-64 md:h-96">
                                        <iframe
                                            title="Rin'yū Morning Market"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.6583512147245!2d141.35462967663008!3d43.04861937113727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b29e0eac1d4d5%3A0x32ace636f5c883e1!2sCourtyard%20Sapporo!5e0!3m2!1szh-CN!2sus!4v1737948656942!5m2!1szh-CN!2sus"
                                            className="w-full h-full rounded-lg shadow-md"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CollapsibleSection>

                {/* Day 2 */}
                <CollapsibleSection id="day2" title="Day 2 札幌一日游">
                    <div className="space-y-12">
                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    1
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">午餐</h2>
                                <h3 className="text-lg text-black mt-4">
                                    🍱附近餐馆
                                </h3>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    2
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">札幌电视塔</h2>
                                <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                    {/* TV Tower img */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={zh1}
                                            alt="zh1"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                    {/* TV Tower map */}
                                    <div className="md:w-1/2 mt-4 md:mt-0 w-full h-64 md:h-96">
                                        <iframe
                                            title="Rin'yū Morning Market"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11660.259508181656!2d141.3369407397571!3d43.06110304738398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b299d5f87648d%3A0xe2041a78c3222031!2z5pyt5bmM55S16KeG5aGU!5e0!3m2!1szh-CN!2sus!4v1737955787525!5m2!1szh-CN!2sus"
                                            className="w-full h-full rounded-lg shadow-md"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                                <h3 className="text-lg text-black mt-4">
                                    📸札幌电视塔机位攻略
                                </h3>
                                <a
                                    href="https://www.xiaohongshu.com/discovery/item/67779f6a00000000130098a2?source=webshare&xhsshare=pc_web&xsec_token=ABAuq6QCoGof-MIFwQyxE0LXCxsdWDPwsUwh5VEyvmr_E=&xsec_source=pc_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none inline-block text-center"
                                >
                                    机位攻略
                                </a>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    3
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">白色恋人公园</h2>
                                <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                    {/* White Lovers Park img */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={zh2}
                                            alt="zh2"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                    {/* White Lovers Park map */}
                                    <div className="md:w-1/2 mt-4 md:mt-0 w-full h-64 md:h-96">
                                        <iframe
                                            title="Rin'yū Morning Market"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5827.488196517503!2d141.26912927663184!3d43.088875071134574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b281264c7cb53%3A0xc21e3cb8d40a0191!2z55m96Imy5oGL5Lq65YWs5Zut!5e0!3m2!1szh-CN!2sus!4v1737956367943!5m2!1szh-CN!2sus"
                                            className="w-full h-full rounded-lg shadow-md"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                                <h3 className="text-lg text-black mt-4">
                                    📸白色恋人公园参观攻略
                                </h3>
                                <a
                                    href="https://www.xiaohongshu.com/discovery/item/67942948000000002a000520?source=webshare&xhsshare=pc_web&xsec_token=ABAtvx-0jaULFLGPw35fI3iIG5O2kfqHbdX05Qd_JGa7o=&xsec_source=pc_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none inline-block text-center"
                                >
                                    参观攻略
                                </a>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    4
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">狸小路商业街</h2>
                                <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                    {/* Minami img1 */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={zh3}
                                            alt="zh3"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                    {/* Minami img2 */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={zh4}
                                            alt="zh4"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                </div>
                                <p className="text-gray-600 my-2">
                                    营业时间：10:00-20:00
                                </p>
                                {/* Minami map */}
                                <div className="md:w-1/2 mt-4 md:mt-0 w-full h-64 md:h-96">
                                    <iframe
                                        title="Otaru Canal"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2061.3647200886285!2d141.35393998369506!3d43.05805184265017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b294f7c4a114b%3A0xead4705c762829c6!2z54u45bCP6LevMuS4geebrg!5e0!3m2!1szh-CN!2sus!4v1737957039268!5m2!1szh-CN!2sus"
                                        className="w-full h-full rounded-lg shadow-md"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                                {/* Minami strategy */}
                                <h3 className="text-lg text-black mt-4">
                                    🚠狸小路购物攻略
                                </h3>
                                <a
                                    href="https://www.xiaohongshu.com/discovery/item/673e1477000000000702679a?source=webshare&xhsshare=pc_web&xsec_token=ABb4MLjCYqZ1T0ztTkjIhi9xYakY4kwzd_vxHDoPXx-uo=&xsec_source=pc_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none inline-block text-center"
                                >
                                    购物攻略
                                </a>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    5
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">晚餐</h2>
                                <h3 className="text-lg text-black mt-4">
                                    🍱附近餐馆
                                </h3>
                            </div>
                        </div>
                    </div>
                </CollapsibleSection>

                {/* Day 3 */}
                <CollapsibleSection id="day3" title="Day 3 小樽一日游">
                    <div className="space-y-12">
                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    1
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">札幌➡️小樽</h2>
                                <div className="mt-4">
                                    <img
                                        src={jr2}
                                        alt="jr2"
                                        className="rounded-lg shadow-md w-2/3 h-auto"
                                    />
                                </div>
                                <p className="text-gray-600 my-2">
                                    提前一天去买指定席座位！靠车厢右边
                                </p>
                                {/* JR Train img */}
                                <div className="md:w-1/2">
                                    <img
                                        src={xz0}
                                        alt="xz0"
                                        className="rounded-lg shadow-md w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    2
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">三角市场（车站旁）</h2>
                                {/* Sankaku Market img */}
                                <div className="mt-4">
                                    <img
                                        src={site1}
                                        alt="site1"
                                        className="rounded-lg shadow-md w-2/3 h-auto"
                                    />
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800 mt-4">鲮友朝市（本地人去）</h2>
                                <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                    {/* Rin'yū Morning Market img */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={site2}
                                            alt="site2"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                    {/* Rin'yū Morning Market map */}
                                    <div className="md:w-1/2 mt-4 md:mt-0 w-full h-64 md:h-96">
                                        <iframe
                                            title="Rin'yū Morning Market"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5816.346532797213!2d140.994119599463!3d43.20585505214049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0ae1b7bec490d9%3A0xecd41bc3b1947928!2sRin&#39;y%C5%AB%20Morning%20Market!5e0!3m2!1szh-CN!2sus!4v1737950309728!5m2!1szh-CN!2sus"
                                            className="w-full h-full rounded-lg shadow-md"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                                <h3 className="text-lg text-black mt-4">
                                    🦪附近餐馆
                                </h3>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    3
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">小樽运河</h2>
                                <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                    {/* Otaru Canal img1 */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={xz1}
                                            alt="xz1"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                    {/* Otaru Canal img2 */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={xz2}
                                            alt="xz2"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                </div>
                                <p className="text-gray-600 my-2">
                                    13:30前往
                                </p>
                                {/* Otaru Canal map */}
                                <div className="md:w-1/2 mt-4 md:mt-0 w-full h-64 md:h-96">
                                    <iframe
                                        title="Otaru Canal"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.4980999480995!2d140.9995426766367!3d43.19904097112731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0ae16457554cd1%3A0x4ee07ad75699721!2sOtaru%20Canal!5e0!3m2!1szh-CN!2sus!4v1737952278283!5m2!1szh-CN!2sus"
                                        className="w-full h-full rounded-lg shadow-md"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    4
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">天狗山</h2>
                                <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                    {/* Otaru Tenguyama img1 */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={tgs1}
                                            alt="tgs1"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                    {/* Otaru Tenguyama img2 */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={tgs2}
                                            alt="tgs2"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                </div>
                                <p className="text-gray-600 my-2">
                                    15:00前往
                                </p>
                                {/* Otaru Tenguyama map */}
                                <div className="md:w-1/2 mt-4 md:mt-0 w-full h-64 md:h-96">
                                    <iframe
                                        title="Otaru Canal"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d363.6885823005053!2d140.97538758930395!3d43.17783681694204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0ae0c2af8f9435%3A0xb58329d8b636bafe!2sOtaru%20Tenguyama!5e0!3m2!1szh-CN!2sus!4v1737952865179!5m2!1szh-CN!2sus"
                                        className="w-full h-full rounded-lg shadow-md"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                                {/* Otaru Tenguyama strategy */}
                                <h3 className="text-lg text-black mt-4">
                                    🚠天狗山缆车攻略
                                </h3>
                                <a
                                    href="https://www.xiaohongshu.com/discovery/item/676a8334000000001300ba26?source=webshare&xhsshare=pc_web&xsec_token=ABkaGMRaCOXmMqhN3oyN0hdhUdcEGJ9R1iazTfSZOwmyk=&xsec_source=pc_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none inline-block text-center"
                                >
                                    缆车攻略
                                </a>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    5
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">小樽➡️札幌</h2>
                                <div className="mt-4">
                                    <img
                                        src={jr3}
                                        alt="jr3"
                                        className="rounded-lg shadow-md w-2/3 h-auto"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Step 6 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    6
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">札幌晚餐</h2>
                                <h3 className="text-lg text-black mt-4">
                                    🍱附近餐馆
                                </h3>
                            </div>
                        </div>
                    </div>
                </CollapsibleSection>

                {/* Day 4 */}
                <CollapsibleSection id="day4" title="Day 4 登别温泉">
                    <div className="space-y-12">
                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    1
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">午餐</h2>
                                <p className="text-gray-600 my-2">
                                    12:00前退房
                                </p>
                                <h3 className="text-lg text-black mt-4">
                                    🍱附近餐馆
                                </h3>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    2
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">札幌➡️登别</h2>
                                <div className="mt-4">
                                    <img
                                        src={jr4}
                                        alt="jr4"
                                        className="rounded-lg shadow-md w-2/3 h-auto"
                                    />
                                </div>
                                <h3 className="text-lg text-black mt-4">
                                    🏨入住第一潼本馆酒店
                                </h3>
                                <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                    {/* hotel2 img */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={hotel2}
                                            alt="hotel2"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                    {/* hotel2 map */}
                                    <div className="md:w-1/2 mt-4 md:mt-0 w-full h-64 md:h-96">
                                        <iframe
                                            title="Rin'yū Morning Market"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.836815444534!2d141.14205927660572!3d42.49502177118058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f7566c3c3930f51%3A0x11fe10eb3ae0f278!2z56ys5LiA5rud5pys6aSo!5e0!3m2!1szh-CN!2sus!4v1737958178906!5m2!1szh-CN!2sus"
                                            className="w-full h-full rounded-lg shadow-md"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    3
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">登别地狱谷</h2>
                                <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                    {/* TV Tower img */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={db1}
                                            alt="db1"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                    {/* TV Tower map */}
                                    <div className="md:w-1/2 mt-4 md:mt-0 w-full h-64 md:h-96">
                                        <iframe
                                            title="Rin'yū Morning Market"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.7144457567724!2d141.14608527660585!3d42.497623071180456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f7566c28ae3ffff%3A0xc7b5b02adcffbecc!2z55m75Yil5Zyw54ux6LC3!5e0!3m2!1szh-CN!2sus!4v1737958378188!5m2!1szh-CN!2sus"
                                            className="w-full h-full rounded-lg shadow-md"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    4
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">晚餐</h2>
                                <h3 className="text-lg text-black mt-4">
                                    🍱附近餐馆
                                </h3>
                            </div>
                        </div>
                    </div>
                </CollapsibleSection>

                {/* Day 5 */}
                <CollapsibleSection id="day5" title="Day 5 前往东京">
                    <div className="space-y-12">
                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    1
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">登别➡️新千岁机场</h2>
                                <p className="text-gray-600 my-2">
                                    10:00前退房
                                </p>
                                <h3 className="text-lg text-black mt-4">道南巴士：登别温泉/第一潼本馆上车</h3>
                                <p className="text-red-500 my-2">
                                    提前一周在willer网站预约 or 提前一天登别温泉站买票
                                </p>
                                <div className="mt-4">
                                    <img
                                        src={bus1}
                                        alt="bus1"
                                        className="rounded-lg shadow-md w-2/3 h-auto"
                                    />
                                </div>
                                <h3 className="text-lg text-black mt-4">
                                    🚌网上预约攻略
                                </h3>
                                <a
                                    href="https://www.xiaohongshu.com/discovery/item/675a939f00000000020242a1?source=webshare&xhsshare=pc_web&xsec_token=ABNUtizwfZxKh8-XhY7TMZ_aiR-P02dc2F7AbAk9AB2NE=&xsec_source=pc_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none inline-block text-center"
                                >
                                    预约攻略
                                </a>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    2
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">新千岁机场➡️东京</h2>
                                <div className="mt-4">
                                    <img
                                        src={flightTo1}
                                        alt="flightTo1"
                                        className="rounded-lg shadow-md w-2/3 h-auto"
                                    />
                                </div>
                                <h3 className="text-lg text-black mt-4 mb-2">
                                    羽田机场➡️市区: JR京急机场线 转 山手线
                                </h3>
                                {/* route map */}
                                <div className="md:w-1/2 mt-4 md:mt-0 w-full h-64 md:h-96">
                                    <iframe
                                        title="route1"
                                        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d103778.65755881503!2d139.7039346458366!3d35.625679095709316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x601863f6ef952c63%3A0x2b7266cf7b50f5b!2z5pel5pys5Lic5Lqs6YO95aSn55Sw5Yy6576955Sw56m65rivIDMgQ2hvbWXiiJIzLCDnvr3nlLDmnLrlnLrnrKzvvJHjgIHnrKzvvJLlgJnmnLrmpbw!3m2!1d35.5499709!2d139.786427!4m5!1s0x60188d3938bfffff%3A0x1a6c884df665d3ad!2sVessel%20Inn%20Takadanobaba%20Ekimae%2C%202%20Chome-17-4%20Takadanobaba%2C%20Shinjuku%20City%2C%20Tokyo%20169-0075%E6%97%A5%E6%9C%AC!3m2!1d35.7134291!2d139.7053999!5e0!3m2!1szh-CN!2sus!4v1738016637608!5m2!1szh-CN!2sus"
                                        className="w-full h-full rounded-lg shadow-md"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                                <h3 className="text-lg text-black mt-4">
                                    🏨入住东京高田马场站前船舶酒店
                                </h3>
                                <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                    {/* hotel3 img */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={hotel3}
                                            alt="hotel3"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                    {/* hotel3 map */}
                                    <div className="md:w-1/2 mt-4 md:mt-0 w-full h-64 md:h-96">
                                        <iframe
                                            title="Hotel3"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.519951679861!2d139.70282497632817!3d35.713429072576915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d3938bfffff%3A0x1a6c884df665d3ad!2sVessel%20Inn%20Takadanobaba%20Ekimae!5e0!3m2!1szh-CN!2sus!4v1738016395373!5m2!1szh-CN!2sus"
                                            className="w-full h-full rounded-lg shadow-md"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    3
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">Shibuya Sky展望台</h2>
                                <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                    {/* site img1 */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={dj1}
                                            alt="dj1"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                    {/* site img2 */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={dj2}
                                            alt="dj2"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                </div>
                                <p className="text-red-500 my-2">
                                    webket/klook买票！提前28天晚上十一点开始放票！16:00前往
                                </p>
                                {/* site map */}
                                <div className="md:w-1/2 mt-4 md:mt-0 w-full h-64 md:h-96">
                                    <iframe
                                        title="Otaru Canal"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9167.975954824075!2d139.69608794430903!3d35.667915509643144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b6825f61ae1%3A0x6ff47ee61e522473!2z5rap6LC3c2t5!5e0!3m2!1szh-CN!2sus!4v1738017708543!5m2!1szh-CN!2sus"
                                        className="w-full h-full rounded-lg shadow-md"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>

                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    4
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">晚餐</h2>
                                <h3 className="text-lg text-black mt-4">
                                    🍱附近餐馆
                                </h3>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    5
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">歌舞技町</h2>
                                <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                    {/* site img */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={dj3}
                                            alt="dj3"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                    {/* site map */}
                                    <div className="md:w-1/2 mt-4 md:mt-0 w-full h-64 md:h-96">
                                        <iframe
                                            title="Otaru Canal"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.246843606059!2d139.70057457632748!3d35.695542772582684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd84e865c35%3A0x33418e00dfeefac!2z5pel5pys44CSMTYwLTAwMjEg5Lic5Lqs6YO95paw5a6_5Yy65q2M6Iie5LyO55S6!5e0!3m2!1szh-CN!2sus!4v1738018818695!5m2!1szh-CN!2sus"
                                            className="w-full h-full rounded-lg shadow-md"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                                <h3 className="text-lg text-black mt-4">
                                    ⚠️Tips
                                </h3>
                                <p className="text-grey-600 my-2">
                                    1️⃣ 不要去新宿歌舞伎町前【国际欢迎大道】的任何店铺【国际欢迎大道】是一条很长的人行道，两边都会站满很可爱很帅的小哥哥小姐姐，别被骗了！没有2w日币你出不来！<br />
                                    2️⃣ 不要去新宿前街的案内人，那是专坑欧美游客的，别去<br />
                                    3️⃣ 不要去新大久保公园去体验，很多朋友看了想去逛一逛，很多中国人去，套路多
                                </p>
                                <h3 className="text-lg text-black mt-4">
                                    ✅正确玩法：のぞき部屋
                                </h3>
                                <p className="text-grey-600 my-2">
                                    1️⃣ 小剧场大概是20多分钟，会有两到三个节目，就是跳舞，是把你放在一个小隔间里面，表演者看不到你大胆放心随便看！<br />
                                    2️⃣ 如果您觉得看的不过瘾的话，可以在隔间的左上方按一个小按钮，或者工作人员会在开始之前问，工作人员就会拿着（隐藏服务）过来了，价格合理，在日本也是合法的哦，放心大胆体验就完事了！
                                </p>
                            </div>
                        </div>
                    </div>
                </CollapsibleSection>

                {/* Day 6 */}
                <CollapsibleSection id="day6" title="Day 6 东京海洋迪士尼">
                    <div className="space-y-12">
                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    1
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">新宿➡️迪士尼</h2>
                                <p className="text-gray-600 my-2">
                                    新宿巴士总站乘坐直达巴士，现场买票
                                </p>
                                <a
                                    href="https://www.xiaohongshu.com/discovery/item/6698912b000000000d00e50a?source=webshare&xhsshare=pc_web&xsec_token=ABx_SnuPU4us4vlVzvfbLZQvsEQnfeMOLEQHUbHw1PYjo=&xsec_source=pc_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none inline-block text-center"
                                >
                                    乘车攻略
                                </a>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    2
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">游玩攻略</h2>
                                <div className="mt-4">
                                    <img
                                        src={dy1}
                                        alt="dy1"
                                        className="rounded-lg shadow-md w-2/3 h-auto"
                                    />
                                </div>
                                <h3 className="text-lg text-black mt-4">
                                    ⚠️Tips
                                </h3>
                                <p className="text-grey-600 my-2">
                                    1️⃣ 【开园时间】8:45-21:00，建议8:30到<br />
                                    2️⃣ 记得带水杯，餐厅可以接水！园区里水很贵！<br />
                                    3️⃣ 海洋有两个入口，北入口离梦幻奇航更近！
                                </p>
                                <div className="mt-4">
                                    <img
                                        src={dy2}
                                        alt="dy2"
                                        className="rounded-lg shadow-md w-2/3 h-auto"
                                    />
                                </div>
                                <h3 className="text-lg text-black mt-4">
                                    ⚠️预约介绍
                                </h3>
                                <p className="text-grey-600 my-2">
                                    1️⃣ SP：免费，抢到SP可以有资格去排队，抢到新园区的项目可以有资格进新园区（不然都进不去新园区）。抢到以后2个小时不能再抢<br />
                                    如果抢不到，可以在整点，15:40 19:00 19:30再尝试，会再次放票<br />
                                    2️⃣ DPA💰快通： 1500-2000日元1次，绑定VISA付费，每1h可抢1次，可约3次<br />
                                    3️⃣ 40PP🆓快通：每2h可抢1次，可约2次<br />
                                    4️⃣ ER💃预约：入园后才能抢
                                </p>
                                <div className="mt-4">
                                    <img
                                        src={dy3}
                                        alt="dy3"
                                        className="rounded-lg shadow-md w-2/3 h-auto"
                                    />
                                </div>
                                <h3 className="text-lg text-black mt-4">
                                    ⚠️游玩项目
                                </h3>
                                <h4 className="text-black mt-2">
                                    🆕SP
                                </h4>
                                <p className="text-grey-600 my-2">
                                    🔝Peter‘s Pan’s Neverland Adventure  彼得潘小飞侠梦幻岛历险记（新园区）<br />
                                    🩷 rapunzel’s lantern festival 长发公主/乐佩公主天灯盛会（新园区）<br />
                                </p>
                                <h4 className="text-black mt-2">
                                    💰DPA
                                </h4>
                                <p className="text-grey-600 my-2">
                                    🔝 Anna and Elsa’s Frozen Journey 冰雪奇缘（新园区）<br />
                                    🔝 tower of terror 古塔惊魂（鬼屋跳楼机）<br />
                                </p>
                                <h4 className="text-black mt-2">
                                    🆓40PP
                                </h4>
                                <p className="text-grey-600 my-2">
                                    🔝 rager spiriting忿怒双神（360度过山车）<br />
                                    🔝 Journey to the center of the earth 地心冒险（剧情过山车）<br />
                                    🩷 Indiana Jones印第安纳琼斯（剧情过山车）
                                </p>
                                <h4 className="text-black mt-2">
                                    其他
                                </h4>
                                <p className="text-grey-600 my-2">
                                    💛 20000 leagues under the sea海底两万里（小型潜水艇）<br />
                                    💛 3toy玩具总动员（1v1枪战）<br />
                                    💛 nemo friends sea rider尼莫4D动画电影
                                </p>
                                <div className="mt-4">
                                    <img
                                        src={dy4}
                                        alt="dy4"
                                        className="rounded-lg shadow-md w-2/3 h-auto"
                                    />
                                </div>
                                <h3 className="text-lg text-black mt-4">
                                    🎇表演
                                </h3>
                                <p className="text-grey-600 my-2">
                                    🩷巡游： 12:00和16:00<br />
                                    烟花灯光秀：20:15<br />
                                    💛动感大乐团~匠心小欢乐（ER）<br />
                                    米奇乐跳跳！同欢共舞！（ER）<br />
                                    达菲和伙伴们的非凡友谊（提前一个月预约）
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    3
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">美食攻略</h2>
                                <h3 className="text-lg text-black mt-4">
                                    美食地图
                                </h3>
                                <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                    <div className="md:w-1/2">
                                        <img
                                            src={dy5}
                                            alt="dy5"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                    <div className="md:w-1/2">
                                        <img
                                            src={dy6}
                                            alt="dy6"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                    <div className="md:w-1/2">
                                        <img
                                            src={dy7}
                                            alt="dy7"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                    <div className="md:w-1/2">
                                        <img
                                            src={dy8}
                                            alt="dy8"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-lg text-black mt-4">
                                    🍿必吃榜
                                </h3>
                                <p className="text-grey-600 my-2">
                                    🩷辣味烟熏鸡腿<br />
                                    🩷虾肉汉堡套餐<br />
                                    🩷提拉米苏三明治冰淇淋<br />
                                    💛米奇头夹心雪糕<br />
                                    💛三眼仔麻薯<br />
                                    达菲爆米花桶
                                </p>
                            </div>
                        </div>
                    </div>
                </CollapsibleSection>

                {/* Day 7 */}
                <CollapsibleSection id="day7" title="Day 7 动漫巡礼">
                    <div className="space-y-12">
                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    1
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">台场海滨公园(数码宝贝&天气之子)</h2>
                                <h3 className="text-lg text-black mt-4">
                                    🗺️巡礼路线图
                                </h3>
                                <div className="mt-4">
                                    <img
                                        src={sm0}
                                        alt="sm0"
                                        className="rounded-lg shadow-md w-2/3 h-auto"
                                    />
                                </div>
                                <p className="text-grey-600 my-2">
                                    导航到新桥站。新桥站下车后，同站换乘海鸥线。买一个新桥到台场海滨公园。到站后就是A1点。
                                </p>
                                <div className="flex-1">
                                    <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                        {/* img1 */}
                                        <div className="md:w-1/3">
                                            <img
                                                src={sm1}
                                                alt="sm1"
                                                className="rounded-lg shadow-md w-full h-auto"
                                            />
                                        </div>
                                        {/* img2 */}
                                        <div className="md:w-1/3">
                                            <img
                                                src={sm2}
                                                alt="sm2"
                                                className="rounded-lg shadow-md w-full h-auto"
                                            />
                                        </div>
                                        {/* img3 */}
                                        <div className="md:w-1/3">
                                            <img
                                                src={sm3}
                                                alt="sm3"
                                                className="rounded-lg shadow-md w-full h-auto"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                        {/* img1 */}
                                        <div className="md:w-1/3">
                                            <img
                                                src={sm4}
                                                alt="sm4"
                                                className="rounded-lg shadow-md w-full h-auto"
                                            />
                                        </div>
                                        {/* img2 */}
                                        <div className="md:w-1/3">
                                            <img
                                                src={sm5}
                                                alt="sm5"
                                                className="rounded-lg shadow-md w-full h-auto"
                                            />
                                        </div>
                                        {/* img3 */}
                                        <div className="md:w-1/3">
                                            <img
                                                src={sm6}
                                                alt="sm6"
                                                className="rounded-lg shadow-md w-full h-auto"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    2
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">午餐</h2>
                                <h3 className="text-lg text-black mt-4">
                                    🍱附近餐馆
                                </h3>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    3
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">参桥宫+新宿/须贺神社</h2>
                                <h3 className="text-lg text-black mt-4">
                                    🗺️秒速五厘米&言叶之庭&你的名字
                                </h3>
                                <div className="mt-4">
                                    <img
                                        src={xl1}
                                        alt="xl1"
                                        className="rounded-lg shadow-md w-2/3 h-auto"
                                    />
                                </div>
                                <h3 className="text-lg text-black mt-4">
                                    📌具体位置
                                </h3>
                                <a
                                    href="https://www.xiaohongshu.com/discovery/item/67619438000000001301bf4d?source=webshare&xhsshare=pc_web&xsec_token=AB6bAco3gS8KMs_IahLuHKdALVmuSDT8ooGsO35jlvWyU=&xsec_source=pc_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none inline-block text-center"
                                >
                                    位置攻略
                                </a>
                                <div className="flex-1">
                                    <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                        {/* img1 */}
                                        <div className="md:w-1/3">
                                            <img
                                                src={xl2}
                                                alt="xl2"
                                                className="rounded-lg shadow-md w-full h-auto"
                                            />
                                        </div>
                                        {/* img2 */}
                                        <div className="md:w-1/3">
                                            <img
                                                src={xl3}
                                                alt="xl3"
                                                className="rounded-lg shadow-md w-full h-auto"
                                            />
                                        </div>
                                        {/* img3 */}
                                        <div className="md:w-1/3">
                                            <img
                                                src={xl4}
                                                alt="xl4"
                                                className="rounded-lg shadow-md w-full h-auto"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                        {/* img1 */}
                                        <div className="md:w-1/3">
                                            <img
                                                src={xl5}
                                                alt="xl5"
                                                className="rounded-lg shadow-md w-full h-auto"
                                            />
                                        </div>
                                        {/* img2 */}
                                        <div className="md:w-1/3">
                                            <img
                                                src={xl6}
                                                alt="xl6"
                                                className="rounded-lg shadow-md w-full h-auto"
                                            />
                                        </div>
                                        {/* img3 */}
                                        <div className="md:w-1/3">
                                            <img
                                                src={xl7}
                                                alt="xl7"
                                                className="rounded-lg shadow-md w-full h-auto"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                        {/* img1 */}
                                        <div className="md:w-1/3">
                                            <img
                                                src={xl8}
                                                alt="xl8"
                                                className="rounded-lg shadow-md w-full h-auto"
                                            />
                                        </div>
                                        {/* img2 */}
                                        <div className="md:w-1/3">
                                            <img
                                                src={xl9}
                                                alt="xl9"
                                                className="rounded-lg shadow-md w-full h-auto"
                                            />
                                        </div>
                                        {/* img3 */}
                                        <div className="md:w-1/3">
                                            <img
                                                src={xl10}
                                                alt="xl10"
                                                className="rounded-lg shadow-md w-full h-auto"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    4
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">晚餐</h2>
                                <h3 className="text-lg text-black mt-4">
                                    🍱附近餐馆
                                </h3>
                            </div>
                        </div>
                    </div>
                </CollapsibleSection>

                {/* Day 8 */}
                <CollapsibleSection id="day8" title="Day 8 逛街买买买">
                    <div className="space-y-12">
                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    1
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">午餐</h2>
                                <h3 className="text-lg text-black mt-4">
                                    🍱附近餐馆
                                </h3>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    2
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">原宿-表参道/猫街道-南青山</h2>
                                <h3 className="text-lg text-black mt-4">
                                    🗺️路线图
                                </h3>
                                <div className="mt-4">
                                    <img
                                        src={dj4}
                                        alt="dj4"
                                        className="rounded-lg shadow-md w-2/3 h-auto"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    3
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">晚餐</h2>
                                <h3 className="text-lg text-black mt-4">
                                    🍱附近餐馆
                                </h3>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    4
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">新宿-涩谷商场</h2>
                                <div className="mt-4">
                                    <img
                                        src={dj5}
                                        alt="dj5"
                                        className="rounded-lg shadow-md w-2/3 h-auto"
                                    />
                                </div>
                                <h3 className="text-lg text-black mt-4">
                                    🛍️推荐商场
                                </h3>
                                <div className="flex flex-col md:flex-row md:space-x-4">
                                    {/* part 1 */}
                                    <div className="md:w-1/2">
                                        <h3 className="text-lg text-black mt-4">
                                            涩谷
                                        </h3>
                                        <p className="text-gray-600 my-2">
                                            1️⃣ 涩谷 109 <br />
                                            涩谷地标性建筑，年轻人当季扫货的绝佳地点 <br />
                                            2️⃣ Parco <br />
                                            车站附近的高档连锁购物商场 <br />
                                            3️⃣ 涩谷 scramble 广场 <br />
                                            2019年新开业的综合性购物中心
                                        </p>
                                    </div>
                                    {/* part 2 */}
                                    <div className="md:w-1/2">
                                        <h3 className="text-lg text-black mt-4">
                                            新宿
                                        </h3>
                                        <p className="text-gray-600 my-2">
                                            1️⃣ 伊势丹<br />
                                            东京最具代表性的百货商场，档次中等偏上<br />
                                            2️⃣ 高岛屋<br />
                                            老牌百货商场，经常会有打折活动<br />
                                            3️⃣ 丸井百货<br />
                                            综合性百货商场，价格相对平价
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CollapsibleSection>

                {/* Day 9 */}
                <CollapsibleSection id="day9" title="Day 9 富士山一日游">
                    <div className="space-y-12">
                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    1
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">新宿➡️河口湖</h2>
                                <p className="text-gray-600 my-2">
                                    11:00前退房
                                </p>
                                <h3 className="text-lg text-black mt-4">巴士：ＢＵＳＴＡ新宿上车</h3>
                                <p className="text-red-500 my-2">
                                    查看富士山能见度，提前2天在highwaybus网站 or 提前一天现场买票
                                </p>
                                <div className="mt-4">
                                    <img
                                        src={bus2}
                                        alt="bus2"
                                        className="rounded-lg shadow-md w-2/3 h-auto"
                                    />
                                </div>
                                <h3 className="text-lg text-black mt-4">
                                    🚌网上预约攻略
                                </h3>
                                <a
                                    href="https://www.xiaohongshu.com/discovery/item/67878c940000000021002465?source=webshare&xhsshare=pc_web&xsec_token=AB8ehmmkuErnRv-zXLBIQ1T8V2uGARx8q6bOpdpHQcFwo=&xsec_source=pc_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none inline-block text-center"
                                >
                                    乘车攻略
                                </a>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    2
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">午餐</h2>
                                <h3 className="text-lg text-black mt-4">
                                    🍱附近餐馆
                                </h3>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    3
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">罗森便利店</h2>
                                <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                    {/* site img */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={fss1}
                                            alt="fss1"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                    {/* site map */}
                                    <div className="md:w-1/2 mt-4 md:mt-0 w-full h-64 md:h-96">
                                        <iframe
                                            title="sitels"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.2289178989604!2d138.7622962879467!3d35.49861740211845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60195e28296a89bf%3A0x611c18cefec8cb56!2z572X5qOuIOays-WPo-a5luermeWJjQ!5e0!3m2!1szh-CN!2sus!4v1738212977991!5m2!1szh-CN!2sus"
                                            className="w-full h-full rounded-lg shadow-md"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>

                                <h3 className="text-lg text-black mt-4">
                                    线路图
                                </h3>
                                {/* route img */}
                                <div className="md:w-1/2">
                                    <img
                                        src={fss4}
                                        alt="fss4"
                                        className="rounded-lg shadow-md w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    4
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">河口湖畔</h2>
                                <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                    {/* site img */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={fss2}
                                            alt="fss2"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                    {/* site map */}
                                    <div className="md:w-1/2 mt-4 md:mt-0 w-full h-64 md:h-96">
                                        <iframe
                                            title="sitels"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.6544427482304!2d138.76403548795042!3d35.51282190210168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60195e3752af872b%3A0xfe53e78fbe247853!2sUbuya!5e0!3m2!1szh-CN!2sus!4v1738213273216!5m2!1szh-CN!2sus"
                                            className="w-full h-full rounded-lg shadow-md"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    5
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">新仓浅间神社</h2>
                                <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
                                    {/* site img */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={fss3}
                                            alt="fss3"
                                            className="rounded-lg shadow-md w-full h-auto"
                                        />
                                    </div>
                                    {/* site map */}
                                    <div className="md:w-1/2 mt-4 md:mt-0 w-full h-64 md:h-96">
                                        <iframe
                                            title="sitels"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11244.940654104645!2d138.79874522344946!3d35.50506577124208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019674cda070c6b%3A0xdc6154ac26eed07d!2z5paw5LuT5a-M5aOr5rWF6Ze056We56S-!5e0!3m2!1szh-CN!2sus!4v1738213328297!5m2!1szh-CN!2sus"
                                            className="w-full h-full rounded-lg shadow-md"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 6 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    6
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">晚餐</h2>
                                <h3 className="text-lg text-black mt-4">
                                    🍱附近餐馆
                                </h3>
                            </div>
                        </div>
                    </div>
                </CollapsibleSection>

                {/* Day 10 */}
                <CollapsibleSection id="day10" title="Day 10 返程">
                    <div className="space-y-12">
                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    1
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">午餐</h2>
                                <h3 className="text-lg text-black mt-4">
                                    🍱附近餐馆
                                </h3>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-center md:flex-col md:items-center md:mr-4 mb-4 md:mb-0">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-700 text-white font-bold mr-2 md:mr-0 md:mb-2">
                                    2
                                </div>
                                <div className="hidden md:block md:flex-1 w-px bg-gray-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">河口湖➡️羽田机场</h2>
                                <h3 className="text-lg text-black mt-4">
                                    河口湖➡️新宿
                                </h3>
                                <div className="mt-4">
                                    <img
                                        src={jr5}
                                        alt="jr5"
                                        className="rounded-lg shadow-md w-2/3 h-auto"
                                    />
                                </div>

                                <p className="text-gray-600 my-2">
                                    富士回游号，提前2天买票！
                                </p>
                                <h3 className="text-lg text-black mt-4">
                                    🚄JR买票攻略
                                </h3>
                                <a
                                    href="https://www.xiaohongshu.com/discovery/item/6724dd40000000001a01da2b?source=webshare&xhsshare=pc_web&xsec_token=AB-AWunVpTG2PmvMSiBID9crqx6MSsN4E2PrjOFJ6Sss0=&xsec_source=pc_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none inline-block text-center"
                                >
                                    买票攻略
                                </a>
                                <h3 className="text-lg text-black mt-4">
                                    新宿➡️羽田机场
                                </h3>
                                <h3 className="text-lg text-black mt-4">
                                    🚌大巴买票攻略
                                </h3>
                                <a
                                    href="https://www.xiaohongshu.com/discovery/item/65f58cc3000000001202273a?source=webshare&xhsshare=pc_web&xsec_token=ABqK-exQQ9xhNpDuQy0VOevK85M2rIPdxEtlNity8F6KM=&xsec_source=pc_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none inline-block text-center"
                                >
                                    买票攻略
                                </a>
                            </div>
                        </div>
                    </div>
                </CollapsibleSection>
            </main>
        </div>
    );
}