import React, { useState } from 'react';

const TextInputComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <p>Dữ liệu người dùng nhập   {inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />

    </div>
  );
};

export default TextInputComponent;


