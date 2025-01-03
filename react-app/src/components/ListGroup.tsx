function ListGroup() {
    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London'
    ]
    
    return (
        <>
            <h1>List Group</h1>
            {items.length === 0 && <h3>No items found!</h3>}
            <ul className="list-group">
                {items.map((item) => (
                    <li className="list-group-item" key={item}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default ListGroup