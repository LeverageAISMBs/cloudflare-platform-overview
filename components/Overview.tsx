
import React from 'react';

const benefitCards = [
    { icon: '⚡️', title: 'Global Scale & Performance', description: "Deploy code and models that run across Cloudflare's entire global network, bringing computation and AI inference milliseconds away from your users." },
    { icon: '💰', title: 'Reduced Complexity & Cost', description: 'Eliminate the need for managing complex infrastructure. Pay-as-you-go pricing for serverless compute and AI means you only pay for what you use.' },
    { icon: '🛡️', title: 'Instant Security', description: "Every application and custom domain added to your platform is automatically protected by Cloudflare's industry-leading DDoS mitigation and WAF." },
    { icon: '🎨', title: 'Full Customization', description: 'Provide fully white-labeled experiences for your customers with custom domains, flexible routing logic, and per-tenant configurations managed via code.' },
];

const BenefitCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const ArchitectureComparison: React.FC = () => (
    <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-center mb-6">Architectural Shift: From Centralized Cloud to the Edge</h3>
        <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 p-6 border-2 border-red-300 rounded-lg bg-red-50">
                <h4 className="font-bold text-lg mb-2 text-red-800">Traditional Centralized Architecture</h4>
                <p className="text-red-700 mb-4">All user requests travel to a single or few regional data centers, leading to high latency for distant users.</p>
                <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between"><span>User (Asia)</span><span className="text-red-500 font-mono">➝ 250ms</span><span>US-East-1</span></div>
                    <div className="flex items-center justify-between"><span>User (Europe)</span><span className="text-yellow-600 font-mono">➝ 120ms</span><span>US-East-1</span></div>
                    <div className="flex items-center justify-between"><span>User (US)</span><span className="text-green-600 font-mono">➝ 20ms</span><span>US-East-1</span></div>
                </div>
            </div>
            <div className="flex-1 p-6 border-2 border-green-300 rounded-lg bg-green-50">
                <h4 className="font-bold text-lg mb-2 text-green-800">Cloudflare's Edge Architecture</h4>
                <p className="text-green-700 mb-4">Requests are routed to the nearest of 300+ data centers, where your code runs, dramatically reducing latency for all users.</p>
                 <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between"><span>User (Asia)</span><span className="text-green-600 font-mono">➝ 30ms</span><span>Nearest PoP</span></div>
                    <div className="flex items-center justify-between"><span>User (Europe)</span><span className="text-green-600 font-mono">➝ 30ms</span><span>Nearest PoP</span></div>
                    <div className="flex items-center justify-between"><span>User (US)</span><span className="text-green-600 font-mono">➝ 30ms</span><span>Nearest PoP</span></div>
                </div>
            </div>
        </div>
    </div>
);

export const Overview: React.FC = () => {
    return (
        <section id="overview" className="py-16 scroll-mt-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Platform Overview</h2>
                <p className="mt-2 text-lg text-gray-600">This section breaks down what Cloudflare for Platforms is and the core problems it solves for SaaS businesses. It's about empowering developers to build on Cloudflare's network, inheriting its speed, security, and scale.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {benefitCards.map(card => <BenefitCard key={card.title} {...card} />)}
            </div>
            <ArchitectureComparison />
        </section>
    );
};
