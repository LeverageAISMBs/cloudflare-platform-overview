
import React, { useState, useMemo } from 'react';
import { AI_MODELS_DATA } from '../constants';
import { AIPerformanceChart } from './AIPerformanceChart';
import { AIModel } from '../types';

const AIModelCard: React.FC<{ model: AIModel }> = ({ model }) => (
    <div className="border p-4 rounded-lg bg-gray-50/50">
        <h4 className="font-semibold text-gray-800 break-all">{model.name}</h4>
        <span className="text-xs font-medium py-0.5 px-2 rounded-full tag">{model.type}</span>
        <p className="mt-2 text-sm text-gray-600">{model.description}</p>
    </div>
);

export const WorkersAI: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    
    const filterButtons = ['All Models', 'Text Generation', 'Translation', 'Embeddings', 'Image Classification'];
    const filterMapping: { [key: string]: string } = {
        'All Models': 'all',
        'Text Generation': 'Text Generation',
        'Translation': 'Translation',
        'Embeddings': 'Embeddings',
        'Image Classification': 'Image Classification'
    };

    const filteredModels = useMemo(() => {
        if (activeFilter === 'all') {
            return AI_MODELS_DATA;
        }
        return AI_MODELS_DATA.filter(model => model.type === activeFilter);
    }, [activeFilter]);

    return (
        <section id="ai" className="py-16 scroll-mt-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Workers AI: Inference at the Edge</h2>
                <p className="mt-2 text-lg text-gray-600">Workers AI is a groundbreaking capability that allows you to run popular machine learning and large language models (LLMs) directly from Cloudflare Workers. This section explores the available models and the significant performance and cost advantages of this approach.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
                <h3 className="text-2xl font-bold mb-6 text-center">AI Model Explorer</h3>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                     {filterButtons.map(filterName => {
                        const filterValue = filterMapping[filterName];
                        return (
                            <button
                                key={filterName}
                                onClick={() => setActiveFilter(filterValue)}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${activeFilter === filterValue ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                            >
                                {filterName}
                            </button>
                        );
                    })}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredModels.map(model => (
                        <AIModelCard key={model.name} model={model} />
                    ))}
                </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-6">Edge AI vs. Traditional Cloud AI</h3>
                <div className="relative w-full max-w-[800px] mx-auto h-[40vh] max-h-[450px]">
                    <AIPerformanceChart />
                </div>
                <p className="text-center mt-4 text-gray-600">This chart illustrates the typical advantages of running AI inference on Cloudflare's edge network compared to a traditional centralized cloud provider. Lower latency is achieved by processing requests closer to the user, and simplified, pay-as-you-go pricing often results in lower total costs.</p>
            </div>
        </section>
    );
};
