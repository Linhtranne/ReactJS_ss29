import { useState } from 'react';

const Ex7 = () => {
    const [arr, setArr] = useState<number[]>([]);

    const handleAddNumber = () => {
        const randomNumber = Math.floor(Math.random() * 10);
        setArr([...arr, randomNumber]);
    };

    return (
        <div>
            <button onClick={handleAddNumber}>add element</button>
            <p>{'['}{arr.join(', ')}{']'}</p> 
        </div>
    );
};
export default Ex7;