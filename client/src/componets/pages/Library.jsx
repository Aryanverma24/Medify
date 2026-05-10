    import React from 'react'
    import data from "../../data/MedifyData.json";
    import LibraryCard from '../comman/LibraryCard';

    const Library = () => {
        const libraries = data?.libraries;
    return (
        <>
            <h2 className="text-2xl text-center font-semibold text-gray-700">Top Libraries</h2>
            {libraries?.map((lib) => (
                <LibraryCard key={lib.id} lib={lib} />
            ))}
            </>
    )
    }

    export default Library