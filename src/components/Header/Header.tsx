import React from 'react';

function Header(): React.ReactElement {
    return (
        <div className="top-0 z-50 sticky bg-white shadow-md">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            className="w-auto h-10"
                            src="/logo.svg" // Replace with your logo path
                            alt="Your Logo"
                        />
                    </div>

                    {/* Navigation */}
                    <nav>
                        <ul className="flex space-x-6 font-medium text-gray-700">
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">About</li>
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">Tap</li>
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">Prod</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
