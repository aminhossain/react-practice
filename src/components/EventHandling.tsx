import { MouseEvent } from "react";
function EventHandling() {
    const items = [
        'Dhaka',
        'Comilla',
        'Chittagong',
        'Rajshashi',
        'Barisal'
    ];

    //Event Handling
    const handleClick =  (event : MouseEvent) => console.log(event);
    
    return (
        <>
            <h1 className="text-success">Group List: Event Handling</h1>
            {items.length === 0 && <h3>No items found!</h3>}
            <ul className="list-group">
                {
                    items.map((item, index) => (
                        <li className='list-group-item' key={item} onClick={handleClick}>{item}</li>
                    ))  
                }
            </ul>
        </>
    )
}

export default EventHandling;