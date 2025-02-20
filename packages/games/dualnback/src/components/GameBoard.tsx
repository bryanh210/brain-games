'use client';

import { useState } from 'react';

export default function GameBoard() {
    const [isHighlighted, setIsHighlighted] = useState(false);

    return (
        <div>
            <button 
                onClick={() => setIsHighlighted(!isHighlighted)}
                className={`
                    px-4 py-2 rounded-lg transition-colors
                    ${isHighlighted ? 'bg-blue-500 text-white' : 'bg-gray-200'}
                `}
            >
                Click me to change color!
            </button>
            <p className="mt-2">
                Button is {isHighlighted ? 'highlighted' : 'not highlighted'}
            </p>
        </div>
    );
}