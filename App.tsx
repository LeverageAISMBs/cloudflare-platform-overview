
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Capabilities } from './components/Capabilities';
import { WorkersAI } from './components/WorkersAI';
import { UseCases } from './components/UseCases';
import { Implementation } from './components/Implementation';
import { Footer } from './components/Footer';
import { UseCaseModal } from './components/UseCaseModal';
import { UseCase } from './types';
import { NAV_LINKS } from './constants';

const App: React.FC = () => {
    const [activeUseCase, setActiveUseCase] = useState<UseCase | null>(null);

    const handleOpenModal = (useCase: UseCase) => {
        setActiveUseCase(useCase);
    };

    const handleCloseModal = () => {
        setActiveUseCase(null);
    };

    const sectionIds = NAV_LINKS.map(link => link.href.substring(1));

    return (
        <>
            <Header navLinks={NAV_LINKS} sectionIds={sectionIds} />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Hero />
                <Overview />
                <Capabilities />
                <WorkersAI />
                <UseCases onCardClick={handleOpenModal} />
                <Implementation />
            </main>
            <Footer />
            <UseCaseModal useCase={activeUseCase} onClose={handleCloseModal} />
        </>
    );
};

export default App;
