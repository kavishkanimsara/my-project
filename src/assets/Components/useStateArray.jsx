import { useState } from "react";

const HooksTwo = () => {
    const array = [1 ,2 ,3 ,4 ,5];
    const [items, setItems] = useState(array);

    const addItem = () => {
        setItems(
            [...items, items.length + 1]
        )

    }
  return (
    <div>
        <button onClick={addItem}>Add Item</button>
        <ul>
            {items.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default HooksTwo