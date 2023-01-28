import React from 'react'


function Square({clickedArray, handleClick}) {
  return (
    <div className='board'>
      {/* //cartographie le tableau */}
        {clickedArray.map((item, index) => {
          // si la case est vide
          if (item === "") {
            return (
              <div 
                key={index} 
                className='square' 
                onClick={() => handleClick(index)}
                > 
                {/* //pour voir la valeur */}
                  {item}
                </div>
              );  
          } else {
            return (
              <div key={index} className="square clicked"> 
                {item}
              </div>
            );
          }
        })}
    </div>
  );
}

export default Square