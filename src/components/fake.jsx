import React, { useState, useEffect, useRef } from 'react';

const ShowButton = () => {
  const [isShown, setIsShown] = useState(false);
  const buttonRef = useRef();

  const handleClick = () => {
    setIsShown(!isShown);
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsShown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  
  return (
    <div className="flex flex-col items-center space-y-4 mb-[200px]">
      <button
        ref={buttonRef}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
        onClick={handleClick}
      >
        Click Me
      </button>
      {isShown && (
        <div className="text-green-600 font-semibold p-2 bg-gray-100 rounded-md">
          Content to be shown when the button is clicked!
        </div>
      )}
    </div>
  );
};

export default ShowButton;
