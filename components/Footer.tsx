
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white mt-16">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
                <p>This interactive report was generated based on public documentation from Cloudflare.</p>
                <p className="text-sm text-gray-400 mt-2">All data and capabilities are subject to change. Please refer to the official Cloudflare developer documentation for the most current information.</p>
            </div>
        </footer>
    );
};
