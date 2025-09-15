import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
        <div className="bg-[#141617] min-h-screen text-white">
            <main className="pt-28 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Decorative Element */}
                        <div className="mb-16 text-gray-600 text-9xl font-bold select-none">
                            ¯\_(ツ)_/¯
                        </div>
                        {/* Message */}
                        <h2 className="text-3xl font-bold mb-4">
                            Page Not Found
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Oops! The page you're looking for doesn't exist or has been moved.
                        </p>
                        
                        {/* Back to Home Button */}
                        <Link 
                            to="/" 
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-300 font-medium"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NotFound;
