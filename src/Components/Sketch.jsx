import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';
import { popularProducts } from '../data'


const Sketch = () => {

    return (
        <>
            <h1 className="text-center border-b-2  ">skethses</h1>

            <div >
                <Zoom scale={0.01}>
                    {
                        popularProducts.map((each, index) =>
                            <img key={index} style={{ width: "100%", height: "550px" }} src={each.img} />)
                    }
                </Zoom>
            </div>



        </>
    )
}

export default Sketch
