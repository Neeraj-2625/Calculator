import React from 'react';

function Button({content,handleSubmit}) {
    return (
        <div className='h-20 w-20 text-center text-white bg-btn-color rounded-lg p-7 m-2
          cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-cust'
          onClick={handleSubmit}>
            {content}
        </div>
    );
}

export default Button;