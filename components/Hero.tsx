
import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section id="hero" className="text-center py-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
                Cloudflare Workers for Platforms
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
                An interactive report on leveraging the edge for scalable, performant, and AI-powered applications.
            </p>
        </section>
    );
};
