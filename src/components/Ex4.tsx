import React, { useState } from 'react';

const TextInputComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
                  <p>Tỉnh/thành phố hiện tại{inputValue}</p>
            <select value={inputValue} onChange={handleInputChange}>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hà Nam">Hà Nam</option>
                <option value="Danang">Ninh Bình</option>
                <option value="Ninh Bình">Thanh Hóa</option>
            </select>

    </div>
  );
};

export default TextInputComponent;


