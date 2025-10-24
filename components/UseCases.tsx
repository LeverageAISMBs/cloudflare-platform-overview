
import React from 'react';
import { USE_CASES_DATA } from '../constants';
import { UseCase } from '../types';

interface UseCasesProps {
    onCardClick: (useCase: UseCase) => void;
}

const UseCaseCard: React.FC<{ useCase: UseCase; onClick: () => void }> = ({ useCase, onClick }) => (
    <div 
        className="bg-white p-6 rounded-xl shadow-lg cursor-pointer transform hover:-translate-y-1 transition-transform"
        onClick={onClick}
    >
        <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{useCase.description.substring(0, 100)}...</p>
        <div className="flex flex-wrap gap-2">
            {useCase.tags.map(tag => (
                <span key={tag} className="text-xs font-medium py-0.5 px-2 rounded-full tag">{tag}</span>
            ))}
        </div>
    </div>
);

export const UseCases: React.FC<UseCasesProps> = ({ onCardClick }) => {
    return (
        <section id="use-cases" className="py-16 scroll-mt-16">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Real-World Use Cases</h2>
                <p className="mt-2 text-lg text-gray-600">How are businesses using Cloudflare for Platforms? This section provides concrete examples of how the features can be combined to build innovative products and solve common challenges for SaaS companies. Click on a card to learn more.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {USE_CASES_DATA.map(useCase => (
                    <UseCaseCard key={useCase.title} useCase={useCase} onClick={() => onCardClick(useCase)} />
                ))}
            </div>
        </section>
    );
};
