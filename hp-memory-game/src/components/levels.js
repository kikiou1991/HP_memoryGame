import React from 'react';

const Levels = ({ onChangeDifficulty, setIsActive, isActive }) => {
    const setDifficulty = [
        { title: 'Easy' },
        { title: 'Hard' },
    ];

    const handleButtonClick = (title) => {
        onChangeDifficulty(title);
    };

    return (
        <>
            {setDifficulty.map((link, index) => (
                <button
                    key={index}
                    className="diff-button"
                    onClick={() => handleButtonClick(link.title)}
                >
                    {link.title}
                </button>
            ))}
        </>
    );
};

export default Levels;
