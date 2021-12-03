import React from "react";
import './imageslider.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function BtnSlider({ direction, moveSlide }) {

    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            {
                direction === 'next' ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />
            }

        </button>
    );
}