import { Link } from "react-router-dom";

const navigation = [
    { name: "主页", href: "/" },
    { name: "行程篇", href: "/schedules" },
    { name: "美食篇", href: "/foods" },
    { name: "必备清单", href: "/lists" },
];

export default function Navbar() {
    return (
        <div className="bg-gray-900">
            <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 bg-opacity-90 shadow-xl border-b border-gray-700">
                <nav className="relative flex items-center p-4 sm:p-6 lg:p-8" aria-label="Global">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex gap-x-4 sm:gap-x-8 lg:gap-x-12">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-base sm:text-lg lg:text-2xl font-semibold leading-6 text-white"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

