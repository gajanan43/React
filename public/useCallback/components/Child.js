import React from 'react'

const Child = React.memo(({ name, handleIncrementClick }) => {
    console.log('Child component rendered');
    
    return (
        <div>
            <button onClick={handleIncrementClick}>{name}</button>
        </div>
    )   
});

export default Child
