import React from "react";
import Link from 'next/link'
const imgWithClick = { cursor: "pointer" };

const Photo = ({ index, onClick, photo, margin, direction, top, left }) => {
    const imgStyle = { margin: margin };
    if (direction === "column") {
        imgStyle.position = "absolute";
        imgStyle.left = left;
        imgStyle.top = top;
    }

    const handleClick = event => {

        onClick(event, { photo, index });
    };
    //hover:brightness-75
    return (
        <>
            <Link href="/tile">
                {/* <p className="text-white">Dashboard</p> */}
                <img
                    className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-[20px] p-1 hover:brightness-90"
                    style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
                    {...photo}
                    onClick={onClick ? handleClick : null}
                    alt="img"
                />
            </Link>
        </>
    );
};

export default Photo;
