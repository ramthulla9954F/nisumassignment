import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm mb-4 sm:mb-0">&copy; 2024 Your Company. All rights reserved.</p>
                <ul className="flex justify-center sm:justify-end space-x-4">
                    <li><a href="#" className="hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="hover:text-gray-300">About</a></li>
                    <li><a href="#" className="hover:text-gray-300">Services</a></li>
                    <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
