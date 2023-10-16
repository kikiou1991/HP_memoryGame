import React from 'react';

const Levels = ({ onChangeDifficulty }) => {
    const setDifficulty = [
        { title: 'Easy' },
        { title: 'Hard' },
    ];

    return (
        <>
            {setDifficulty.map((link, index) => (
                <button
                    key={index}
                    className="diff-button"
                    onClick={() => onChangeDifficulty(link.title)}
                >
                    {link.title}
                </button>
            ))}
        </>
    );
};

export default Levels;
