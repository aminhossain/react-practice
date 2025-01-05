import { MouseEvent, useState } from "react";
function CreateComponent() {
    const items = [
        'Dhaka',
        'Comilla',
        'Chittagong',
        'Rajshashi',
        'Barisal'
    ];
    
    return (
        <>
            <h1 className="text-primary">Group List: Component</h1>
            {items.length === 0 && <h3>No items found!</h3>}
            <ul className="list-group">
                {
                    items.map((item, index) => (
                        <li className='list-group-item' key={item} >{item}</li>
                    ))  
                }
            </ul>
        </>
    )
}

export default CreateComponent;