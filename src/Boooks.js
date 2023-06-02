import React from 'react';

const Boooks = ({ boooks, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <ul className='list-group mb-4'>
            {boooks.map(boks => (
                <li key={boks.id} className='list-group-item'>
                    {boks.title}
                </li>
            ))}
        </ul>
    );
};

export default Boooks;