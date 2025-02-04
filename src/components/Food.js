import React, { useState } from "react";
import {
    MapPinIcon,
    SunIcon,
    MoonIcon,
} from "@heroicons/react/20/solid";
import restaurants from "./restaurants"
import foodImages from "./foodImages";

export default function RestaurantRecommendations() {
    // Group by category by default
    const [filterMode, setFilterMode] = useState("category");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Group restaurant data according to the current filtering pattern
    const groupedRestaurants = restaurants.reduce((groups, restaurant) => {
        const key = filterMode === "region" ? restaurant.region : restaurant.category;
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(restaurant);
        return groups;
    }, {});

    return (
        <div className="relative bg-white py-16 lg:py-24">
            {/* Page heading */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-row justify-between items-center">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-bold text-gray-900 sm:text-6xl">
                            必吃榜
                        </h2>
                        <p className="my-6 text-lg text-gray-600 flex flex-col sm:flex-row items-center gap-2">
                            <span className="flex items-center">
                                <SunIcon className="w-7 h-7 text-indigo-500 mr-2" />
                                中午营业
                            </span>
                            <span className="flex items-center">
                                <MoonIcon className="w-7 h-7 text-indigo-500 mr-2 sm:ml-4" />
                                晚上营业
                            </span>
                        </p>
                    </div>

                    {/* Filter button (large screen display) */}
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button
                            onClick={() => setFilterMode("region")}
                            className={`w-full sm:w-auto px-4 py-2 rounded ${filterMode === "region"
                                ? "bg-indigo-500 text-white"
                                : "bg-gray-200 text-gray-700"
                                }`}
                        >
                            按地区分类
                        </button>
                        <button
                            onClick={() => setFilterMode("category")}
                            className={`w-full sm:w-auto px-4 py-2 rounded ${filterMode === "category"
                                ? "bg-indigo-500 text-white"
                                : "bg-gray-200 text-gray-700"
                                }`}
                        >
                            按种类分类
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu button displayed under small screen */}
            <button
                className="lg:hidden fixed top-1 left-2 z-50 p-2 bg-gray-700 text-white rounded shadow"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            {/* Sidebar */}
            <aside
                onClick={() => {
                    if (window.innerWidth < 1024) {
                        setSidebarOpen(false);
                    }
                }}
                className={`fixed top-16 bottom-0 left-0 z-40 w-38 bg-white p-4 rounded-r shadow-md border-r border-gray-200 ${sidebarOpen ? "block" : "hidden"
                    } lg:block`}
            >
                <nav className="sticky top-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">快速定位</h4>
                    <ul className="space-y-2">
                        {Object.keys(groupedRestaurants).map((group) => (
                            <li key={group}>
                                <a
                                    href={`#${group.replace(/\s+/g, "-")}`}
                                    className="block px-2 py-1 rounded hover:bg-indigo-50 hover:text-indigo-500 text-gray-700"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (window.innerWidth < 1024) {
                                            setSidebarOpen(false);
                                        }
                                    }}
                                >
                                    {group}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Main body */}
            <main className="lg:ml-auto">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mx-40">
                    <div className="space-y-16">
                        {Object.keys(groupedRestaurants).map((group) => (
                            <div key={group} id={group.replace(/\s+/g, "-")}>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {group}
                                </h3>
                                {/* When sorted by category, show 3 pictures of food */}
                                {filterMode === "category" && foodImages[group] && (
                                    <div className="grid grid-cols-3 gap-4 mb-8">
                                        {foodImages[group].map((imgObj, index) => {
                                            const imgUrl = Object.values(imgObj)[0];
                                            return (
                                                <img
                                                    key={index}
                                                    src={imgUrl}
                                                    alt={`Food ${index + 1}`}
                                                    className="w-full aspect-[3/4] object-cover rounded"
                                                />
                                            );
                                        })}
                                    </div>
                                )}
                                {/* Restaurant card area */}
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full mx-auto md:w-full">
                                    {groupedRestaurants[group].map((restaurant) => (
                                        <div
                                            key={restaurant.name}
                                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                                        >
                                            {/* Top: Icon + restaurant name */}
                                            <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                                                <restaurant.icon
                                                    className="h-7 w-7 text-indigo-500"
                                                    aria-hidden="true"
                                                />
                                                <h3 className="text-xl font-semibold text-gray-900">
                                                    {restaurant.name}
                                                </h3>
                                            </div>
                                            {/* Bottom half: left and right columns */}
                                            <div className="flex p-4">
                                                {/* Left: Picture of the restaurant */}
                                                <img
                                                    className="w-32 h-32 object-cover rounded"
                                                    src={restaurant.image}
                                                    alt={restaurant.name}
                                                />
                                                {/* Right: Introduction and buttons */}
                                                <div className="ml-4 flex flex-col" >
                                                    <div>
                                                        <p className="text-gray-600" style={{ minHeight: "50px" }}>
                                                            {restaurant.description}
                                                        </p>
                                                        <p className="mt-auto text-red-500 font-bold">
                                                            ￥{restaurant.price}/人
                                                        </p></div>
                                                    <div className="mt-2 flex gap-1 md:gap-4"> {/* 修改gap间距 */}
                                                        <a
                                                            href={restaurant.locationUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-2 md:px-3 rounded text-sm md:text-base" // 响应式padding和字体
                                                        >
                                                            <MapPinIcon className="h-5 w-5 mr-1 sm:block" />
                                                            <span className="whitespace-nowrap">{restaurant.region}</span>
                                                        </a>
                                                        {!restaurant.reservationUrl ? (
                                                            <button
                                                                disabled
                                                                className="bg-gray-300 text-gray-600 font-semibold py-2 px-2 md:px-3 rounded cursor-not-allowed text-sm md:text-base whitespace-nowrap" // 禁止换行
                                                            >
                                                                walk-in
                                                            </button>
                                                        ) : (
                                                            <a
                                                                href={restaurant.reservationUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-5 md:px-6 rounded text-sm md:text-base whitespace-nowrap" // 响应式padding
                                                            >
                                                                预订
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
