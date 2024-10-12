import React from 'react';

const SearchCard = () => {
    const centers = [
        {
            name: 'ABCD Deaddiction And Wellness Center',
            description: 'A drug and alcohol deaddiction and wellness center using a holistic approach to addiction treatment without the use of brute force or suppression.',
            location: 'AECS Layout, Kundalahalli',
            city: 'Bangalore',
            image: 'https://www.addictionresource.net/wp-content/uploads/2022/08/Untitled-8-7-1024x575.jpg.webp',
        },
        {
            name: 'ABCD Deaddiction And Wellness Center',
            description: 'A drug and alcohol deaddiction and wellness center using a holistic approach to addiction treatment without the use of brute force or suppression.',
            location: 'AECS Layout, Kundalahalli',
            city: 'Bangalore',
            image: 'https://rehabcenters.com/wp-content/uploads/rehab-4.jpg',
        },
        {
            name: 'ABCD Deaddiction And Wellness Center',
            description: 'A drug and alcohol deaddiction and wellness center using a holistic approach to addiction treatment without the use of brute force or suppression.',
            location: 'AECS Layout, Kundalahalli',
            city: 'Bangalore',
            image: 'https://www.re-thinkingthefuture.com/rtf-fresh-perspectives/a1907-10-things-to-remember-while-designing-rehabilitation-centres/attachment/a1907-10-things-to-remember-while-designing-rehabilitation-center-image-8/',
        },
    ];

    return (
        <div className="container mx-auto py-10">
            <div className="space-y-10">
                {centers.map((center, index) => (
                    <div
                        key={index}
                        className="searchcard max-w-full md:max-w-6xl mx-auto flex flex-col md:flex-row transform transition hover:scale-105 hover:shadow-xl duration-300 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
                    >
                        <div className="image-container h-56 bg-gray-200 flex items-center justify-center md:h-auto md:w-1/3">
                            <img className="object-cover h-full w-full" src={center.image} alt={center.name} />
                        </div>
                        <div className="p-4 flex flex-col justify-between md:w-2/3">
                            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">{center.name}</h2>
                            <p className="text-gray-600 mb-4 text-sm md:text-base">{center.description}</p>
                            <div>
                                <h5 className="text-gray-500 font-medium text-sm md:text-base">{center.location}</h5>
                                <h4 className="text-lg md:text-xl font-bold text-blue-600">{center.city}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchCard;
