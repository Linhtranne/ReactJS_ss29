import { useState } from 'react';

const Ex7 = () => {
    const [arr, setArr] = useState<number[]>([]);

    const handleAddNumber = () => {
        const randomNumber = Math.floor(Math.random() * 10);
        setArr([...arr, randomNumber]);
    };

    return (
        <div>
            <p>Mảng số{'['}{arr.join(', ')}{']'}</p> 
            <button onClick={handleAddNumber}>Add element</button>
        </div>
    );
};
export default Ex7;
