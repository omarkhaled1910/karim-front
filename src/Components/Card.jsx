import React from 'react'
import dataSlider from '../Components/ImageSlider/dataSlider'

const Card = () => {

    return (
        <div className="w-full bg-fixed   flex  flex-row sm:flex-col h-2/3 bg-gray-600 text-gray-300 " >
            <div className="  m-7 flex-1 flex flex-col " >
                <div className="p-5 font-sans text-center justify-items-center">

                    < h2 className=" " > Work Shop Name</h2>
                </div>
                <p className="text-center p-5">Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit.
                    Numquam magnam, labore tempora, harum
                    laboriosam aliquid culpa debitis iste,
                    facere neque quidem! Assumenda deleniti
                    dolore sint odio, eveniet aperiam mollitia
                    aspernatur</p>

                <div className="flex flex-col items-center  ">

                    <h1>STARTS AT</h1>
                    <div className="flex-row justify-center flex p-4  ">

                        <div className=" p-2  text-center text-gray-100 w-15  h-17" >
                            <h2>7 /</h2>
                        </div>
                        <div className=" p-2  text-center text-gray-100 w-15  h-17" >
                            <h2>7 /</h2>
                        </div>
                        <div className=" p-2  text-center text-gray-100 w-15  h-17" >
                            <h2>2022</h2>
                        </div>

                    </div>

                </div>
                <span className=" text-center mb-4 ">BOOK YOUR PLACE NOW</span>
                <button className="p-4 text-center m-1 hover:text-red-800 hover:border-gray-900 bg-gray-900 cursor-pointer border-white border-2 ">BOOK </button>

                <span className=" text-center mb-4 bg-gray-900 text-red-800 " >Only 4 places left :)</span>

            </div>

            <div className="flex-1 ">

                < h2 > omar alzeft Images</h2>



            </div>
        </div >
    )
}

export default Card
