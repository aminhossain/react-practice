import { MouseEvent, useState } from "react";
function ComponentRendering() {
    // Dynamic list rendering
    const items = [
        'Dhaka',
        'Comilla',
        'Chittagong',
        'Rajshashi',
        'Barisal'
    ];
    
    return (
        <>
            <h1 className="text-secondary">Group List: Rendering</h1>
            {items.length === 0 && <h3>No items found!</h3>}
            <ul className="list-group">
                {
                    items.map((item, index) => (
                        <li className='list-group-item' key={item}>{item}</li>
                    ))  
                }
            </ul>
        </>
    )
}

export default ComponentRendering;