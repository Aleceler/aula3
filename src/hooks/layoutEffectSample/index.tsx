import React, {useLayoutEffect, useRef, useState} from "react";

const LayoutEffectSample = () => {
    const [bgColor, setBgColor] = useState("lightblue");
    const boxRef = useRef(null);

    useLayoutEffect(() => {
        if (boxRef.current) {
            const height = boxRef.current.offsetHeight;
            setBgColor(height > 100 ? "lightgreen" : "lightcoral");
        }
    }, []);

    return (
        <div>
            <div
                ref={boxRef}
                style={{
                    height: "150px",
                    backgroundColor: bgColor,
                    margin: "20px 0",
                }}
            >
                Height: {boxRef.current?.offsetHeight}px
            </div>
        </div>
    );
};

export default LayoutEffectSample;