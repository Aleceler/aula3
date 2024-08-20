import { useMemo, useState } from 'react';

 const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
    return {
        id: i,
        isSelected: i === 29_999_998,
    };
});

const MemoSample = () =>  {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    const selectedItem =
        // items.find((item) => item.isSelected)
        useMemo(
        () => items.find((item) => item.isSelected),
        [count, items],
    );

    return (
        <div className='tutorial'>
            <h1>Count: {count}</h1>
            <h1>Selected Item: {selectedItem?.id}</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

export default MemoSample;