import { useState } from 'react';

const RandomGender = () => {
    const genders = ['Nam', 'Nữ', '???????'];
    const [currentGender, setCurrentGender] = useState('Nam');

    const handleRandomGender = () => {
        const randomIndex = Math.floor(Math.random() * genders.length);
        setCurrentGender(genders[randomIndex]);
    };

    return (
        <div>
            <p>Giới tính: {currentGender}</p>
            <button onClick={handleRandomGender}>Random gender</button>
        </div>
    );
};

export default RandomGender;