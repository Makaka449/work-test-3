import React, { useState, useRef,  } from 'react';
import '../styles/AboutAs.scss';

const AboutAs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            <h2>Про нас</h2>
            <div className="accordion-item">
                <div className="accordion-title" onClick={() => handleToggle(0)}>
                    <h3>Наша історія</h3>
                    <span>{activeIndex === 0 ? '▲' : '▼'}</span>
                </div>
                <div
                    className={`accordion-content ${activeIndex === 0 ? 'active' : ''}`}
                    ref={contentRef}
                >
                    <p>Ми почали свою діяльність у 2010 році з невеликої команди ентузіастів...</p>
                </div>
            </div>
            <div className="accordion-item">
                <div className="accordion-title" onClick={() => handleToggle(1)}>
                    <h3>Наша місія</h3>
                    <span>{activeIndex === 1 ? '▲' : '▼'}</span>
                </div>
                <div
                    className={`accordion-content ${activeIndex === 1 ? 'active' : ''}`}
                    ref={contentRef}
                >
                    <p>Наша місія полягає в тому, щоб зробити світ кращим через інновації...</p>
                </div>
            </div>
            <div className="accordion-item">
                <div className="accordion-title" onClick={() => handleToggle(2)}>
                    <h3>Наші цінності</h3>
                    <span>{activeIndex === 2 ? '▲' : '▼'}</span>
                </div>
                <div
                    className={`accordion-content ${activeIndex === 2 ? 'active' : ''}`}
                    ref={contentRef}
                >
                    <p>Ми цінуємо чесність, прозорість та відданість своїй справі...</p>
                </div>
            </div>
        </div>
    );
};

export default AboutAs;
