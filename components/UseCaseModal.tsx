
import React, { useEffect } from 'react';
import { UseCase } from '../types';

interface UseCaseModalProps {
    useCase: UseCase | null;
    onClose: () => void;
}

export const UseCaseModal: React.FC<UseCaseModalProps> = ({ useCase, onClose }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    if (!useCase) {
        return null;
    }

    const show = !!useCase;

    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={onClose}
        >
            <div 
                className={`bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6">
                    <div className="flex justify-between items-start">
                        <h2 className="text-2xl font-bold text-gray-900">{useCase.title}</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
                    </div>
                    <div className="flex flex-wrap gap-2 my-4">
                        {useCase.tags.map(tag => (
                            <span key={tag} className="text-xs font-medium py-1 px-3 rounded-full tag">{tag}</span>
                        ))}
                    </div>
                    <p className="text-gray-700">{useCase.description}</p>
                </div>
            </div>
        </div>
    );
};
