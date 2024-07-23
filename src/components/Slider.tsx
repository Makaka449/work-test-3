import React, { useState, useEffect } from 'react';
import '../styles/Slider.scss';

const slides = [
    {
        image: 'https://via.placeholder.com/800x300',
        text: 'It is important to have a very good customer service. 1'
    },
    {
        image: 'https://via.placeholder.com/800x300',
        text: 'It is important to have a very good customer service. 2'
    },
    {
        image: 'https://via.placeholder.com/800x300',
        text: 'It is important to have a very good customer service. 3'
    },
    {
        image: 'https://via.placeholder.com/800x300',
        text: 'It is important to have a very good customer service. 4'
    },
    {
        image: 'https://via.placeholder.com/800x300',
        text: 'It is important to have a very good customer service. 5'
    },
];

const Slider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="slider">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="text">{slide.text}</div>
                </div>
            ))}
        </section>
    );
};

export default Slider;

