import { useState } from 'react';

const Ex8 = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button onClick={incrementCount}>Click {count}</button>
        </div>
    );
};

export default Ex8;