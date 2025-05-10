import { useState } from "react";
function ReactHook() {
    const items = [
        'Dhaka',
        'Comilla',
        'Chittagong',
        'Rajshashi',
        'Barisal'
    ];

    //hook
    const [selectedIndex, setSelectedIndex] = useState(-1);
    
    return (
        <>
            <h1>Group List: React Hook</h1>
            {items.length === 0 && <h3>No items found!</h3>}
            <ul className="list-group">
                {
                    items.map((item, index) => (
                        <li className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item} onClick={ () => setSelectedIndex(index)}>{item}</li>
                    ))  
                }
            </ul>
        </>
    )
}

export default ReactHook;