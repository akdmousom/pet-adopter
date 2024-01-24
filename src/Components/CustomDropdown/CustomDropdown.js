"use client"
import { useState } from 'react';

const CustomDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const options = [
        { value: '', label: 'All Categories' },
        { value: 'dog', label: 'Dog' },
        { value: 'cat', label: 'Cat' },
        { value: 'rabbit', label: 'Rabbit' },
        { value: 'bird', label: 'Bird' },
    ];

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (value) => {
        // Handle the selected option value as needed
        console.log('Selected:', value);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <div
                className="p-2 border rounded-md cursor-pointer"
                onClick={handleToggle}
            >
                All Categories
            </div>

            {isOpen && (
                <div className="absolute mt-2 bg-white border rounded-md">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="p-2 duration-[1000ms] transform hover:bg-[#FA524F] hover:text-white cursor-pointer"
                            onClick={() => handleOptionClick(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
