import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white text-black py-3">
            <div className="container flex justify-end mx-auto px-4 space-x-4">
                <div className="text-center text-sm">
                    <p className="text-gray-600">
                        本网站仅供自己使用，非商业用途。
                    </p>
                </div>
                <div className="text-center text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} LU(Amit) ZHANG
                </div>
            </div>
        </footer>
    );
}