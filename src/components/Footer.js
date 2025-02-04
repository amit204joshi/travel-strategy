import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white text-black py-3">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center sm:justify-end items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 text-center">
                    本网站仅供自己使用，非商业用途。
                </p>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 text-center">
                    &copy; {new Date().getFullYear()} LU(Amit) ZHANG
                </div>
            </div>
        </footer>
    );
}
