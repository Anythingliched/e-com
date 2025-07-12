"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log('Searching for:', searchTerm);
        // Add your search logic here
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <div className="relative flex items-center bg-white rounded-full shadow-md overflow-hidden">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 px-5 py-3 border-0 outline-none text-gray-700 placeholder-gray-400"
                    placeholder="Search..."
                    aria-label="Search"
                />
                <button
                    onClick={handleSearch}
                    className="px-5 py-3 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 border-0 outline-none"
                    type="button"
                    aria-label="Search button"
                >
                    <Search className="w-5 h-5 text-gray-600" />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;