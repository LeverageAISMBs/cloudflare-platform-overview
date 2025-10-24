
import React, { useState } from 'react';
import { CAPABILITIES_DATA } from '../constants';

type CapabilityID = 'workers' | 'domains' | 'routing' | 'storage';

export const Capabilities: React.FC = () => {
    const [activeTab, setActiveTab] = useState<CapabilityID>('workers');

    return (
        <section id="capabilities" className="py-16 scroll-mt-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Core Platform Capabilities</h2>
                <p className="mt-2 text-lg text-gray-600">This section showcases the fundamental building blocks of the platform. These are the tools you can use to construct sophisticated, multi-tenant applications entirely on Cloudflare's developer platform.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                        <ul className="space-y-2">
                            {CAPABILITIES_DATA.map(cap => (
                                <li key={cap.id}>
                                    <button
                                        onClick={() => setActiveTab(cap.id as CapabilityID)}
                                        className={`w-full text-left p-4 rounded-lg font-semibold transition-colors ${activeTab === cap.id ? 'bg-orange-100 text-orange-800' : 'hover:bg-orange-100/50'}`}
                                    >
                                        {cap.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-2/3">
                        {CAPABILITIES_DATA.map(cap => (
                            <div key={cap.id} className={`${activeTab === cap.id ? '' : 'hidden'}`}>
                                <h3 className="text-2xl font-bold mb-4">{cap.tabContent.heading}</h3>
                                <p className="text-gray-700 mb-4">{cap.tabContent.description}</p>
                                <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-800">
                                    <strong>Key Features:</strong>
                                    <ul className="list-disc list-inside mt-2">
                                        {cap.tabContent.features.map((feature, index) => (
                                            <li key={index} dangerouslySetInnerHTML={{ __html: feature }}></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
