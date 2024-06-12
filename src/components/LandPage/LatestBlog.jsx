import React, { useState } from 'react';
import nature from '../../assests/images/nature.png';

const LatestBlogCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(4); // Initial number of cards to show
    const cards = [
        {
            image: nature,
            title: 'What can we learn today?',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
        },
        {
            image: nature,
            title: 'What can we learn today?',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
        },
        {
            image: nature,
            title: 'What can we learn today?',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
        },
        {
            image: nature,
            title: 'What can we learn today?',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
        },
        {
            image: nature,
            title: 'What can we learn today?',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
        },
        {
            image: nature,
            title: 'What can we learn today?',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
        },
    ];

    const handleNext = () => {
        const nextIndex = currentIndex;
        if (nextIndex >= cards.length - cardsToShow + 1) {
            // If next index exceeds available cards, show additional cards
            setCardsToShow(cardsToShow + 1);
        }
        setCurrentIndex(nextIndex % cards.length);
    };

    return (
        <div className=' bg-customBackground'>
            <h1 className=' px-28 text-bold'>Latest Blog</h1>
            <div className="flex items-center justify-center  relative">
                <div className="max-w-screen-lg  overflow-hidden">
                    <div className="flex space-x-4">
                        {cards.slice(currentIndex, currentIndex + cardsToShow).map((card, index) => (
                            <div key={index} className={`flex-none w-1/4 bg-white rounded-lg p-4 overflow-hidden shadow-md relative ${index === 1 ? 'scale-105' : ''}`}>
                                <img src={card.image} alt="Nature" className=" h-35 object-cover" />
                                <div className="absolute top-0 right-0 p-4">
                                    <button className="bg-textColor text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out">
                                        Nature
                                    </button>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                    <p className="text-gray-700">{card.description}</p>
                                </div>

                            </div>
                        ))}
                        <button className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-200 rounded-full p-2" onClick={handleNext}>
                            &gt;
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LatestBlogCarousel;


