
import React, { useState, useEffect, useRef } from 'react';

interface NavLink {
    href: string;
    label: string;
}

interface HeaderProps {
    navLinks: NavLink[];
    sectionIds: string[];
}

export const Header: React.FC<HeaderProps> = ({ navLinks, sectionIds }) => {
    const [activeSection, setActiveSection] = useState<string>('');
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            if (visibleSection) {
                setActiveSection(visibleSection.id);
            }
        }, { threshold: 0.4, rootMargin: '-80px 0px -40% 0px' });

        const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
        sections.forEach(section => {
            if (section) observer.current?.observe(section);
        });

        return () => {
            sections.forEach(section => {
                if (section) observer.current?.unobserve(section);
            });
        };
    }, [sectionIds]);

    return (
        <header id="header" className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="font-bold text-xl text-gray-800">CF Platforms Report</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`nav-link text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
